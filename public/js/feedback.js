$('form').on('submit', function () {
    const feedback = $('#feedback').val()
    if (feedback === "") {
        $('#error_msg').text("Feedback cannot be empty");
        return false
    }
});