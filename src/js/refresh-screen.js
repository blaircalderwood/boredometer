module.exports = () => {
    const _timer = _('.js-timer');

    _('.js-share-lesson')[0]
        .addEventListener('click', function() {
            window.open(this.href, '_blank', 'height=450, width=650, left=20, location=no, top=20, titlebar=no, menubar=no');
        });  

    function enableNextSection() {
        _(document.lessonControl).find('[type=submit]')[0].removeAttribute('disabled');
        _('.js-next-section').removeClass('hide');
    }

    function _update() {
        // const timeElapsed = (localStorage.getItem('startTime') - new Date().getMilliseconds()) / 1000;
        // console.log(timeElapsed)
        // let hours = Math.floor(timeElapsed / 3600);
        // const mins = `0${Math.floor(timeElapsed / 60)}`.slice(-2);
        // const secs = `0${Math.floor(timeElapsed)}`.slice(-2);
        // hours = hours ? `0${hours}:`.slice(-2) : '';

        // _timer[0].innerText = `${hours}${mins}:${secs}`;
        // window.setInterval(_update, 100);
    }

    setInterval(() => {
        $.get(`/lesson/${localStorage.getItem('lecturerLessonId')}/update`, (data) => {
            $('#participants').text(data.participants);

            if(data.participants) {
                if(!localStorage.getItem('startTime')) {
                    localStorage.setItem('startTime', new Date());
                }

                _update();

                if(data.participants === data.amount_bored) {
                    enableNextSection();
                }
            }
        });
    }, 1000);
};
