module.exports = () => {
    setInterval(() => {
        $.get('/lesson/' + $('#lessonNumber').text() + '/update', (data) => {
            $('#amountBored').text(data.amount_bored);
            $('#participants').text(data.participants);
        })
    }, 1000);
};
