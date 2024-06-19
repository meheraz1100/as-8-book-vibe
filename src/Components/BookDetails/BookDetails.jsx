import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBookDetails } from "../Utility/localstorage";
import { wishBookDetails } from "../Utility/localstorage2";
import { useState } from "react";

const BookDetails = () => {

    const books = useLoaderData();
    const {bookId} = useParams();
    const bookIdInt = parseInt(bookId);

    const book = books.find(book => book.bookId === bookIdInt);

    // console.log(books, bookId);
    // console.log(book);

    // const handleReadBtn = () => {
    //     saveBookDetails(bookIdInt);
    //     toast.success('Book added to Read.');
    // }
    
    // const handleWishlistBtn = () => {
    //     wishBookDetails(bookIdInt);
    //     toast.success('Book added to wishList.');
    // }

    const [booksListed, setBooksListed] = useState([]);

    const [wishBooksListed, setWishBooksListed] = useState([]);

    const handleReadBtn2 = (bookId) => {
        if (wishBooksListed.includes(bookId)) {
            toast.error('This book is already in the Wishlist. You cannot add it to Read.');
        } else if (booksListed.includes(bookId)) {
            toast.warning('This book is already added to Read.');
        } else {
            setBooksListed([...booksListed, bookId]);
            saveBookDetails(bookIdInt);
            toast.success('Book added to Read.');
        }
    };

    const handleWishlistBtn2 = (bookId) => {
        if (booksListed.includes(bookId)) {
            toast.error('This book is already in Read. You cannot add it to Wishlist.');
        } else if (wishBooksListed.includes(bookId)) {
            toast.warning('This book is already added to Wishlist.');
        } else {
            setWishBooksListed([...wishBooksListed, bookId]);
            wishBookDetails(bookIdInt);
            toast.success('Book added to Wishlist.');
        }
    };



    return(

        

        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                    <img src={book.image} className="max-w-sm p-12 m-6 rounded-lg shadow-2xl" />
                </div>
                <div>
                <h1 className="text-5xl font-bold text-opacity-80 font-work-sans">{book.bookName}</h1>
                <p className="py-6 text-opacity-80 font-work-sans font-medium text-base">By: {book.author}</p>

                <hr />

                <p className="text-opacity-80 p-6 text-[#131313CC] font-work-sans font-medium text-base">{book.category}</p>
                <hr />
                <div>
                    <p className="text-4xl">Review: {book.review}</p>
                </div> <hr />

                <div>
                   Tag 
                   {book.tags}
                </div>
                <hr />

                <div>
                    <p>Number of Pages: {book.totalPages}</p>

                    <p>Publisher: {book.publisher}</p>
                    <p>Year of Publishing: {book.yearOfPublishing}</p>
                    <p>Rating: {book.rating}</p>
                </div>

                <div>
                    <button  onClick={() => handleReadBtn2()} className="btn btn-primary mr-4">
                        Read
                    </button>
                    <button onClick={() => handleWishlistBtn2()} className="btn btn-primary">Wishlist</button>
                </div>
                </div>
                <ToastContainer />
            </div>
            </div>
        </div>
    )
}
export default BookDetails;