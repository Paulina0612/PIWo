import { useContext, useState } from "react";
import { BooksContext } from "../root";

function BooksList() {
    const [filterTitle, setFilterTitle] = useState("edrftg"); // Local state for filter title
    
    const books = useContext(BooksContext); // Access books from context

    function changeFilterTitle() {
        setFilterTitle(document.getElementById("Title_button").value); // Update the filter title state
        alert("Filter title updated to: "+document.getElementById("Title_button").value);
    }

    return (
        <div>
            {/* <p>{books[0]?.title}</p> Safely access the first book's title */}
            <p>{filterTitle}</p> {/* Display the current filter title */}
            <button onClick={changeFilterTitle}>Show</button> {/* Button to update filter title */}
        </div>
    );
}

export default BooksList;