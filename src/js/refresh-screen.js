module.exports = () => {
    const _timer = _('.js-timer');

    function enableNextSection() {
        _(document.lessonControl).find('[type=submit]')[0].removeAttribute('disabled');
        _('.js-next-section').removeClass('hide');
    }

    function _update() {
        const timeElapsed = Math.floor(-(localStorage.getItem('startTime') - new Date().getTime()) / 1000);
        let hours = Math.floor(timeElapsed / 3600);
        const mins = `0${Math.floor(timeElapsed / 60)}`.slice(-2);
        const secs = `0${Math.floor(timeElapsed)}`.slice(-2);
        hours = hours ? `0${hours}:`.slice(-2) : '';

        _timer[0].innerText = `${hours}${mins}:${secs}`;
        window.setInterval(_update, 100);
    }

    setInterval(() => {
        $.get(`/lesson/${localStorage.getItem('lecturerLessonId')}/update`, (data) => {
            $('#participants').text(data.participants);

            if(data.participants) {
                if(!localStorage.getItem('startTime')) {
                    localStorage.setItem('startTime', new Date().getTime());
                }

                _update();

                if(data.participants === data.amount_bored) {
                    enableNextSection();
                }
            }
        });
    }, 1000);
};
