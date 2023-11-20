import { NavLink, Outlet } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { FaCalendarAlt, FaShoppingCart, FaEnvelope,FaListUl ,FaBook   } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import { TbCalendarTime } from "react-icons/tb";
import { GiWallet } from "react-icons/gi";
import { BsList } from "react-icons/bs";
import { GiShoppingBag } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import { IoIosPeople } from "react-icons/io";
import useAdmin from "../Hooks/useAdmin";


const DashBoard = () => {
    const [isAdmin] = useAdmin();
    // console.log(isAdmin);

    return (
        <div className="flex">
            <div className="w-80 min-h-screen bg-[#D1A054] py-16 px-3">
                <h2 className="text-[rgb(21,21,21)] font-cinzel text-4xl text-center font-bold mb-10">BISTRO BOSS <br />Restaurant</h2>
                <ul className=" menu p-4 bg-transparent text-[#151515] font-cinzel">
                    {
                        isAdmin ? <>

                            <li className=" font-medium	text-xl"><NavLink to="/dashboard/adminhome"><TiHome></TiHome>Admin Home</NavLink></li>
                            <li className=" font-medium	text-xl"><NavLink to="/dashboard/additems"><ImSpoonKnife></ImSpoonKnife>add items</NavLink></li>
                            <li className=" font-medium	text-xl"><NavLink to="/dashboard/manageitems"><FaListUl></FaListUl>manage items</NavLink></li>
                            <li className=" font-medium	text-xl"><NavLink to="/dashboard/booking"><FaBook ></FaBook>Manage bookings</NavLink></li>
                            <li className=" font-medium	text-xl"><NavLink to="/dashboard/users"><IoIosPeople></IoIosPeople>all users</NavLink></li>
                            

                        </> :
                            <>
                                <li className=" font-medium	text-xl"><NavLink to="/dashboard/userhome"><TiHome></TiHome>User Home</NavLink></li>
                                <li className=" font-medium	text-xl"><NavLink to="/dashboard/reservation"><FaCalendarAlt></FaCalendarAlt>reservation</NavLink></li>
                                <li className=" font-medium	text-xl"><NavLink to="/dashboard/paymenthistory"><GiWallet></GiWallet>payment history</NavLink></li>
                                <li className=" font-medium	text-xl"><NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart>my cart</NavLink></li>
                                <li className=" font-medium	text-xl"><NavLink to="/dashboard/review"><VscPreview></VscPreview>add review</NavLink></li>
                                <li className=" font-medium	text-xl"><NavLink to="/dashboard/booking"><TbCalendarTime></TbCalendarTime>my booking</NavLink></li>

                            </>
                    }

                    <div className="divider bg-white h-1"></div>


                    <li className=" font-medium	text-xl"><NavLink to="/"><TiHome></TiHome> Home</NavLink></li>
                    <li className=" font-medium	text-xl"><NavLink to="/menu"><BsList></BsList> Menu</NavLink></li>
                    <li className=" font-medium	text-xl"><NavLink to="/shop/salad"><GiShoppingBag></GiShoppingBag> Shop</NavLink></li>
                    <li className=" font-medium	text-xl"><NavLink to="/contact"><FaEnvelope></FaEnvelope> Contact</NavLink></li>

                </ul>

            </div>
            <div className="flex-1 bg-[#F6F6F6] ">
                <Outlet></Outlet>

            </div>

        </div>
    );
};

export default DashBoard;