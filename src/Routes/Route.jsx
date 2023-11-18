import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop/OurShop";
import ContactUs from "../Pages/ContactUs/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DashBoard from "../MainLayOut/DashBoard";
import Cart from "../Pages/DashBoard/Cart/Cart";


const Route = createBrowserRouter([
    {
        path:"/",
        element:<MainLayOut></MainLayOut>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/menu",
                element:<OurMenu></OurMenu>
            },
            {
                path:"/shop/:category",
                element:<OurShop></OurShop>
            },
            {
                path:"/contact",
                element:<ContactUs></ContactUs>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"signup",
                element:<SignUp></SignUp>
            }
        ]
    },
    {
        path:"dashboard",
        element:<DashBoard></DashBoard>,
        children:[
            {
                path:"cart",
                element:<Cart></Cart>
            }
        ]
    }
])

export default Route;