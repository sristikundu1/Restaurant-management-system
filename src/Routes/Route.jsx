import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu/OurMenu";


const Route = createBrowserRouter([
    {
        path:"/",
        element:<MainLayOut></MainLayOut>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/menu",
                element:<OurMenu></OurMenu>
            }
        ]
    }
])

export default Route;