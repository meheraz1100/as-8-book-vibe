import { useEffect, useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredRead } from "../Utility/localstorage";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { storedGetRead } from "../Utility/localstorage2";

const ListedBooks = () => {

    const books = useLoaderData();

    const [booksListed, setBooksListed] = useState([]);

    const [wishBooksListed, setWishBooksListed] = useState([]);
    
   
    

    useEffect(() => {
        const storedBookIds = getStoredRead();
        if(books.length > 0) {
            const listedBooks = books.filter(book => storedBookIds.includes(book.bookId))

            // console.log(books, storedBookIds, listedBooks)

            setBooksListed(listedBooks);
        }
    } , [books])
    
    useEffect(() => {
        const wishStoredBookIds = storedGetRead();
        if(books.length > 0) {
            const booksListed = books.filter(book => wishStoredBookIds.includes(book.bookId))

            // console.log(books, wishStoredBookIds, booksListed)

            setWishBooksListed(booksListed);
        }
    } , [])


    const [readBook, setReadBook] = useState([]);
    const [showData, setShowData] = useState([]);


    useEffect(() => {
        const storedReadBooks = storedGetRead();
        setReadBook(storedReadBooks)
        setShowData(storedReadBooks)
    }, [])

    const handleFilter = (filter) => {
        if(filter === 'rating') {
            const shortByRating = readBook.reverse((a, b) => b.rating - a.rating)
            setShowData([...shortByRating])
            // console.log(showData)
           
        }
        else if(filter === 'totalPages') {
            const shortByPageNumber = readBook.reverse((a, b) => b.totalPages - a.totalPages)
            setShowData([...shortByPageNumber])
            console.log(showData)
           
        }
        else if (filter === 'publisher') {
            const shortByPublisher = readBook.reverse((a, b) => b.yearOfPublishing - a.yearOfPublishing)
            setShowData([...shortByPublisher])


            console.log(showData)
        
        }
    }

    return(
        <div>

            <div className="text-center font-work font-bold text-28 rounded-lg bg-opacity-5 bg-black p-4 mb-4">
                    <h1 className="text-center font-work font-bold text-28 leading-normal">Books</h1>
            </div>

            {/* dropdown list */}
            <div className="text-center mb-24 mt-8">
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1 inline-flex  px-24 py-8  justify-center items-center space-x-16 rounded-8 bg-green-500 text-center font-work font-semibold text-white text-18">Sort By <MdOutlineArrowDropDown /></div> 
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow  rounded-box w-52  
                    text-center font-work font-normal text-opacity-80 text-sm leading-28 rounded-8 bg-opacity-5 bg-black">
                        <li onClick={() => handleFilter('rating')}><Link>Rating</Link></li>
                        <li onClick={() => handleFilter('totalPages')}><Link>Number of pages</Link></li>
                        <li onClick={() => handleFilter('publisher')}><Link>Publisher year</Link></li>
                    </ul>
                </div>
            </div>


           

            <div>
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>WishList</Tab>
                    </TabList>

                    <TabPanel classID="readBooks">
                    {
                        booksListed.map(book => 
                        <div key={book.bookId}>

                        {/* image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating, View Details */}

                        <div className="flex bg-opacity-60 bg-gray-19">
                            <div className="min-h-screen rounded-lg bg-opacity-5 bg-gray-800 p-4 mb-6">
                                <img className="w-96 " src={book.image} alt={book.bookName} />
                            </div>
                            <div>
                                <div>
                                <h1 className="text-gray-19 font-playfair font-semibold text-6xl">{book.bookName}</h1>
                                <h2 className="text-gray-19/80 font-worksans font-medium text-base">By: {book.author}</h2>
                                </div>

                                <div className="flex gap-6">
                                    <h3>Tag: #{book.tags} </h3>
                                    <p>Year of Publishing: {book.yearOfPublishing}</p>
                                </div>
                                
                                <div className="flex gap-6">
                                    <h3>Publisher: {book.publisher}</h3>
                                    <h3>Page: {book.totalPages}</h3>
                                </div>

                                <div className="flex gap-6">
                                    <h3 className="flex p-2 sm:p-4 justify-center items-center gap-4 rounded-3xl bg-blue-500/15 text-blue-500 font-worksans text-base">Category: {book.category}</h3>

                                    <h3 className="flex p-2 sm:p-4 justify-center items-center gap-4 rounded-3xl bg-yellow-500/15 text-yellow-500 font-worksans text-base">Rating: {book.rating}</h3>

                                    <Link to={`/`}>
                                    <button className="flex p-2 sm:p-4 justify-center items-center gap-4 rounded-3xl bg-green-500 text-white font-worksans font-medium text-lg">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        </div>

                        )
                        }


                    </TabPanel>
                    <TabPanel className="wishlist">
                    
                    {
                        wishBooksListed.map(wishBook => 
                        <div key={wishBook.bookId}>
                        {/* image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating, View Details */}

                        <div className="flex bg-opacity-60 bg-gray-19">
                            <div className="min-h-screen rounded-lg bg-opacity-5 bg-gray-800 p-4 mb-6">
                                <img className="w-96 " src={wishBook.image} alt={wishBook.bookName} />
                            </div>
                            <div>
                                <div>
                                <h1 className="text-gray-19 font-playfair font-semibold text-6xl">{wishBook.bookName}</h1>
                                <h2 className="text-gray-19/80 font-worksans font-medium text-base">By: {wishBook.author}</h2>
                                </div>

                                <div className="flex gap-6">
                                    <h3>Tag: #{wishBook.tags} </h3>
                                    <p>Year of Publishing: {wishBook.yearOfPublishing}</p>
                                </div>
                                
                                <div className="flex gap-6">
                                    <h3>Publisher: {wishBook.publisher}</h3>
                                    <h3>Page: {wishBook.totalPages}</h3>
                                </div>

                                <div className="flex gap-6">
                                    <h3 className="flex p-2 sm:p-4 justify-center items-center gap-4 rounded-3xl bg-blue-500/15 text-blue-500 font-worksans text-base">Category: {wishBook.category}</h3>

                                    <h3 className="flex p-2 sm:p-4 justify-center items-center gap-4 rounded-3xl bg-yellow-500/15 text-yellow-500 font-worksans text-base">Rating: {wishBook.rating}</h3>

                                    <Link to={`/`}>
                                    <button className="flex p-2 sm:p-4 justify-center items-center gap-4 rounded-3xl bg-green-500 text-white font-worksans font-medium text-lg">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        </div>

                        )
                    }

                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};
export default ListedBooks;