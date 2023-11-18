import { useContext } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import cartIcon from "../../../assets/icon/cart.jpg"
import useCart from "../../../Hooks/useCart";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const[cart] = useCart()

    const handleLogOut = () => {
        logOut()
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                console.error(error);
            })

    }

    const navItems = <>

        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" :
                    isActive ? "text-[#EEFF25] font-extrabold" : ''
            }>Home</NavLink></li>

        <li><NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
                isPending ? "pending" :
                    isActive ? "text-[#EEFF25] font-extrabold " : ''
            }>Contact Us</NavLink></li>

        <li><NavLink
            to="/menu"
            className={({ isActive, isPending }) =>
                isPending ? "pending" :
                    isActive ? "text-[#EEFF25] font-extrabold " : ''
            }>Our Menu</NavLink></li>

        <li><NavLink
            to="/shop/salad"
            className={({ isActive, isPending }) =>
                isPending ? "pending" :
                    isActive ? "text-[#EEFF25] font-extrabold " : ''
            }>Our Shop</NavLink></li>

        <li><NavLink
            to="/dashboard/cart"
            className={({ isActive, isPending }) =>
                isPending ? "pending" :
                    isActive ? "text-[#EEFF25] font-extrabold " : ''
            }> <button className="btn bg-transparent -mt-2">
                <img className="w-6" src={cartIcon} alt="" />
                <div className="badge badge-secondary">+{cart.length}</div>
            </button></NavLink></li>




    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white py-6 px-7">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl font-cinzel font-bold	">BISTRO BOSS <br />Restaurant</a>
                    {/* <p className="btn btn-ghost text-3xl font-cinzel font-bold	">BISTRO BOSS</p>
                    <p className="btn btn-ghost text-2xl font-cinzel font-bold	">RESTAURANT</p>
                    <br /> */}
                    {/* <h2 className="btn btn-ghost font-cinzel text-2xl font-bold">Restaurant</h2> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <>
                            <p>{user?.displayName}</p>
                            <img className="w-12 h-10 mx-2 rounded-full" src={user?.photoURL} alt="" />

                            <button onClick={handleLogOut} className="text-[#FFF] font-extrabold uppercase mr-3">LogOut</button>

                        </>
                            :
                            <>
                                <Link to="/login">
                                    <button className="text-[#FFF] font-extrabold uppercase mr-3">Sign In</button>
                                </Link>
                                <BsPersonCircle className="text-5xl mr-4 text-[#FFFFFF] fo"></BsPersonCircle>
                            </>
                    }

                </div>
            </div>

        </div>
    );
};

export default NavBar;