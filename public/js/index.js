let building_data = []

$.getJSON("data/buildings.json", () => {
        console.log("file loaded");
    }
).done((data) => {
    data.forEach((building, idx) => {
        building_data.push(building)
        if (idx < data.length / 2) {
            $('#building_list_left')
                .append(get_building_button(building, idx))
        } else {
            $('#building_list_right')
                .append(get_building_button(building, idx))
        }
    })

    $(".btn-building").on('click', function () {
        let current_id = $(this).attr("data-b")
        console.log(current_id)
        building_data.forEach((b) => {
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

function get_building_button(building, idx) {
    return `<button type="button" data-b="${building.id}" class="btn btn-building w-100 btn-block ${idx % 2 === 0 ? 'btn-danger' : 'btn-light'} " data-bs-toggle="modal" data-bs-target="#exampleModal">${building.id}) ${building.name}</button>`
}


function fillModal(id) {
    let current_id = id.toString()
    building_data.forEach((b) => {
        if (b.id === current_id) {
            $("#infoLabel").text(b.name);
            $(".modal-body").text(b.description);
        } else {
        }
    })
    console.log(id)
}
