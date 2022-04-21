let test =
    [
        {
            "id": "16",
            "name": "Dana Commons",
            "description": "description",
            "elevators": "yes",
            "coord": "543, 755, 573, 785"
        },
        {
            "id": "35",
            "name": "Kneller Athletic Center",
            "description": "Mon-Thur: 7 a.m.-10 p.m. Fri: 7 a.m.-8 p.m. Sat: 10 a.m.-8 p.m. 10 a.m.-10 p.m.",
            "elevators": "no",
            "coord": "984, 615, 1014, 645"
        },
        {
            "id": "10",
            "name": "Carlson Hall",
            "description": "Mon-Fri: Doors unlocked: 7:30 a.m.-5 p.m. Community swipe access: 5–10  p.m. Sat-Sun: Doors locked (restricted access)",
            "elevators": "no",
            "coord": "740, 810, 770, 840"
        },
        {
            "id": "24",
            "name": "Goddard Library",
            "description": "Academic Commons (1st floor) Monday–Friday Doors unlocked: 7 a.m. to 5 p.m. Doors locked; community swipe access: 5 p.m.–4 a.m. Library floors 2–5 Monday–Thursday: 8 a.m.–12 a.m. Friday: 8 a.m.–8 p.m. Saturday: 10 a.m.–8 p.m. Sunday: Noon–Midnight",
            "elevators": "yes",
            "coord": "1135, 688, 1165, 718"
        },
        {
            "id": "42",
            "name": "ASEC",
            "description": "description",
            "elevators": "yes",
            "coord": "1298, 1058, 1328, 1088"
        },
        {
            "id": "19",
            "name": "Estabrook Hall",
            "description": "Mon-Fri: Doors unlocked: 7:30 a.m.-5 p.m. Community swipe access: 5–10  p.m. Sat-Sun: Doors locked (restricted access)",
            "elevators": "yes",
            "coord": "1453, 616, 1483, 646"
        },
        {
            "id": "8",
            "name": "Blackstone Residence",
            "description": "description",
            "elevators": "yes",
            "coord": "236, 950, 266, 980"
        },
        {
            "id": "39",
            "name": "Maywood Residence",
            "description": "description",
            "elevators": "yes",
            "coord": "604, 832 , 634, 862"
        },
        {
            "id": "27",
            "name": "Higgins University Center",
            "description": "Mon-Fri: Doors unlocked: 7:00 a.m.-7 p.m. Community swipe access: 7–11  p.m. Sat-Sun: Doors unlocked: 8:00 a.m.-7 p.m. Community swipe access: 7–11  p.m.",
            "elevators": "yes",
            "coord": "982, 1021, 1002, 1051"
        },
        {
            "id": "3",
            "name": "Sackler Sciences Building",
            "description": "Mon-Fri: Doors unlocked: 7:30 a.m.-5 p.m. Community swipe access: 5–10  p.m. Sat-Sun: Doors locked (restricted access)",
            "elevators": "yes",
            "coord": "859, 903, 889, 933"
        },
        {
            "id": "38",
            "name": "Math/Physics Building",
            "description": "Mon-Fri: Doors unlocked: 7:30 a.m.-5 p.m. Community swipe access: 5–10  p.m. Sat-Sun: Doors locked (restricted access)",
            "elevators": "yes",
            "coord": "715, 913, 745, 943"
        },
        {
            "id": "18",
            "name": "Dodd Residence",
            "description": "description",
            "elevators": "no",
            "coord": "1156, 549, 1186, 579"
        },
        {
            "id": "28",
            "name": "Hughs Residence",
            "description": "description",
            "elevators": "no",
            "coord": "764, 679, 794, 709"
        },
        {
            "id": "17",
            "name": "Dana Residence",
            "description": "description",
            "elevators": "no",
            "coord": "604, 678, 634, 708 "
        }

    ]

function showList(buildings) {
    $('#building_list_left').empty();

    test.forEach((building, idx) => {
        if (idx < test.length / 2) {
            $('#building_list_left')
                .append(get_building_button(building, idx))
        } else {
            $('#building_list_right')
                .append(get_building_button(building, idx))
        }
    })
}

function addNewFeedback() {
    location.href = "feedback.html"
}

function get_building_button(building, idx) {
    return `<button type="button" data-b="${building.id}" class="btn btn-building w-100 btn-block ${idx % 2 === 0 ? 'btn-danger' : 'btn-light'} " data-bs-toggle="modal" data-bs-target="#exampleModal">${building.id}) ${building.name}</button>`

//     `<div class="building_block ${idx % 2 === 0 ? 'even_row' : 'odd_row'}">
//                 <div class="row flex-nowrap">
//                     <div class="col-12">${idx}) ${building.name}</div>
// <!--                    <div class="col-10">${building.name}</div>-->
//                 </div>
//             </div>`
}

showList(test);


function get_building_modal() {
    return `<!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>`
}

$(".btn-building").on('click', function() {
    let current_id = $(this).attr("data-b")
    test.forEach((b)=>{
        if (b.id === current_id){
            $("#infoLabel").text(b.name);
            $(".modal-body").text(b.description);


        }
        else{
        }
    })
    // console.log($(this).attr("data-b"))

})
function fillModal(id){
    let current_id = id.toString()
    test.forEach((b)=>{
        if (b.id === current_id){
            $("#infoLabel").text(b.name);
            $(".modal-body").text(b.description);


        }
        else{
        }
    })
    console.log(id)

}