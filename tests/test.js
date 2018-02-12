module.exports = {
    'Creating lesson should set lecturerLessonID' : function (browser) {
        browser
            .url(browser.launchUrl)
            .waitForElementVisible('a[href="/create/"]', 1000)
            .click('a[href="/create/"]')
            .waitForElementVisible('[data-mod="refresh-screen"]', 5000)
            .execute(function() {
                return window.localStorage.getItem('lecturerLessonId');
            }, [], function(result) {
                this.assert.equal(typeof result.value, 'string');
            })
            .end();
    },
    'User should be able to enter with lecturerID': function (browser) {
        var id;

        browser
            .url(browser.launchUrl)
            .waitForElementVisible('a[href="/create/"]', 1000)
            .click('a[href="/create/"]')
            .waitForElementVisible('[data-mod="refresh-screen"]', 5000)
            .execute(function() {
                return window.localStorage.getItem('lecturerLessonId');
            }, [], function(result) {
                id = result.value;
            })
            .execute(function (url) {
                window.open(url);
            }, [browser.launchUrl])
            .windowHandles(function(result) {
                this.switchWindow(result.value[1]);
                this.setValue('[name="lesson_id"]', id);
                this.click('[form="lesson-id-form"]');
                this.assert.containsText('.vote-section', id);
            })
            .end();
    },
    'Lecturer should reflect number of students': function(browser) {
        var id;

        browser
            .url(browser.launchUrl)
            .waitForElementVisible('a[href="/create/"]', 1000)
            .click('a[href="/create/"]')
            .waitForElementVisible('[data-mod="refresh-screen"]', 5000)
            .execute(function() {
                return window.localStorage.getItem('lecturerLessonId');
            }, [], function(result) {
                id = result.value;
            })
            .execute(function (url) {
                window.open(url);
            }, [browser.launchUrl])
            .windowHandles(function(result) {
                this.switchWindow(result.value[1]);
                this.setValue('[name="lesson_id"]', id);
                this.click('[form="lesson-id-form"]');
                this.waitForElementVisible('.vote-section__links', 1000);
                this.switchWindow(result.value[0]);
                this.pause(1000);
                this.assert.containsText('#participants', '1');
            })
            .end();
    },
    'Lecturer should not be able to skip section': function(browser) {
        var id;

        browser
            .url(browser.launchUrl)
            .waitForElementVisible('a[href="/create/"]', 1000)
            .click('a[href="/create/"]')
            .waitForElementVisible('[data-mod="refresh-screen"]', 5000)
            .execute(function() {
                return window.localStorage.getItem('lecturerLessonId');
            }, [], function(result) {
                id = result.value;
            })
            .execute(function (url) {
                window.open(url);
            }, [browser.launchUrl])
            .windowHandles(function(result) {
                this.switchWindow(result.value[1]);
                this.setValue('[name="lesson_id"]', id);
                this.click('[form="lesson-id-form"]');
                this.switchWindow(result.value[0]);
                this.assert.attributeContains('.lesson-signup button[type="submit"]', 'disabled', true);
            })
            .end();
    },
    'Student voting down should reflect on lecturer': function(browser) {
        var id;

        browser
            .url(browser.launchUrl)
            .waitForElementVisible('a[href="/create/"]', 1000)
            .click('a[href="/create/"]')
            .waitForElementVisible('[data-mod="refresh-screen"]', 5000)
            .execute(function() {
                return window.localStorage.getItem('lecturerLessonId');
            }, [], function(result) {
                id = result.value;
            })
            .execute(function (url) {
                window.open(url);
            }, [browser.launchUrl])
            .windowHandles(function(result) {
                this.switchWindow(result.value[1]);
                this.setValue('[name="lesson_id"]', id);
                this.click('[form="lesson-id-form"]');
                this.waitForElementVisible('.vote-section__links', 1000);
                this.assert.hidden('.vote-section__dialog-message');
                this.click('.vote-section__links');
                this.waitForElementVisible('.vote-section__dialog-message', 1000);
                this.switchWindow(result.value[0]);
                this.assert.visible('.js-next-section', 1000);
            })
            .end();
    },
    'lecturer should be able to skip after total down votes': function(browser) {
        var id;

        browser
            .url(browser.launchUrl)
            .waitForElementVisible('a[href="/create/"]', 1000)
            .click('a[href="/create/"]')
            .waitForElementVisible('[data-mod="refresh-screen"]', 5000)
            .execute(function() {
                return window.localStorage.getItem('lecturerLessonId');
            }, [], function(result) {
                id = result.value;
            })
            .execute(function (url) {
                window.open(url);
            }, [browser.launchUrl])
            .windowHandles(function(result) {
                this.switchWindow(result.value[1]);
                this.setValue('[name="lesson_id"]', id);
                this.click('[form="lesson-id-form"]');
                this.waitForElementVisible('.vote-section__links', 1000);
                this.assert.hidden('.vote-section__dialog-message');
                this.click('.vote-section__links');
                this.waitForElementVisible('.vote-section__dialog-message', 1000);
                this.switchWindow(result.value[0]);
                this.assert.visible('.js-next-section', 1000);
                this.assert.elementNotPresent('.lesson-signup button[disabled]');
                this.click('.lesson-signup button');
                this.waitForElementVisible('.lesson-signup button[disabled]', 1000);
            })
            .end();
    },
    'Student should be able to vote again after next section': function(browser) {
        var id;

        browser
            .url(browser.launchUrl)
            .waitForElementVisible('a[href="/create/"]', 1000)
            .click('a[href="/create/"]')
            .waitForElementVisible('[data-mod="refresh-screen"]', 5000)
            .execute(function () {
                return window.localStorage.getItem('lecturerLessonId');
            }, [], function (result) {
                id = result.value;
            })
            .execute(function (url) {
                window.open(url);
            }, [browser.launchUrl])
            .windowHandles(function (result) {
                this.switchWindow(result.value[1]);
                this.setValue('[name="lesson_id"]', id);
                this.click('[form="lesson-id-form"]');
                this.waitForElementVisible('.vote-section__links', 1000);
                this.click('.vote-section__links');
                this.switchWindow(result.value[0]);
                this.click('.lesson-signup button');
                this.switchWindow(result.value[1]);
                this.pause(1000);
                this.waitForElementNotVisible('.vote-section__dialog-message', 1000);
            })
            .end();
    }
}
