import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";


const MenuCard = ({ item }) => {

    const { name, image, recipe, price, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const[,refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
        //    insert data in the database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name, image, price
            }
            axiosSecure.post("/carts", cartItem)
                .then(res => {
                    console.log(res.data);
                    if(res.data.insertedId){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                          });
                        //   refetch the cart to update the cart items count
                          refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not login",
                text: "Please login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "ok,, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            });
        }
    }

    return (
        <div>
            <div className="card card-compact w-80 h-[441px] bg-[#F3F3F3] rounded-none	">
                <figure><img className="w-80 text-[#151515] text-2xl font-semibold" src={image} alt="Shoes" /></figure>
                <p className="bg-[#111827] text-white  absolute right-0 mr-4 mt-4 px-2">${price}</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>


                    <p>{recipe}</p>


                    <div className="card-actions ">
                        <button onClick={handleAddToCart} className="btn text-[#BB8506] bg-[#E8E8E8] border-b-4 border-x-0 border-t-0 border-[#BB8506] hover:bg-[#1F2937]">ADD TO CART</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MenuCard;