import { useContext, useState } from "react";
import { BooksContext } from "../root.jsx";

function BooksList({ filterTitle }) {

    const [filteredBooks, setFilteredBooks] = useState([]); // State for filtered books
    const booksDB = useContext(BooksContext); // Access books from context

    console.log("Filter Title:", filterTitle);

    function filterBooks() {
        const newFilteredBooks = [];

        for (let i = 0; i < booksDB.length; i++) {
            console.log("Checking book:", booksDB[i].title);
            // Check if the book's title includes the filterTitle
            if (booksDB[i].title.toLowerCase().includes(filterTitle.toLowerCase())) {
                newFilteredBooks.push(booksDB[i]); // Add matching book to the array
            }
        }

        setFilteredBooks(newFilteredBooks); // Update the state with the filtered books
    }
    console.log("BooksDB:", booksDB);

    return (
        <div>
            <p>{filterTitle}</p>
            <button onClick={filterBooks}>Show</button> {/* Button to filter books */}
            <div>
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book, index) => (
                        <p key={index}>{book.title}</p> // Display filtered books
                    ))
                ) : (
                    <p>No books found</p> // Display message if no books match
                )}
            </div>
        </div>
    );
}

export default BooksList;