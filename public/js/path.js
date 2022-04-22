let path_data = []

$.getJSON("data/paths.json", () => {
        console.log("file loaded");
    }
).done((data) => {
    data.forEach((path, idx) => {
        path_data.push(path)
        $('#path_list_left')
            .append(get_path_button(path, idx))
    })

    $(".btn-path").on('click', function () {
        let current_id = $(this).attr("data-b")
        console.log(current_id)
        path_data.forEach((b) => {
            if (b.id === current_id) {
                $("#infoLabel").text(b.name);
                $(".modal-body").text(b.description);
            } else {
            }
        })
    })
})


function addNewFeedback() {
    location.href = "feedback.html"
}

function get_path_button(path, idx) {
    return `<button type="button" data-b="${path.id}" class="btn btn-path w-100 btn-block ${idx % 2 === 0 ? 'btn-danger' : 'btn-light'} " data-bs-toggle="modal" data-bs-target="#exampleModal">${path.id}) ${path.name}</button>`
}


function fillModal(id) {
    let current_id = id.toString()
    path_data.forEach((b) => {
        if (b.id === current_id) {
            $("#infoLabel").text(b.name);
            $(".modal-body").text(b.description);
        } else {
        }
    })
    console.log(id)
}
