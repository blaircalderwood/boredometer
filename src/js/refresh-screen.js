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
        const timeElapsed = -(localStorage.getItem('startTime') - new Date().getTime());
        const seconds = `0${Math.floor((timeElapsed / 1000) % 60)}`.slice(-2);
        const minutes = `0${Math.floor((timeElapsed / 1000) / 60)}`.slice(-2);
        let hours = Math.floor(minutes / 60);
        hours = hours ? `0${hours}:`.slice(-2) : '';

        _timer[0].innerText = `${hours}${minutes}:${seconds}`;
        window.setInterval(_update, 1000);
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
