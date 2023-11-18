import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";


const MainLayOut = () => {
    const location = useLocation();
    // console.log(location);
    const noHeaderFooter = location.pathname.includes("login") || 
    location.pathname.includes("signup");
    return (
        <div>
           {noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
           { noHeaderFooter ||  <Footer></Footer>}
        </div>
    );
};

export default MainLayOut;