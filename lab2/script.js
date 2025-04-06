let items = [];

function listElementClick(event) {
    // Get the clicked element
    const listItem = event.target;

    // Get the text content of the clicked element
    const itemText = listItem.textContent;

    // Find the corresponding item in the items array
    const itemIndex = items.findIndex(item => item[0] === itemText);

    if (itemIndex !== -1) {
        // Toggle the class of the clicked element
        if (listItem.classList.contains("not_checked")) {
            listItem.classList.remove("not_checked");
            listItem.classList.add("checked");
            items[itemIndex][1] = "checked"; // Update the second value in the array
        } else {
            listItem.classList.remove("checked");
            listItem.classList.add("not_checked");
            items[itemIndex][1] = "not_checked"; // Update the second value in the array
        }
    }
}

function addNewItem() {
    // Get item text
    const input = document.getElementById('new_item_text').value;

    // Check if text not empty
    if (input === "") {
        alert("Item text empty!");
    } else {
        items.push([input, "not_checked"]); // Add the new item to the array
        displayList(); // Refresh the list
    }
}


function deleteItem(itemText) {
    // Find the index of the item in the array
    const itemIndex = items.findIndex(item => item[0] === itemText);
    items.splice(itemIndex, 1); 
    displayList(); 
}


function displayList() {
    // Reset the HTML string
    let str = '<ul id="list">';

    // Generate the list items
    items.forEach(function (item) {
        str += `<li id="${item[1]}"><button class="delete" onclick="deleteItem('${item[0]}')">X</button>${item[0]}</li>`;
    });

    str += '</ul>';

    // Update the DOM with the new list
    document.getElementById("TODOList").innerHTML = str;

    // Attach event listeners to all list items
    const listItems = document.querySelectorAll("#TODOList li");
    listItems.forEach(function (item) {
        item.addEventListener("click", listElementClick);
    });
}

// Initial display of the list
displayList();