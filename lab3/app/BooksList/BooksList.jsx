import { useContext, useState } from "react";
import { BooksContext } from "../root.jsx";

function BooksList({ filterTitle, filterAuthor, filterCover }) {

    const [filteredBooks, setFilteredBooks] = useState([]); 
    const booksDB = useContext(BooksContext); 

    console.log("Filter Title:", filterCover);

    function filterBooks() {
        const newFilteredBooks = [];

        for (let i = 0; i < booksDB.length; i++) {
            console.log("Checking book:", booksDB[i].title);
            
            if (booksDB[i].title.toLowerCase().includes(filterTitle.toLowerCase())
            && booksDB[i].author.toLowerCase().includes(filterAuthor.toLowerCase())
            && (booksDB[i].cover.toLowerCase().includes(filterCover.toLowerCase())
            || filterCover=="null")) {
                newFilteredBooks.push(booksDB[i]); 
            }
        }

        setFilteredBooks(newFilteredBooks); 
    }
    console.log("BooksDB:", booksDB);

    return (
        <div>
            <p>{filterTitle}</p>
            <button onClick={filterBooks}>Show</button>
            <div>
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book, index) => (
                        <p key={index}>{book.title}</p> 
                    ))
                ) : (
                    <p>No books found</p> 
                )}
            </div>
        </div>
    );
}

export default BooksList;