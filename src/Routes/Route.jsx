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
import PrivateRoutes from "./PrivateRoutes";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import AddItems from "../Pages/DashBoard/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Pages/DashBoard/ManageItems/ManageItems";
import UpdateItems from "../Pages/DashBoard/UpdateItems/UpdateItems";
import Payment from "../Pages/DashBoard/Payment/Payment";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/PaymentHistory";



const Route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <OurMenu></OurMenu>
            },
            {
                path: "/shop/:category",
                element: <OurShop></OurShop>
            },
            {
                path: "/contact",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
        children: [
            // normal user route 
            {
                path: "cart",
                element: <Cart></Cart>
            },
            {
                path:"payment",
                element:<Payment></Payment>
            },
            {
                path:"paymenthistory",
                element:<PaymentHistory></PaymentHistory>
            },

            // admin route 
            {
                path:"additems",
                element:<AdminRoutes><AddItems></AddItems></AdminRoutes>
            },
            {
                path:"manageitems",
                element:<AdminRoutes><ManageItems></ManageItems></AdminRoutes>
            },
            {
                path:"updateitem/:id",
                element:<AdminRoutes><UpdateItems></UpdateItems></AdminRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
            },

            {
                path: "users",
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            }
        ]
    }
])

export default Route;