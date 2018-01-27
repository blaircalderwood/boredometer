module.exports = () => {
    const _voteBored = _('[data-mod=submit-vote]')[0];

    _voteBored.addEventListener('click', (e) => {
        e.preventDefault();

        const url = e.currentTarget.href;

        $.get(url, (data) => {
            console.log(data);    
        });
    });
};
