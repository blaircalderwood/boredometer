(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var mods = {
    refreshScreen: require('./refresh-screen'),
    submitVote: require('./submit-vote')
};

var _modules = _('[data-mod]');

if (_modules) {
    _modules.forEach(function (mod) {
        var name = mod.getAttribute('data-mod').split(/-/).reduce(function (sum, val) {
            return sum + (val.charAt(0).toUpperCase() + val.slice(1));
        }, '');

        mods[name.charAt(0).toLowerCase() + name.slice(1)](mod);
    });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMmZjMTZmYzYuanMiXSwibmFtZXMiOlsibW9kcyIsInJlZnJlc2hTY3JlZW4iLCJyZXF1aXJlIiwic3VibWl0Vm90ZSIsIl9tb2R1bGVzIiwiXyIsImZvckVhY2giLCJtb2QiLCJuYW1lIiwiZ2V0QXR0cmlidXRlIiwic3BsaXQiLCJyZWR1Y2UiLCJzdW0iLCJ2YWwiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsT0FBTztBQUNUQyxtQkFBZUMsUUFBUSxrQkFBUixDQUROO0FBRVRDLGdCQUFZRCxRQUFRLGVBQVI7QUFGSCxDQUFiOztBQU1BLElBQU1FLFdBQVdDLEVBQUUsWUFBRixDQUFqQjs7QUFFQSxJQUFHRCxRQUFILEVBQWE7QUFDVEEsYUFBU0UsT0FBVCxDQUFpQixVQUFDQyxHQUFELEVBQVM7QUFDdEIsWUFBTUMsT0FBT0QsSUFBSUUsWUFBSixDQUFpQixVQUFqQixFQUE2QkMsS0FBN0IsQ0FBbUMsR0FBbkMsRUFBd0NDLE1BQXhDLENBQStDLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ3RFLG1CQUFPRCxPQUFPQyxJQUFJQyxNQUFKLENBQVcsQ0FBWCxFQUFjQyxXQUFkLEtBQThCRixJQUFJRyxLQUFKLENBQVUsQ0FBVixDQUFyQyxDQUFQO0FBQ0gsU0FGWSxFQUVWLEVBRlUsQ0FBYjs7QUFJQWhCLGFBQUtRLEtBQUtNLE1BQUwsQ0FBWSxDQUFaLEVBQWVHLFdBQWYsS0FBK0JULEtBQUtRLEtBQUwsQ0FBVyxDQUFYLENBQXBDLEVBQW1EVCxHQUFuRDtBQUNILEtBTkQ7QUFPSCIsImZpbGUiOiJmYWtlXzJmYzE2ZmM2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9kcyA9IHtcbiAgICByZWZyZXNoU2NyZWVuOiByZXF1aXJlKCcuL3JlZnJlc2gtc2NyZWVuJyksXG4gICAgc3VibWl0Vm90ZTogcmVxdWlyZSgnLi9zdWJtaXQtdm90ZScpXG59O1xuXG5cbmNvbnN0IF9tb2R1bGVzID0gXygnW2RhdGEtbW9kXScpO1xuXG5pZihfbW9kdWxlcykge1xuICAgIF9tb2R1bGVzLmZvckVhY2goKG1vZCkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gbW9kLmdldEF0dHJpYnV0ZSgnZGF0YS1tb2QnKS5zcGxpdCgvLS8pLnJlZHVjZSgoc3VtLCB2YWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzdW0gKyAodmFsLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsLnNsaWNlKDEpKTtcbiAgICAgICAgfSwgJycpO1xuXG4gICAgICAgIG1vZHNbbmFtZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIG5hbWUuc2xpY2UoMSldKG1vZCk7XG4gICAgfSk7XG59XG4iXX0=
},{"./refresh-screen":2,"./submit-vote":3}],2:[function(require,module,exports){
'use strict';

module.exports = function () {
    var _timer = _('.js-timer');

    _('.js-share-lesson')[0].addEventListener('click', function () {
        window.open(this.href, '_blank', 'height=450, width=650, left=20, location=no, top=20, titlebar=no, menubar=no');
    });

    function enableNextSection() {
        _(document.lessonControl).find('[type=submit]')[0].removeAttribute('disabled');
        _('.js-next-section').removeClass('hide');
    }

    function _update() {
        var timeElapsed = Math.floor(-(localStorage.getItem('startTime') - new Date().getTime()) / 1000);
        var hours = Math.floor(timeElapsed / 3600);
        var mins = ('0' + Math.floor(timeElapsed / 60)).slice(-2);
        var secs = ('0' + Math.floor(timeElapsed)).slice(-2);
        hours = hours ? ('0' + hours + ':').slice(-2) : '';

        _timer[0].innerText = '' + hours + mins + ':' + secs;
        window.setInterval(_update, 100);
    }

    setInterval(function () {
        $.get('/lesson/' + localStorage.getItem('lecturerLessonId') + '/update', function (data) {
            $('#participants').text(data.participants);

            if (data.participants) {
                if (!localStorage.getItem('startTime')) {
                    localStorage.setItem('startTime', new Date().getTime());
                }

                _update();

                if (data.participants === data.amount_bored) {
                    enableNextSection();
                }
            }
        });
    }, 1000);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZnJlc2gtc2NyZWVuLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJfdGltZXIiLCJfIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsIm9wZW4iLCJocmVmIiwiZW5hYmxlTmV4dFNlY3Rpb24iLCJkb2N1bWVudCIsImxlc3NvbkNvbnRyb2wiLCJmaW5kIiwicmVtb3ZlQXR0cmlidXRlIiwicmVtb3ZlQ2xhc3MiLCJfdXBkYXRlIiwidGltZUVsYXBzZWQiLCJNYXRoIiwiZmxvb3IiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiRGF0ZSIsImdldFRpbWUiLCJob3VycyIsIm1pbnMiLCJzbGljZSIsInNlY3MiLCJpbm5lclRleHQiLCJzZXRJbnRlcnZhbCIsIiQiLCJnZXQiLCJkYXRhIiwidGV4dCIsInBhcnRpY2lwYW50cyIsInNldEl0ZW0iLCJhbW91bnRfYm9yZWQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLE9BQVAsR0FBaUIsWUFBTTtBQUNuQixRQUFNQyxTQUFTQyxFQUFFLFdBQUYsQ0FBZjs7QUFFQUEsTUFBRSxrQkFBRixFQUFzQixDQUF0QixFQUNLQyxnQkFETCxDQUNzQixPQUR0QixFQUMrQixZQUFXO0FBQ2xDQyxlQUFPQyxJQUFQLENBQVksS0FBS0MsSUFBakIsRUFBdUIsUUFBdkIsRUFBaUMsOEVBQWpDO0FBQ0gsS0FITDs7QUFLQSxhQUFTQyxpQkFBVCxHQUE2QjtBQUN6QkwsVUFBRU0sU0FBU0MsYUFBWCxFQUEwQkMsSUFBMUIsQ0FBK0IsZUFBL0IsRUFBZ0QsQ0FBaEQsRUFBbURDLGVBQW5ELENBQW1FLFVBQW5FO0FBQ0FULFVBQUUsa0JBQUYsRUFBc0JVLFdBQXRCLENBQWtDLE1BQWxDO0FBQ0g7O0FBRUQsYUFBU0MsT0FBVCxHQUFtQjtBQUNmLFlBQU1DLGNBQWNDLEtBQUtDLEtBQUwsQ0FBVyxFQUFFQyxhQUFhQyxPQUFiLENBQXFCLFdBQXJCLElBQW9DLElBQUlDLElBQUosR0FBV0MsT0FBWCxFQUF0QyxJQUE4RCxJQUF6RSxDQUFwQjtBQUNBLFlBQUlDLFFBQVFOLEtBQUtDLEtBQUwsQ0FBV0YsY0FBYyxJQUF6QixDQUFaO0FBQ0EsWUFBTVEsT0FBTyxPQUFJUCxLQUFLQyxLQUFMLENBQVdGLGNBQWMsRUFBekIsQ0FBSixFQUFtQ1MsS0FBbkMsQ0FBeUMsQ0FBQyxDQUExQyxDQUFiO0FBQ0EsWUFBTUMsT0FBTyxPQUFJVCxLQUFLQyxLQUFMLENBQVdGLFdBQVgsQ0FBSixFQUE4QlMsS0FBOUIsQ0FBb0MsQ0FBQyxDQUFyQyxDQUFiO0FBQ0FGLGdCQUFRQSxRQUFRLE9BQUlBLEtBQUosUUFBYUUsS0FBYixDQUFtQixDQUFDLENBQXBCLENBQVIsR0FBaUMsRUFBekM7O0FBRUF0QixlQUFPLENBQVAsRUFBVXdCLFNBQVYsUUFBeUJKLEtBQXpCLEdBQWlDQyxJQUFqQyxTQUF5Q0UsSUFBekM7QUFDQXBCLGVBQU9zQixXQUFQLENBQW1CYixPQUFuQixFQUE0QixHQUE1QjtBQUNIOztBQUVEYSxnQkFBWSxZQUFNO0FBQ2RDLFVBQUVDLEdBQUYsY0FBaUJYLGFBQWFDLE9BQWIsQ0FBcUIsa0JBQXJCLENBQWpCLGNBQW9FLFVBQUNXLElBQUQsRUFBVTtBQUMxRUYsY0FBRSxlQUFGLEVBQW1CRyxJQUFuQixDQUF3QkQsS0FBS0UsWUFBN0I7O0FBRUEsZ0JBQUdGLEtBQUtFLFlBQVIsRUFBc0I7QUFDbEIsb0JBQUcsQ0FBQ2QsYUFBYUMsT0FBYixDQUFxQixXQUFyQixDQUFKLEVBQXVDO0FBQ25DRCxpQ0FBYWUsT0FBYixDQUFxQixXQUFyQixFQUFrQyxJQUFJYixJQUFKLEdBQVdDLE9BQVgsRUFBbEM7QUFDSDs7QUFFRFA7O0FBRUEsb0JBQUdnQixLQUFLRSxZQUFMLEtBQXNCRixLQUFLSSxZQUE5QixFQUE0QztBQUN4QzFCO0FBQ0g7QUFDSjtBQUNKLFNBZEQ7QUFlSCxLQWhCRCxFQWdCRyxJQWhCSDtBQWlCSCxDQXpDRCIsImZpbGUiOiJyZWZyZXNoLXNjcmVlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IF90aW1lciA9IF8oJy5qcy10aW1lcicpO1xuXG4gICAgXygnLmpzLXNoYXJlLWxlc3NvbicpWzBdXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgd2luZG93Lm9wZW4odGhpcy5ocmVmLCAnX2JsYW5rJywgJ2hlaWdodD00NTAsIHdpZHRoPTY1MCwgbGVmdD0yMCwgbG9jYXRpb249bm8sIHRvcD0yMCwgdGl0bGViYXI9bm8sIG1lbnViYXI9bm8nKTtcbiAgICAgICAgfSk7ICBcblxuICAgIGZ1bmN0aW9uIGVuYWJsZU5leHRTZWN0aW9uKCkge1xuICAgICAgICBfKGRvY3VtZW50Lmxlc3NvbkNvbnRyb2wpLmZpbmQoJ1t0eXBlPXN1Ym1pdF0nKVswXS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIF8oJy5qcy1uZXh0LXNlY3Rpb24nKS5yZW1vdmVDbGFzcygnaGlkZScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF91cGRhdGUoKSB7XG4gICAgICAgIGNvbnN0IHRpbWVFbGFwc2VkID0gTWF0aC5mbG9vcigtKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGFydFRpbWUnKSAtIG5ldyBEYXRlKCkuZ2V0VGltZSgpKSAvIDEwMDApO1xuICAgICAgICBsZXQgaG91cnMgPSBNYXRoLmZsb29yKHRpbWVFbGFwc2VkIC8gMzYwMCk7XG4gICAgICAgIGNvbnN0IG1pbnMgPSBgMCR7TWF0aC5mbG9vcih0aW1lRWxhcHNlZCAvIDYwKX1gLnNsaWNlKC0yKTtcbiAgICAgICAgY29uc3Qgc2VjcyA9IGAwJHtNYXRoLmZsb29yKHRpbWVFbGFwc2VkKX1gLnNsaWNlKC0yKTtcbiAgICAgICAgaG91cnMgPSBob3VycyA/IGAwJHtob3Vyc306YC5zbGljZSgtMikgOiAnJztcblxuICAgICAgICBfdGltZXJbMF0uaW5uZXJUZXh0ID0gYCR7aG91cnN9JHttaW5zfToke3NlY3N9YDtcbiAgICAgICAgd2luZG93LnNldEludGVydmFsKF91cGRhdGUsIDEwMCk7XG4gICAgfVxuXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAkLmdldChgL2xlc3Nvbi8ke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdsZWN0dXJlckxlc3NvbklkJyl9L3VwZGF0ZWAsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAkKCcjcGFydGljaXBhbnRzJykudGV4dChkYXRhLnBhcnRpY2lwYW50cyk7XG5cbiAgICAgICAgICAgIGlmKGRhdGEucGFydGljaXBhbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGFydFRpbWUnKSkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RhcnRUaW1lJywgbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF91cGRhdGUoKTtcblxuICAgICAgICAgICAgICAgIGlmKGRhdGEucGFydGljaXBhbnRzID09PSBkYXRhLmFtb3VudF9ib3JlZCkge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVOZXh0U2VjdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMTAwMCk7XG59O1xuIl19
},{}],3:[function(require,module,exports){
'use strict';

module.exports = function (mod) {
    var _voteBored = _(mod);
    var _votedMessage = _('.js-voted-message');
    var participantId = localStorage.getItem('participantId') ? '/' + localStorage.getItem('participantId') : '';

    function pollSection() {
        setInterval(function () {
            $.get('/vote/' + localStorage.getItem('studentLessonId') + '/update', function (data) {
                if (data['sectionNumber'] !== parseInt(localStorage.getItem('sectionNumber'))) {
                    localStorage.setItem('sectionNumber', data['sectionNumber']);
                    _votedMessage.addClass('hide');
                    _voteBored.removeClass('voting--disabled');
                }
            });
        }, 1000);
    }

    $.get('/addparticipant/' + localStorage.getItem('studentLessonId') + participantId, function (data) {
        if (!participantId) {
            localStorage.setItem('participantId', data['participantId']);
        }

        _voteBored.find('.vote-section__links').forEach(function (link) {
            link.addEventListener('click', function (e) {
                e.preventDefault();

                if (!_voteBored.hasClass('voting--disabled')) {
                    var _link = _(e.currentTarget);

                    $.get(_link[0].href, function (data) {
                        if (data.success) {
                            _votedMessage.removeClass('hide');
                            _voteBored.addClass('voting--disabled');
                            pollSection();
                        }
                    });
                }
            });
        });
    });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pdC12b3RlLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJtb2QiLCJfdm90ZUJvcmVkIiwiXyIsIl92b3RlZE1lc3NhZ2UiLCJwYXJ0aWNpcGFudElkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBvbGxTZWN0aW9uIiwic2V0SW50ZXJ2YWwiLCIkIiwiZ2V0IiwiZGF0YSIsInBhcnNlSW50Iiwic2V0SXRlbSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJmaW5kIiwiZm9yRWFjaCIsImxpbmsiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFzQ2xhc3MiLCJfbGluayIsImN1cnJlbnRUYXJnZXQiLCJocmVmIiwic3VjY2VzcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsT0FBUCxHQUFpQixVQUFDQyxHQUFELEVBQVM7QUFDdEIsUUFBTUMsYUFBYUMsRUFBRUYsR0FBRixDQUFuQjtBQUNBLFFBQU1HLGdCQUFnQkQsRUFBRSxtQkFBRixDQUF0QjtBQUNBLFFBQU1FLGdCQUFnQkMsYUFBYUMsT0FBYixDQUFxQixlQUFyQixVQUNSRCxhQUFhQyxPQUFiLENBQXFCLGVBQXJCLENBRFEsR0FFWixFQUZWOztBQUlBLGFBQVNDLFdBQVQsR0FBdUI7QUFDbkJDLG9CQUFZLFlBQU07QUFDZEMsY0FBRUMsR0FBRixZQUFlTCxhQUFhQyxPQUFiLENBQXFCLGlCQUFyQixDQUFmLGNBQWlFLFVBQUNLLElBQUQsRUFBVTtBQUN2RSxvQkFBR0EsS0FBSyxlQUFMLE1BQTBCQyxTQUFTUCxhQUFhQyxPQUFiLENBQXFCLGVBQXJCLENBQVQsQ0FBN0IsRUFBOEU7QUFDMUVELGlDQUFhUSxPQUFiLENBQXFCLGVBQXJCLEVBQXNDRixLQUFLLGVBQUwsQ0FBdEM7QUFDQVIsa0NBQWNXLFFBQWQsQ0FBdUIsTUFBdkI7QUFDQWIsK0JBQVdjLFdBQVgsQ0FBdUIsa0JBQXZCO0FBQ0g7QUFDSixhQU5EO0FBT0gsU0FSRCxFQVFHLElBUkg7QUFTSDs7QUFHRE4sTUFBRUMsR0FBRixzQkFBeUJMLGFBQWFDLE9BQWIsQ0FBcUIsaUJBQXJCLENBQXpCLEdBQW1FRixhQUFuRSxFQUFvRixVQUFDTyxJQUFELEVBQVU7QUFDMUYsWUFBRyxDQUFDUCxhQUFKLEVBQW1CO0FBQ2ZDLHlCQUFhUSxPQUFiLENBQXFCLGVBQXJCLEVBQXNDRixLQUFLLGVBQUwsQ0FBdEM7QUFDSDs7QUFFRFYsbUJBQVdlLElBQVgsQ0FBZ0Isc0JBQWhCLEVBQXdDQyxPQUF4QyxDQUFnRCxVQUFDQyxJQUFELEVBQVU7QUFDdERBLGlCQUFLQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixVQUFTQyxDQUFULEVBQVk7QUFDdkNBLGtCQUFFQyxjQUFGOztBQUVBLG9CQUFHLENBQUNwQixXQUFXcUIsUUFBWCxDQUFvQixrQkFBcEIsQ0FBSixFQUE2QztBQUN6Qyx3QkFBTUMsUUFBUXJCLEVBQUVrQixFQUFFSSxhQUFKLENBQWQ7O0FBRUFmLHNCQUFFQyxHQUFGLENBQU1hLE1BQU0sQ0FBTixFQUFTRSxJQUFmLEVBQXFCLFVBQUNkLElBQUQsRUFBVTtBQUMzQiw0QkFBSUEsS0FBS2UsT0FBVCxFQUFrQjtBQUNkdkIsMENBQWNZLFdBQWQsQ0FBMEIsTUFBMUI7QUFDQWQsdUNBQVdhLFFBQVgsQ0FBb0Isa0JBQXBCO0FBQ0FQO0FBQ0g7QUFDSixxQkFORDtBQU9IO0FBQ0osYUFkRDtBQWVILFNBaEJEO0FBaUJILEtBdEJEO0FBdUJILENBM0NEIiwiZmlsZSI6InN1Ym1pdC12b3RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAobW9kKSA9PiB7XG4gICAgY29uc3QgX3ZvdGVCb3JlZCA9IF8obW9kKTtcbiAgICBjb25zdCBfdm90ZWRNZXNzYWdlID0gXygnLmpzLXZvdGVkLW1lc3NhZ2UnKTtcbiAgICBjb25zdCBwYXJ0aWNpcGFudElkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BhcnRpY2lwYW50SWQnKSBcbiAgICAgICAgICAgID8gYC8ke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdwYXJ0aWNpcGFudElkJyl9YFxuICAgICAgICAgICAgOiAnJztcblxuICAgIGZ1bmN0aW9uIHBvbGxTZWN0aW9uKCkge1xuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAkLmdldChgL3ZvdGUvJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3R1ZGVudExlc3NvbklkJyl9L3VwZGF0ZWAsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZGF0YVsnc2VjdGlvbk51bWJlciddICE9PSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VjdGlvbk51bWJlcicpKSkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VjdGlvbk51bWJlcicsIGRhdGFbJ3NlY3Rpb25OdW1iZXInXSk7XG4gICAgICAgICAgICAgICAgICAgIF92b3RlZE1lc3NhZ2UuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgX3ZvdGVCb3JlZC5yZW1vdmVDbGFzcygndm90aW5nLS1kaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cblxuICAgICQuZ2V0KGAvYWRkcGFydGljaXBhbnQvJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3R1ZGVudExlc3NvbklkJyl9JHtwYXJ0aWNpcGFudElkfWAsIChkYXRhKSA9PiB7XG4gICAgICAgIGlmKCFwYXJ0aWNpcGFudElkKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGFydGljaXBhbnRJZCcsIGRhdGFbJ3BhcnRpY2lwYW50SWQnXSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIF92b3RlQm9yZWQuZmluZCgnLnZvdGUtc2VjdGlvbl9fbGlua3MnKS5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGlmKCFfdm90ZUJvcmVkLmhhc0NsYXNzKCd2b3RpbmctLWRpc2FibGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgX2xpbmsgPSBfKGUuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgJC5nZXQoX2xpbmtbMF0uaHJlZiwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm90ZWRNZXNzYWdlLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZvdGVCb3JlZC5hZGRDbGFzcygndm90aW5nLS1kaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvbGxTZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG4iXX0=
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW1ncmVnb3J5L1NpdGVzL2JvcmVkb21ldGVyL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc2FtZ3JlZ29yeS9TaXRlcy9ib3JlZG9tZXRlci9zcmMvanMvZmFrZV8yZmMxNmZjNi5qcyIsIi9Vc2Vycy9zYW1ncmVnb3J5L1NpdGVzL2JvcmVkb21ldGVyL3NyYy9qcy9yZWZyZXNoLXNjcmVlbi5qcyIsIi9Vc2Vycy9zYW1ncmVnb3J5L1NpdGVzL2JvcmVkb21ldGVyL3NyYy9qcy9zdWJtaXQtdm90ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxudmFyIG1vZHMgPSB7XG4gICAgcmVmcmVzaFNjcmVlbjogcmVxdWlyZSgnLi9yZWZyZXNoLXNjcmVlbicpLFxuICAgIHN1Ym1pdFZvdGU6IHJlcXVpcmUoJy4vc3VibWl0LXZvdGUnKVxufTtcblxudmFyIF9tb2R1bGVzID0gXygnW2RhdGEtbW9kXScpO1xuXG5pZiAoX21vZHVsZXMpIHtcbiAgICBfbW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2QpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBtb2QuZ2V0QXR0cmlidXRlKCdkYXRhLW1vZCcpLnNwbGl0KC8tLykucmVkdWNlKGZ1bmN0aW9uIChzdW0sIHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHN1bSArICh2YWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWwuc2xpY2UoMSkpO1xuICAgICAgICB9LCAnJyk7XG5cbiAgICAgICAgbW9kc1tuYW1lLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgbmFtZS5zbGljZSgxKV0obW9kKTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltWmhhMlZmTW1aak1UWm1Zell1YW5NaVhTd2libUZ0WlhNaU9sc2liVzlrY3lJc0luSmxabkpsYzJoVFkzSmxaVzRpTENKeVpYRjFhWEpsSWl3aWMzVmliV2wwVm05MFpTSXNJbDl0YjJSMWJHVnpJaXdpWHlJc0ltWnZja1ZoWTJnaUxDSnRiMlFpTENKdVlXMWxJaXdpWjJWMFFYUjBjbWxpZFhSbElpd2ljM0JzYVhRaUxDSnlaV1IxWTJVaUxDSnpkVzBpTENKMllXd2lMQ0pqYUdGeVFYUWlMQ0owYjFWd2NHVnlRMkZ6WlNJc0luTnNhV05sSWl3aWRHOU1iM2RsY2tOaGMyVWlYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUVzU1VGQlRVRXNUMEZCVHp0QlFVTlVReXh0UWtGQlpVTXNVVUZCVVN4clFrRkJVaXhEUVVST08wRkJSVlJETEdkQ1FVRlpSQ3hSUVVGUkxHVkJRVkk3UVVGR1NDeERRVUZpT3p0QlFVMUJMRWxCUVUxRkxGZEJRVmRETEVWQlFVVXNXVUZCUml4RFFVRnFRanM3UVVGRlFTeEpRVUZIUkN4UlFVRklMRVZCUVdFN1FVRkRWRUVzWVVGQlUwVXNUMEZCVkN4RFFVRnBRaXhWUVVGRFF5eEhRVUZFTEVWQlFWTTdRVUZEZEVJc1dVRkJUVU1zVDBGQlQwUXNTVUZCU1VVc1dVRkJTaXhEUVVGcFFpeFZRVUZxUWl4RlFVRTJRa01zUzBGQk4wSXNRMEZCYlVNc1IwRkJia01zUlVGQmQwTkRMRTFCUVhoRExFTkJRU3RETEZWQlFVTkRMRWRCUVVRc1JVRkJUVU1zUjBGQlRpeEZRVUZqTzBGQlEzUkZMRzFDUVVGUFJDeFBRVUZQUXl4SlFVRkpReXhOUVVGS0xFTkJRVmNzUTBGQldDeEZRVUZqUXl4WFFVRmtMRXRCUVRoQ1JpeEpRVUZKUnl4TFFVRktMRU5CUVZVc1EwRkJWaXhEUVVGeVF5eERRVUZRTzBGQlEwZ3NVMEZHV1N4RlFVVldMRVZCUmxVc1EwRkJZanM3UVVGSlFXaENMR0ZCUVV0UkxFdEJRVXROTEUxQlFVd3NRMEZCV1N4RFFVRmFMRVZCUVdWSExGZEJRV1lzUzBGQkswSlVMRXRCUVV0UkxFdEJRVXdzUTBGQlZ5eERRVUZZTEVOQlFYQkRMRVZCUVcxRVZDeEhRVUZ1UkR0QlFVTklMRXRCVGtRN1FVRlBTQ0lzSW1acGJHVWlPaUptWVd0bFh6Sm1ZekUyWm1NMkxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWTI5dWMzUWdiVzlrY3lBOUlIdGNiaUFnSUNCeVpXWnlaWE5vVTJOeVpXVnVPaUJ5WlhGMWFYSmxLQ2N1TDNKbFpuSmxjMmd0YzJOeVpXVnVKeWtzWEc0Z0lDQWdjM1ZpYldsMFZtOTBaVG9nY21WeGRXbHlaU2duTGk5emRXSnRhWFF0ZG05MFpTY3BYRzU5TzF4dVhHNWNibU52Ym5OMElGOXRiMlIxYkdWeklEMGdYeWduVzJSaGRHRXRiVzlrWFNjcE8xeHVYRzVwWmloZmJXOWtkV3hsY3lrZ2UxeHVJQ0FnSUY5dGIyUjFiR1Z6TG1admNrVmhZMmdvS0cxdlpDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0J1WVcxbElEMGdiVzlrTG1kbGRFRjBkSEpwWW5WMFpTZ25aR0YwWVMxdGIyUW5LUzV6Y0d4cGRDZ3ZMUzhwTG5KbFpIVmpaU2dvYzNWdExDQjJZV3dwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ6ZFcwZ0t5QW9kbUZzTG1Ob1lYSkJkQ2d3S1M1MGIxVndjR1Z5UTJGelpTZ3BJQ3NnZG1Gc0xuTnNhV05sS0RFcEtUdGNiaUFnSUNBZ0lDQWdmU3dnSnljcE8xeHVYRzRnSUNBZ0lDQWdJRzF2WkhOYmJtRnRaUzVqYUdGeVFYUW9NQ2t1ZEc5TWIzZGxja05oYzJVb0tTQXJJRzVoYldVdWMyeHBZMlVvTVNsZEtHMXZaQ2s3WEc0Z0lDQWdmU2s3WEc1OVhHNGlYWDA9IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RpbWVyID0gXygnLmpzLXRpbWVyJyk7XG5cbiAgICBfKCcuanMtc2hhcmUtbGVzc29uJylbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHRoaXMuaHJlZiwgJ19ibGFuaycsICdoZWlnaHQ9NDUwLCB3aWR0aD02NTAsIGxlZnQ9MjAsIGxvY2F0aW9uPW5vLCB0b3A9MjAsIHRpdGxlYmFyPW5vLCBtZW51YmFyPW5vJyk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBlbmFibGVOZXh0U2VjdGlvbigpIHtcbiAgICAgICAgXyhkb2N1bWVudC5sZXNzb25Db250cm9sKS5maW5kKCdbdHlwZT1zdWJtaXRdJylbMF0ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICBfKCcuanMtbmV4dC1zZWN0aW9uJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfdXBkYXRlKCkge1xuICAgICAgICB2YXIgdGltZUVsYXBzZWQgPSBNYXRoLmZsb29yKC0obG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0YXJ0VGltZScpIC0gbmV3IERhdGUoKS5nZXRUaW1lKCkpIC8gMTAwMCk7XG4gICAgICAgIHZhciBob3VycyA9IE1hdGguZmxvb3IodGltZUVsYXBzZWQgLyAzNjAwKTtcbiAgICAgICAgdmFyIG1pbnMgPSAoJzAnICsgTWF0aC5mbG9vcih0aW1lRWxhcHNlZCAvIDYwKSkuc2xpY2UoLTIpO1xuICAgICAgICB2YXIgc2VjcyA9ICgnMCcgKyBNYXRoLmZsb29yKHRpbWVFbGFwc2VkKSkuc2xpY2UoLTIpO1xuICAgICAgICBob3VycyA9IGhvdXJzID8gKCcwJyArIGhvdXJzICsgJzonKS5zbGljZSgtMikgOiAnJztcblxuICAgICAgICBfdGltZXJbMF0uaW5uZXJUZXh0ID0gJycgKyBob3VycyArIG1pbnMgKyAnOicgKyBzZWNzO1xuICAgICAgICB3aW5kb3cuc2V0SW50ZXJ2YWwoX3VwZGF0ZSwgMTAwKTtcbiAgICB9XG5cbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQuZ2V0KCcvbGVzc29uLycgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGVjdHVyZXJMZXNzb25JZCcpICsgJy91cGRhdGUnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgJCgnI3BhcnRpY2lwYW50cycpLnRleHQoZGF0YS5wYXJ0aWNpcGFudHMpO1xuXG4gICAgICAgICAgICBpZiAoZGF0YS5wYXJ0aWNpcGFudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGFydFRpbWUnKSkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RhcnRUaW1lJywgbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF91cGRhdGUoKTtcblxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnBhcnRpY2lwYW50cyA9PT0gZGF0YS5hbW91bnRfYm9yZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlTmV4dFNlY3Rpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIDEwMDApO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluSmxabkpsYzJndGMyTnlaV1Z1TG1weklsMHNJbTVoYldWeklqcGJJbTF2WkhWc1pTSXNJbVY0Y0c5eWRITWlMQ0pmZEdsdFpYSWlMQ0pmSWl3aVlXUmtSWFpsYm5STWFYTjBaVzVsY2lJc0luZHBibVJ2ZHlJc0ltOXdaVzRpTENKb2NtVm1JaXdpWlc1aFlteGxUbVY0ZEZObFkzUnBiMjRpTENKa2IyTjFiV1Z1ZENJc0lteGxjM052YmtOdmJuUnliMndpTENKbWFXNWtJaXdpY21WdGIzWmxRWFIwY21saWRYUmxJaXdpY21WdGIzWmxRMnhoYzNNaUxDSmZkWEJrWVhSbElpd2lkR2x0WlVWc1lYQnpaV1FpTENKTllYUm9JaXdpWm14dmIzSWlMQ0pzYjJOaGJGTjBiM0poWjJVaUxDSm5aWFJKZEdWdElpd2lSR0YwWlNJc0ltZGxkRlJwYldVaUxDSm9iM1Z5Y3lJc0ltMXBibk1pTENKemJHbGpaU0lzSW5ObFkzTWlMQ0pwYm01bGNsUmxlSFFpTENKelpYUkpiblJsY25aaGJDSXNJaVFpTENKblpYUWlMQ0prWVhSaElpd2lkR1Y0ZENJc0luQmhjblJwWTJsd1lXNTBjeUlzSW5ObGRFbDBaVzBpTENKaGJXOTFiblJmWW05eVpXUWlYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUZCTEU5QlFVOURMRTlCUVZBc1IwRkJhVUlzV1VGQlRUdEJRVU51UWl4UlFVRk5ReXhUUVVGVFF5eEZRVUZGTEZkQlFVWXNRMEZCWmpzN1FVRkZRVUVzVFVGQlJTeHJRa0ZCUml4RlFVRnpRaXhEUVVGMFFpeEZRVU5MUXl4blFrRkVUQ3hEUVVOelFpeFBRVVIwUWl4RlFVTXJRaXhaUVVGWE8wRkJRMnhEUXl4bFFVRlBReXhKUVVGUUxFTkJRVmtzUzBGQlMwTXNTVUZCYWtJc1JVRkJkVUlzVVVGQmRrSXNSVUZCYVVNc09FVkJRV3BETzBGQlEwZ3NTMEZJVERzN1FVRkxRU3hoUVVGVFF5eHBRa0ZCVkN4SFFVRTJRanRCUVVONlFrd3NWVUZCUlUwc1UwRkJVME1zWVVGQldDeEZRVUV3UWtNc1NVRkJNVUlzUTBGQkswSXNaVUZCTDBJc1JVRkJaMFFzUTBGQmFFUXNSVUZCYlVSRExHVkJRVzVFTEVOQlFXMUZMRlZCUVc1Rk8wRkJRMEZVTEZWQlFVVXNhMEpCUVVZc1JVRkJjMEpWTEZkQlFYUkNMRU5CUVd0RExFMUJRV3hETzBGQlEwZzdPMEZCUlVRc1lVRkJVME1zVDBGQlZDeEhRVUZ0UWp0QlFVTm1MRmxCUVUxRExHTkJRV05ETEV0QlFVdERMRXRCUVV3c1EwRkJWeXhGUVVGRlF5eGhRVUZoUXl4UFFVRmlMRU5CUVhGQ0xGZEJRWEpDTEVsQlFXOURMRWxCUVVsRExFbEJRVW9zUjBGQlYwTXNUMEZCV0N4RlFVRjBReXhKUVVFNFJDeEpRVUY2UlN4RFFVRndRanRCUVVOQkxGbEJRVWxETEZGQlFWRk9MRXRCUVV0RExFdEJRVXdzUTBGQlYwWXNZMEZCWXl4SlFVRjZRaXhEUVVGYU8wRkJRMEVzV1VGQlRWRXNUMEZCVHl4UFFVRkpVQ3hMUVVGTFF5eExRVUZNTEVOQlFWZEdMR05CUVdNc1JVRkJla0lzUTBGQlNpeEZRVUZ0UTFNc1MwRkJia01zUTBGQmVVTXNRMEZCUXl4RFFVRXhReXhEUVVGaU8wRkJRMEVzV1VGQlRVTXNUMEZCVHl4UFFVRkpWQ3hMUVVGTFF5eExRVUZNTEVOQlFWZEdMRmRCUVZnc1EwRkJTaXhGUVVFNFFsTXNTMEZCT1VJc1EwRkJiME1zUTBGQlF5eERRVUZ5UXl4RFFVRmlPMEZCUTBGR0xHZENRVUZSUVN4UlFVRlJMRTlCUVVsQkxFdEJRVW9zVVVGQllVVXNTMEZCWWl4RFFVRnRRaXhEUVVGRExFTkJRWEJDTEVOQlFWSXNSMEZCYVVNc1JVRkJla003TzBGQlJVRjBRaXhsUVVGUExFTkJRVkFzUlVGQlZYZENMRk5CUVZZc1VVRkJlVUpLTEV0QlFYcENMRWRCUVdsRFF5eEpRVUZxUXl4VFFVRjVRMFVzU1VGQmVrTTdRVUZEUVhCQ0xHVkJRVTl6UWl4WFFVRlFMRU5CUVcxQ1lpeFBRVUZ1UWl4RlFVRTBRaXhIUVVFMVFqdEJRVU5JT3p0QlFVVkVZU3huUWtGQldTeFpRVUZOTzBGQlEyUkRMRlZCUVVWRExFZEJRVVlzWTBGQmFVSllMR0ZCUVdGRExFOUJRV0lzUTBGQmNVSXNhMEpCUVhKQ0xFTkJRV3BDTEdOQlFXOUZMRlZCUVVOWExFbEJRVVFzUlVGQlZUdEJRVU14UlVZc1kwRkJSU3hsUVVGR0xFVkJRVzFDUnl4SlFVRnVRaXhEUVVGM1FrUXNTMEZCUzBVc1dVRkJOMEk3TzBGQlJVRXNaMEpCUVVkR0xFdEJRVXRGTEZsQlFWSXNSVUZCYzBJN1FVRkRiRUlzYjBKQlFVY3NRMEZCUTJRc1lVRkJZVU1zVDBGQllpeERRVUZ4UWl4WFFVRnlRaXhEUVVGS0xFVkJRWFZETzBGQlEyNURSQ3hwUTBGQllXVXNUMEZCWWl4RFFVRnhRaXhYUVVGeVFpeEZRVUZyUXl4SlFVRkpZaXhKUVVGS0xFZEJRVmRETEU5QlFWZ3NSVUZCYkVNN1FVRkRTRHM3UVVGRlJGQTdPMEZCUlVFc2IwSkJRVWRuUWl4TFFVRkxSU3haUVVGTUxFdEJRWE5DUml4TFFVRkxTU3haUVVFNVFpeEZRVUUwUXp0QlFVTjRRekZDTzBGQlEwZzdRVUZEU2p0QlFVTktMRk5CWkVRN1FVRmxTQ3hMUVdoQ1JDeEZRV2RDUnl4SlFXaENTRHRCUVdsQ1NDeERRWHBEUkNJc0ltWnBiR1VpT2lKeVpXWnlaWE5vTFhOamNtVmxiaTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ0tDa2dQVDRnZTF4dUlDQWdJR052Ym5OMElGOTBhVzFsY2lBOUlGOG9KeTVxY3kxMGFXMWxjaWNwTzF4dVhHNGdJQ0FnWHlnbkxtcHpMWE5vWVhKbExXeGxjM052YmljcFd6QmRYRzRnSUNBZ0lDQWdJQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkMmx1Wkc5M0xtOXdaVzRvZEdocGN5NW9jbVZtTENBblgySnNZVzVySnl3Z0oyaGxhV2RvZEQwME5UQXNJSGRwWkhSb1BUWTFNQ3dnYkdWbWREMHlNQ3dnYkc5allYUnBiMjQ5Ym04c0lIUnZjRDB5TUN3Z2RHbDBiR1ZpWVhJOWJtOHNJRzFsYm5WaVlYSTlibThuS1R0Y2JpQWdJQ0FnSUNBZ2ZTazdJQ0JjYmx4dUlDQWdJR1oxYm1OMGFXOXVJR1Z1WVdKc1pVNWxlSFJUWldOMGFXOXVLQ2tnZTF4dUlDQWdJQ0FnSUNCZktHUnZZM1Z0Wlc1MExteGxjM052YmtOdmJuUnliMndwTG1acGJtUW9KMXQwZVhCbFBYTjFZbTFwZEYwbktWc3dYUzV5WlcxdmRtVkJkSFJ5YVdKMWRHVW9KMlJwYzJGaWJHVmtKeWs3WEc0Z0lDQWdJQ0FnSUY4b0p5NXFjeTF1WlhoMExYTmxZM1JwYjI0bktTNXlaVzF2ZG1WRGJHRnpjeWduYUdsa1pTY3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHWjFibU4wYVc5dUlGOTFjR1JoZEdVb0tTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElIUnBiV1ZGYkdGd2MyVmtJRDBnVFdGMGFDNW1iRzl2Y2lndEtHeHZZMkZzVTNSdmNtRm5aUzVuWlhSSmRHVnRLQ2R6ZEdGeWRGUnBiV1VuS1NBdElHNWxkeUJFWVhSbEtDa3VaMlYwVkdsdFpTZ3BLU0F2SURFd01EQXBPMXh1SUNBZ0lDQWdJQ0JzWlhRZ2FHOTFjbk1nUFNCTllYUm9MbVpzYjI5eUtIUnBiV1ZGYkdGd2MyVmtJQzhnTXpZd01DazdYRzRnSUNBZ0lDQWdJR052Ym5OMElHMXBibk1nUFNCZ01DUjdUV0YwYUM1bWJHOXZjaWgwYVcxbFJXeGhjSE5sWkNBdklEWXdLWDFnTG5Oc2FXTmxLQzB5S1R0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYzJWamN5QTlJR0F3Skh0TllYUm9MbVpzYjI5eUtIUnBiV1ZGYkdGd2MyVmtLWDFnTG5Oc2FXTmxLQzB5S1R0Y2JpQWdJQ0FnSUNBZ2FHOTFjbk1nUFNCb2IzVnljeUEvSUdBd0pIdG9iM1Z5YzMwNllDNXpiR2xqWlNndE1pa2dPaUFuSnp0Y2JseHVJQ0FnSUNBZ0lDQmZkR2x0WlhKYk1GMHVhVzV1WlhKVVpYaDBJRDBnWUNSN2FHOTFjbk45Skh0dGFXNXpmVG9rZTNObFkzTjlZRHRjYmlBZ0lDQWdJQ0FnZDJsdVpHOTNMbk5sZEVsdWRHVnlkbUZzS0Y5MWNHUmhkR1VzSURFd01DazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MyVjBTVzUwWlhKMllXd29LQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWtMbWRsZENoZ0wyeGxjM052Ymk4a2UyeHZZMkZzVTNSdmNtRm5aUzVuWlhSSmRHVnRLQ2RzWldOMGRYSmxja3hsYzNOdmJrbGtKeWw5TDNWd1pHRjBaV0FzSUNoa1lYUmhLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FrS0NjamNHRnlkR2xqYVhCaGJuUnpKeWt1ZEdWNGRDaGtZWFJoTG5CaGNuUnBZMmx3WVc1MGN5azdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1LR1JoZEdFdWNHRnlkR2xqYVhCaGJuUnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZb0lXeHZZMkZzVTNSdmNtRm5aUzVuWlhSSmRHVnRLQ2R6ZEdGeWRGUnBiV1VuS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JzYjJOaGJGTjBiM0poWjJVdWMyVjBTWFJsYlNnbmMzUmhjblJVYVcxbEp5d2dibVYzSUVSaGRHVW9LUzVuWlhSVWFXMWxLQ2twTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGOTFjR1JoZEdVb0tUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtS0dSaGRHRXVjR0Z5ZEdsamFYQmhiblJ6SUQwOVBTQmtZWFJoTG1GdGIzVnVkRjlpYjNKbFpDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbGJtRmliR1ZPWlhoMFUyVmpkR2x2YmlncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ2ZTd2dNVEF3TUNrN1hHNTlPMXh1SWwxOSIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobW9kKSB7XG4gICAgdmFyIF92b3RlQm9yZWQgPSBfKG1vZCk7XG4gICAgdmFyIF92b3RlZE1lc3NhZ2UgPSBfKCcuanMtdm90ZWQtbWVzc2FnZScpO1xuICAgIHZhciBwYXJ0aWNpcGFudElkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BhcnRpY2lwYW50SWQnKSA/ICcvJyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwYXJ0aWNpcGFudElkJykgOiAnJztcblxuICAgIGZ1bmN0aW9uIHBvbGxTZWN0aW9uKCkge1xuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkLmdldCgnL3ZvdGUvJyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdHVkZW50TGVzc29uSWQnKSArICcvdXBkYXRlJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVsnc2VjdGlvbk51bWJlciddICE9PSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VjdGlvbk51bWJlcicpKSkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VjdGlvbk51bWJlcicsIGRhdGFbJ3NlY3Rpb25OdW1iZXInXSk7XG4gICAgICAgICAgICAgICAgICAgIF92b3RlZE1lc3NhZ2UuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgX3ZvdGVCb3JlZC5yZW1vdmVDbGFzcygndm90aW5nLS1kaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICAkLmdldCgnL2FkZHBhcnRpY2lwYW50LycgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3R1ZGVudExlc3NvbklkJykgKyBwYXJ0aWNpcGFudElkLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBpZiAoIXBhcnRpY2lwYW50SWQpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwYXJ0aWNpcGFudElkJywgZGF0YVsncGFydGljaXBhbnRJZCddKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF92b3RlQm9yZWQuZmluZCgnLnZvdGUtc2VjdGlvbl9fbGlua3MnKS5mb3JFYWNoKGZ1bmN0aW9uIChsaW5rKSB7XG4gICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIV92b3RlQm9yZWQuaGFzQ2xhc3MoJ3ZvdGluZy0tZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2xpbmsgPSBfKGUuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgJC5nZXQoX2xpbmtbMF0uaHJlZiwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm90ZWRNZXNzYWdlLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZvdGVCb3JlZC5hZGRDbGFzcygndm90aW5nLS1kaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvbGxTZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk4xWW0xcGRDMTJiM1JsTG1weklsMHNJbTVoYldWeklqcGJJbTF2WkhWc1pTSXNJbVY0Y0c5eWRITWlMQ0p0YjJRaUxDSmZkbTkwWlVKdmNtVmtJaXdpWHlJc0lsOTJiM1JsWkUxbGMzTmhaMlVpTENKd1lYSjBhV05wY0dGdWRFbGtJaXdpYkc5allXeFRkRzl5WVdkbElpd2laMlYwU1hSbGJTSXNJbkJ2Ykd4VFpXTjBhVzl1SWl3aWMyVjBTVzUwWlhKMllXd2lMQ0lrSWl3aVoyVjBJaXdpWkdGMFlTSXNJbkJoY25ObFNXNTBJaXdpYzJWMFNYUmxiU0lzSW1Ga1pFTnNZWE56SWl3aWNtVnRiM1psUTJ4aGMzTWlMQ0ptYVc1a0lpd2labTl5UldGamFDSXNJbXhwYm1zaUxDSmhaR1JGZG1WdWRFeHBjM1JsYm1WeUlpd2laU0lzSW5CeVpYWmxiblJFWldaaGRXeDBJaXdpYUdGelEyeGhjM01pTENKZmJHbHVheUlzSW1OMWNuSmxiblJVWVhKblpYUWlMQ0pvY21WbUlpd2ljM1ZqWTJWemN5SmRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRVUVzVDBGQlQwTXNUMEZCVUN4SFFVRnBRaXhWUVVGRFF5eEhRVUZFTEVWQlFWTTdRVUZEZEVJc1VVRkJUVU1zWVVGQllVTXNSVUZCUlVZc1IwRkJSaXhEUVVGdVFqdEJRVU5CTEZGQlFVMUhMR2RDUVVGblFrUXNSVUZCUlN4dFFrRkJSaXhEUVVGMFFqdEJRVU5CTEZGQlFVMUZMR2RDUVVGblFrTXNZVUZCWVVNc1QwRkJZaXhEUVVGeFFpeGxRVUZ5UWl4VlFVTlNSQ3hoUVVGaFF5eFBRVUZpTEVOQlFYRkNMR1ZCUVhKQ0xFTkJSRkVzUjBGRldpeEZRVVpXT3p0QlFVbEJMR0ZCUVZORExGZEJRVlFzUjBGQmRVSTdRVUZEYmtKRExHOUNRVUZaTEZsQlFVMDdRVUZEWkVNc1kwRkJSVU1zUjBGQlJpeFpRVUZsVEN4aFFVRmhReXhQUVVGaUxFTkJRWEZDTEdsQ1FVRnlRaXhEUVVGbUxHTkJRV2xGTEZWQlFVTkxMRWxCUVVRc1JVRkJWVHRCUVVOMlJTeHZRa0ZCUjBFc1MwRkJTeXhsUVVGTUxFMUJRVEJDUXl4VFFVRlRVQ3hoUVVGaFF5eFBRVUZpTEVOQlFYRkNMR1ZCUVhKQ0xFTkJRVlFzUTBGQk4wSXNSVUZCT0VVN1FVRkRNVVZFTEdsRFFVRmhVU3hQUVVGaUxFTkJRWEZDTEdWQlFYSkNMRVZCUVhORFJpeExRVUZMTEdWQlFVd3NRMEZCZEVNN1FVRkRRVklzYTBOQlFXTlhMRkZCUVdRc1EwRkJkVUlzVFVGQmRrSTdRVUZEUVdJc0swSkJRVmRqTEZkQlFWZ3NRMEZCZFVJc2EwSkJRWFpDTzBGQlEwZzdRVUZEU2l4aFFVNUVPMEZCVDBnc1UwRlNSQ3hGUVZGSExFbEJVa2c3UVVGVFNEczdRVUZIUkU0c1RVRkJSVU1zUjBGQlJpeHpRa0ZCZVVKTUxHRkJRV0ZETEU5QlFXSXNRMEZCY1VJc2FVSkJRWEpDTEVOQlFYcENMRWRCUVcxRlJpeGhRVUZ1UlN4RlFVRnZSaXhWUVVGRFR5eEpRVUZFTEVWQlFWVTdRVUZETVVZc1dVRkJSeXhEUVVGRFVDeGhRVUZLTEVWQlFXMUNPMEZCUTJaRExIbENRVUZoVVN4UFFVRmlMRU5CUVhGQ0xHVkJRWEpDTEVWQlFYTkRSaXhMUVVGTExHVkJRVXdzUTBGQmRFTTdRVUZEU0RzN1FVRkZSRllzYlVKQlFWZGxMRWxCUVZnc1EwRkJaMElzYzBKQlFXaENMRVZCUVhkRFF5eFBRVUY0UXl4RFFVRm5SQ3hWUVVGRFF5eEpRVUZFTEVWQlFWVTdRVUZEZEVSQkxHbENRVUZMUXl4blFrRkJUQ3hEUVVGelFpeFBRVUYwUWl4RlFVRXJRaXhWUVVGVFF5eERRVUZVTEVWQlFWazdRVUZEZGtOQkxHdENRVUZGUXl4alFVRkdPenRCUVVWQkxHOUNRVUZITEVOQlFVTndRaXhYUVVGWGNVSXNVVUZCV0N4RFFVRnZRaXhyUWtGQmNFSXNRMEZCU2l4RlFVRTJRenRCUVVONlF5eDNRa0ZCVFVNc1VVRkJVWEpDTEVWQlFVVnJRaXhGUVVGRlNTeGhRVUZLTEVOQlFXUTdPMEZCUlVGbUxITkNRVUZGUXl4SFFVRkdMRU5CUVUxaExFMUJRVTBzUTBGQlRpeEZRVUZUUlN4SlFVRm1MRVZCUVhGQ0xGVkJRVU5rTEVsQlFVUXNSVUZCVlR0QlFVTXpRaXcwUWtGQlNVRXNTMEZCUzJVc1QwRkJWQ3hGUVVGclFqdEJRVU5rZGtJc01FTkJRV05aTEZkQlFXUXNRMEZCTUVJc1RVRkJNVUk3UVVGRFFXUXNkVU5CUVZkaExGRkJRVmdzUTBGQmIwSXNhMEpCUVhCQ08wRkJRMEZRTzBGQlEwZzdRVUZEU2l4eFFrRk9SRHRCUVU5SU8wRkJRMG9zWVVGa1JEdEJRV1ZJTEZOQmFFSkVPMEZCYVVKSUxFdEJkRUpFTzBGQmRVSklMRU5CTTBORUlpd2labWxzWlNJNkluTjFZbTFwZEMxMmIzUmxMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNBb2JXOWtLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdYM1p2ZEdWQ2IzSmxaQ0E5SUY4b2JXOWtLVHRjYmlBZ0lDQmpiMjV6ZENCZmRtOTBaV1JOWlhOellXZGxJRDBnWHlnbkxtcHpMWFp2ZEdWa0xXMWxjM05oWjJVbktUdGNiaUFnSUNCamIyNXpkQ0J3WVhKMGFXTnBjR0Z1ZEVsa0lEMGdiRzlqWVd4VGRHOXlZV2RsTG1kbGRFbDBaVzBvSjNCaGNuUnBZMmx3WVc1MFNXUW5LU0JjYmlBZ0lDQWdJQ0FnSUNBZ0lEOGdZQzhrZTJ4dlkyRnNVM1J2Y21GblpTNW5aWFJKZEdWdEtDZHdZWEowYVdOcGNHRnVkRWxrSnlsOVlGeHVJQ0FnSUNBZ0lDQWdJQ0FnT2lBbkp6dGNibHh1SUNBZ0lHWjFibU4wYVc5dUlIQnZiR3hUWldOMGFXOXVLQ2tnZTF4dUlDQWdJQ0FnSUNCelpYUkpiblJsY25aaGJDZ29LU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FrTG1kbGRDaGdMM1p2ZEdVdkpIdHNiMk5oYkZOMGIzSmhaMlV1WjJWMFNYUmxiU2duYzNSMVpHVnVkRXhsYzNOdmJrbGtKeWw5TDNWd1pHRjBaV0FzSUNoa1lYUmhLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWW9aR0YwWVZzbmMyVmpkR2x2Yms1MWJXSmxjaWRkSUNFOVBTQndZWEp6WlVsdWRDaHNiMk5oYkZOMGIzSmhaMlV1WjJWMFNYUmxiU2duYzJWamRHbHZiazUxYldKbGNpY3BLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNiMk5oYkZOMGIzSmhaMlV1YzJWMFNYUmxiU2duYzJWamRHbHZiazUxYldKbGNpY3NJR1JoZEdGYkozTmxZM1JwYjI1T2RXMWlaWEluWFNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRjkyYjNSbFpFMWxjM05oWjJVdVlXUmtRMnhoYzNNb0oyaHBaR1VuS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYM1p2ZEdWQ2IzSmxaQzV5WlcxdmRtVkRiR0Z6Y3lnbmRtOTBhVzVuTFMxa2FYTmhZbXhsWkNjcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ0lDQjlMQ0F4TURBd0tUdGNiaUFnSUNCOVhHNWNibHh1SUNBZ0lDUXVaMlYwS0dBdllXUmtjR0Z5ZEdsamFYQmhiblF2Skh0c2IyTmhiRk4wYjNKaFoyVXVaMlYwU1hSbGJTZ25jM1IxWkdWdWRFeGxjM052Ymtsa0p5bDlKSHR3WVhKMGFXTnBjR0Z1ZEVsa2ZXQXNJQ2hrWVhSaEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUdsbUtDRndZWEowYVdOcGNHRnVkRWxrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzYjJOaGJGTjBiM0poWjJVdWMyVjBTWFJsYlNnbmNHRnlkR2xqYVhCaGJuUkpaQ2NzSUdSaGRHRmJKM0JoY25ScFkybHdZVzUwU1dRblhTazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUY5MmIzUmxRbTl5WldRdVptbHVaQ2duTG5admRHVXRjMlZqZEdsdmJsOWZiR2x1YTNNbktTNW1iM0pGWVdOb0tDaHNhVzVyS1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCc2FXNXJMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2dablZ1WTNScGIyNG9aU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdVdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1LQ0ZmZG05MFpVSnZjbVZrTG1oaGMwTnNZWE56S0NkMmIzUnBibWN0TFdScGMyRmliR1ZrSnlrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdYMnhwYm1zZ1BTQmZLR1V1WTNWeWNtVnVkRlJoY21kbGRDazdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0pDNW5aWFFvWDJ4cGJtdGJNRjB1YUhKbFppd2dLR1JoZEdFcElEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoa1lYUmhMbk4xWTJObGMzTXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCZmRtOTBaV1JOWlhOellXZGxMbkpsYlc5MlpVTnNZWE56S0Nkb2FXUmxKeWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1gzWnZkR1ZDYjNKbFpDNWhaR1JEYkdGemN5Z25kbTkwYVc1bkxTMWthWE5oWW14bFpDY3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhCdmJHeFRaV04wYVc5dUtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdJQ0I5S1R0Y2JpQWdJQ0I5S1R0Y2JuMDdYRzRpWFgwPSJdfQ==
