let items = ["yhguy"];

function listElementClick () {
    //TODO: Implement

    alert("rctvtfvy");
};



function addNewItem(){
    const input = document.getElementById('new_item_text').value;

    if(input == "") alert("Item text empty!");
    else items.push(input);
    
    displayList();
}



function displayList() {
    // Reset the HTML string
    let str = '<ul id="list">';

    // Generate the list items
    items.forEach(function (item) {
        str += `<li class="not_checked" onclick="listElementClick()">${item}</li>`;
    });

    str += '</ul>';

    // Update the DOM with the new list
    document.getElementById("TODOList").innerHTML = str;
}

// Initial display of the list
displayList();