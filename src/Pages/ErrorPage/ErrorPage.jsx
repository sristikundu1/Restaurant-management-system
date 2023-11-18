import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";

const ErrorPage = () => {
    return (
        <div>
            <div className="hero h-[500px] max-w-6xl mx-auto mt-10" style={{ backgroundImage: 'url(https://i.ibb.co/7v1hG3X/404.gif)' }}>
            </div>
           <Link to="/"> <h2 className="text-center mt-5 text-[#FFF] bg-gradient-to-r from-[#835D23] to-[#B58130] w-44 h-14 border font-bold pt-2 ml-[600px] flex justify-center items-center ">Back To Home <MdHome className="ml-2 text-2xl"></MdHome></h2></Link>
        </div>
    );
};

export default ErrorPage;