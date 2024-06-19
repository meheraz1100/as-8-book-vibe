import { Link } from "react-router-dom";

const ErrorPage = () => {
    return(
        <div>
            <h2 className="text-center text-6xl mb-4">Opps!</h2>
            <div className="text-center">
            <Link className="btn btn-primary">Go Back to Home</Link>
            </div>
        </div>
    );
};
export default ErrorPage;