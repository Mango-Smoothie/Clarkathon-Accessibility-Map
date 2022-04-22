$('form').on('submit', function () {
    const feedback = $('#feedback').val()
    if (feedback === "") {
        $('#error_msg').text("Feedback cannot be empty");
        return false
    }
});

$.getJSON("data/feedback.json", () => {
        console.log("file loaded");
    }
).done((data) => {
    data.forEach((f, idx) => {
        $('#feedback_list').append(getFeedbackBlock(f, idx));
    });
})

function getFeedbackBlock(feedback, idx){
    return `<li class="list-group-item ${idx % 2 === 0 ? 'even_row' : 'odd_row'}">
                <div class="row ">
                    <div class="infoDiv">
                        <h5 class="building">Building: ${feedback.building}</h5>
                        <p class="rating larger_text cel_noto">Feedback: ${feedback.feedback}</p>
                    </div>
                </div>
          </li>`

}