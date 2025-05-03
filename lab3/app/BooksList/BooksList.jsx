import { useContext, useState } from "react";
import { BooksContext } from "../root.jsx";

function BooksList({ filterTitle, filterAuthor, filterCover, filterPrice, filterPages }) {

    const [filteredBooks, setFilteredBooks] = useState([]); 
    const booksDB = useContext(BooksContext); 

    function filterBooks() {
        const newFilteredBooks = [];

        for (let i = 0; i < booksDB.length; i++) {
            
            if (booksDB[i].title.toLowerCase().includes(filterTitle.toLowerCase())
            && booksDB[i].author.toLowerCase().includes(filterAuthor.toLowerCase())
            && (booksDB[i].cover.toLowerCase().includes(filterCover.toLowerCase())
            || filterCover=="null") && booksDB[i].pages > filterPages
            && booksDB[i].price > filterPrice) {
                newFilteredBooks.push(booksDB[i]); 
            }
        }

        setFilteredBooks(newFilteredBooks); 
    }
    console.log("BooksDB:", booksDB);

    return (
        <div className="booksList">
            <p>{filterTitle}</p>
            <button onClick={filterBooks}>Show</button>
            <div>
                <table className="booksTable">
                    <tr id="header">
                        <th>Title</th>
                        <th>Author</th>
                        <th>Pages</th>
                        <th>Price</th>
                        <th>Cover</th>
                    </tr>
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map((book, index) => (
                            <tr>
                                <th>{book.title}</th>
                                <th>{book.author}</th>
                                <th>{book.pages}</th>
                                <th>{book.price}</th>
                                <th>{book.cover}</th>
                            </tr>
                        ))
                    ) : (
                        <p>No books found</p> 
                    )}
                </table>
            </div>
        </div>
    );
}

export default BooksList;