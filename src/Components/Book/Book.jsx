import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    return(
        <Link to={`book/${book.bookId}`}>
        <div  className="book-card">
            
                <div className="card  bg-base-100 shadow-xl h-[1100px]">
                    <div className="rounded-lg bg-gray-200 p-6 m-6">
                    <img src={book.image} alt={book.bookName} />
                    </div>
                    <div className="card-body">
                        <div className="flex gap-4">
                            <h2 className="card-title">
                            {book.category}
                            <div className="badge badge-secondary">Identity</div>
                            </h2>
                        </div>
                        <div>
                            <p className="text-gray-900 font-playfair font-bold text-2xl">{book.bookName}</p>
                            <p className=" font-worksans font-medium text-base text-opacity-80">By: {book.author}</p>
                        </div> <hr />
                        <div className="card-actions justify-between">
                            <p>{book.category}</p>
                            <div className="flex">
                                <p> {book.rating}</p>  
                                <div>
                                    <IoIosStarOutline />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
        </Link>
    );
};

export default Book;