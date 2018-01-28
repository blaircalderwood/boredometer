module.exports = (mod) => {
    const _voteBored = _(mod);
    const _votedMessage = _('.js-voted-message');
    const participantId = localStorage.getItem('participantId') 
            ? `/${localStorage.getItem('participantId')}`
            : '';

    function pollSection() {
        setInterval(() => {
            $.get(`/vote/${localStorage.getItem('studentLessonId')}/update`, (data) => {
                if(data['sectionNumber'] !== parseInt(localStorage.getItem('sectionNumber'))) {
                    localStorage.setItem('sectionNumber', data['sectionNumber']);
                    _votedMessage.addClass('hide');
                    _voteBored.removeClass('voting--disabled');
                }
            });
        }, 1000);
    }


    $.get(`/addparticipant/${localStorage.getItem('studentLessonId')}${participantId}`, (data) => {
        if(!participantId) {
            localStorage.setItem('participantId', data['participantId']);
        }
        
        _voteBored.find('.vote-section__links').forEach((link) => {
            link.addEventListener('click', function(e) {
                e.preventDefault();

                if(!_voteBored.hasClass('voting--disabled')) {
                    const _link = _(e.currentTarget);

                    $.get(_link[0].href, (data) => {
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
