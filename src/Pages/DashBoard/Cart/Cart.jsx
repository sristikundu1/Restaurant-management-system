import useCart from "../../../Hooks/useCart";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const Cart = () => {
    const [cart,refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                       if(res.data.deletedCount > 0){
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                       }
                    })

            }
        });

    }
    return (
        <div className="bg-[#F6F6F6] pb-16">
            <SectionTitle
                subHeading={"---My Cart---"}
                heading={"WANNA ADD MORE?"}>

            </SectionTitle>
            <div className=" bg-[#FFF] border mx-16 ">
                <div className="flex justify-evenly mt-24 bg-[#FFF]  py-10">
                    <h2 className="text-[#151515] font-bold text-4xl">Total orders: {cart.length}</h2>
                    <h2 className="text-[#151515] font-bold text-4xl">total price: ${totalPrice}</h2>
                    <button className="bg-[#D1A054] text-white w-16 rounded-lg font-bold">Pay</button>
                </div>

                <div className="overflow-x-auto px-16">
                    <table className="table w-full ">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#D1A054] text-white border-t-ro h-16">
                                <th></th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="btn   bg-[#B91C1C] text-white rounded-lg"><RiDeleteBin6Fill className="text-xl"></RiDeleteBin6Fill></button>
                                    </th>
                                </tr>)
                            }


                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;