let slides = ["yhguy"]
let str = '<ul id="list">'



function listElementClick(){
    console.log("efwtrh")
}


function displayList() {
    slides.forEach(function(slide) {
    str += '<li class="not_checked">'+ slide + '</li>';
    }); 

    str += '</ul>';
    document.getElementById("TODOList").innerHTML = str;

    // Attach event listeners to all list items
    const listItems = document.querySelectorAll("#TODOList li");
    listItems.forEach(function (item) {
        item.addEventListener("click", listElementClick);
    });
}


displayList();