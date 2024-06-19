import { Link } from "react-router-dom";

const Banner = () => {
    return(
        <div>
            {/* <h3>Hello this is banner card</h3> */}

            <div className="banner-container bg-gray-200 p-4 flex justify-between items-center">
            <div className="banner-content">
                <h2 className="banner-title mb-4 text-gray-900 font-playfair-display font-bold text-6xl leading-14">Books to freshen up <br /> your bookshelf</h2>
                <Link to='/listed' href="listed_books_page.html" className="inline-flex p-5 justify-center items-center gap-4 text-white text-center font-work-sans font-bold text-lg bg-green-500 rounded-lg">View The List</Link>
            </div>
            <div className="banner-image">
                <img src="https://i.ibb.co/ThJ40V8/banner-Book.png" alt="bannerBookImage" className="max-w-full h-auto" />
            </div>
            </div>
        </div>
    );
}
export default Banner;