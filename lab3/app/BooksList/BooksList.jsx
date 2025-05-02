import { useContext, useState } from "react";
import { BooksContext } from "../root";


function BooksList(){
    
    const books = useContext(BooksContext);

    return(
        <div>
            <p>{books[0].title}</p>
        </div>
    );
}

export default BooksList;