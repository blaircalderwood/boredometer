function pollSection() {
    setInterval(() => {
        $.get(`/vote/${localStorage.getItem('lessonId')}/update`, (data) => {
            if(data['sectionNumber'] !== parseInt(localStorage.getItem('sectionNumber'))) {
                localStorage.setItem('sectionNumber', data['sectionNumber']);
                _('.js-voted-message').addClass('hide');
                _('[data-mod=submit-vote]').removeClass('voting--disabled');
            }
        })
    }, 1000);
}

module.exports = () => {
    const _voteBored = _('[data-mod=submit-vote]');

    _voteBored.find('.vote-section__links').forEach((link) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            if(!_voteBored.hasClass('voting--disabled')) {
                const _link = _(e.currentTarget);

                $.get(_link[0].href, (data) => {
                    if (data.success) {
                        pollSection();
                        _('.js-voted-message').removeClass('hide');
                        _voteBored.addClass('voting--disabled');
                    }   
                });
            }
        });
    });
};
