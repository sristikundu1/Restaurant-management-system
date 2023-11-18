import { NavLink, Outlet } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { FaCalendarAlt,FaShoppingCart,FaEnvelope  } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import { TbCalendarTime } from "react-icons/tb";
import { GiWallet } from "react-icons/gi";
import { BsList } from "react-icons/bs";
import { GiShoppingBag } from "react-icons/gi";


const DashBoard = () => {
    return (
        <div className="flex">
            <div className="w-80 min-h-screen bg-[#D1A054] py-16 px-3">
                <h2 className="text-[rgb(21,21,21)] font-cinzel text-4xl text-center font-bold mb-10">BISTRO BOSS <br />Restaurant</h2>
                <ul className=" menu p-4 bg-transparent text-[#151515] font-cinzel">
                    <li className=" font-medium	text-xl"><NavLink to="/dashboard/userhome"><TiHome></TiHome>User Home</NavLink></li>
                    <li className=" font-medium	text-xl"><NavLink to="/dashboard/reservation"><FaCalendarAlt></FaCalendarAlt>reservation</NavLink></li>
                    <li className=" font-medium	text-xl"><NavLink to="/dashboard/payment"><GiWallet></GiWallet>payment history</NavLink></li>
                    <li className=" font-medium	text-xl"><NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart>my cart</NavLink></li>
                    <li className=" font-medium	text-xl"><NavLink to="/dashboard/review"><VscPreview></VscPreview>add review</NavLink></li>
                    <li className=" font-medium	text-xl"><NavLink to="/dashboard/booking"><TbCalendarTime></TbCalendarTime>my booking</NavLink></li>

                    <div className="divider bg-white h-1"></div>


                    <li className=" font-medium	text-xl"><NavLink to="/"><TiHome></TiHome> Home</NavLink></li>
                    <li className=" font-medium	text-xl"><NavLink to="/menu"><BsList></BsList> Menu</NavLink></li>
                    <li className=" font-medium	text-xl"><NavLink to="/shop/salad"><GiShoppingBag></GiShoppingBag> Shop</NavLink></li>
                    <li className=" font-medium	text-xl"><NavLink to="/contact"><FaEnvelope></FaEnvelope> Contact</NavLink></li>

                </ul>

            </div>
            <div className="flex-1 ">
                <Outlet></Outlet>

            </div>

        </div>
    );
};

export default DashBoard;