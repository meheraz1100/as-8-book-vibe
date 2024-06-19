import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
                fetch('/Books.json')
                .then(res => res.json())
                .then(data => setBooks(data));
            }, [])
        
    // console.log(books);

    return(
        <div className=" mt-12">
            <div className="text-center">
                <h3 className="text-gray-800 font-playfair text-2xl font-bold">Books</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.map(book =>  <Book key={book.bookId} book={book}></Book>)}
            </div>
        </div>
    );
};

export default Books;