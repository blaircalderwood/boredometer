function pollSection(pollUrl) {
    setInterval(() => {
        $.get(pollUrl, (data) => {
            if(data.lesson_id !== localStorage.getItem('lesson')) {
                localStorage.setItem('lesson', data.lesson_id);
                location.reload();
            }
        })
    }, 1000);
}


module.exports = () => {
    const _voteBored = _('[data-mod=submit-vote]');

    _voteBored.find('a').forEach((link) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            if(!_voteBored.hasClass('voting--disabled')) {
                const _link = _(e.currentTarget);

                $.get(_link[0].href, (data) => {
                    if (data.success) {
                        _voteBored.find('a').addClass('link--disabled');
                        _voteBored.find('path')[0].setAttribute('fill', '#898989');
                        localStorage.setItem('lesson', _voteBored[0].dataSet.lesson);
                        pollSection(_link[0].href);
                    }   
                });
            }
        });
    });
};
