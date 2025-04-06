const items = [];
const trash = [];

function listElementClick(event) {
    // Get the clicked element
    const listItem = event.target;

    // Ignore click if it's on the delete button
    if (listItem.classList.contains("delete-button")) {
        return;
    }

    // Get the text content of the clicked element
    const itemText = listItem.textContent.replace("X", "").trim();

    const itemIndex = items.findIndex(item => item[0] === itemText);

    if (itemIndex !== -1) {
        // Toggle the class of the clicked element
        if (listItem.classList.contains("not_checked")) {
            listItem.classList.remove("not_checked");
            listItem.classList.add("checked");
            // Update the second value in the array
            items[itemIndex][1] = "checked"; 
        } else {
            listItem.classList.remove("checked");
            listItem.classList.add("not_checked");
            // Update the second value in the array
            items[itemIndex][1] = "not_checked"; 
        }
    }
}

function returnLastItem(){
    if (trash.length == 1){
        add(trash[0][0], trash[0][1])
        trash.splice(0, trash.length); 
    }
    else alert("No items in trash");
}

function addNewItem() {
    // Get item text
    const input = document.getElementById('new_item_text').value;
    add(input, "not_checked");
}

function add(input, ifChecked){
    // Check if text not empty
    if (input === "") {
        alert("Item text empty!");
    } else {
        // Add the new item to the array
        items.push([input, ifChecked]); 
        // Refresh the list
        displayList(); 
    }
}

function deleteItem(index){
    let text = "Are you sure you want to delete task: ";
    text += items.at(index)[0];
    text += "?"
    const ifConfirm = confirm(text);

    if (ifConfirm==true){
        trash.splice(0, trash.length); 
        trash.push(items.at(index));
        items.splice(index, 1);
        displayList();
    }
}

function displayList() {
    // Reset the HTML string
    let str = '<ul id="list">';

    // Generate the list items
    items.forEach(function (item, index) {
        str += `    <li class="${item[1]}">
                        ${item[0]}
                        <button class="delete-button" data-index="${index}">X</button>
                    </li>`;
    });

    str += '</ul>';

    // Update the DOM with the new list
    document.getElementById("TODOList").innerHTML = str;

    // Attach event listeners to all list items
    const listItems = document.querySelectorAll("#TODOList li");
    listItems.forEach(function (item) {
        item.addEventListener("click", listElementClick);
    });

    // Attach event listeners to all list items delete buttons
    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach(function (button) {
        button.addEventListener("click", function (e) {
            // Prevent triggering the listElementClick
            e.stopPropagation(); 
            const index = parseInt(button.getAttribute("data-index"));
            deleteItem(index);
        });
    });
}

