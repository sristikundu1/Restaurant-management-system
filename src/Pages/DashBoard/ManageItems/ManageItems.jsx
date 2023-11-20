import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import Usemenu from "../../../Hooks/Usemenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const[menu,refetch] = Usemenu();
    const axiosSecure = useAxiosSecure();

    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                   
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: `${item.name} has been deleted`,
                                icon: "success"
                            });
                        }
                 

            }
        });


    }
    return (
        <div className="bg-[#F6F6F6] pb-16">
            <SectionTitle
                subHeading={"---Hurry Up!---"}
                heading={"MANAGE ALL ITEMS"}>

            </SectionTitle>

            <div className=" bg-[#FFF] border mx-16 pb-16">
                <div className="flex justify-start mt-24 ml-16 bg-[#FFF]  py-10">
                    <h2 className="text-[#151515] font-bold text-4xl">Total items:  {menu.length}</h2>
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
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id}>
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
                                     <Link to={`/dashboard/updateitem/${item._id}`}>
                                     <button
                                            
                                            className="btn   bg-[#D1A054] text-white rounded-lg"><FiEdit className="text-xl"></FiEdit></button>
                                     </Link>
                                    </th>
                                    <th>
                                        <button
                                            onClick={() => handleDelete(item)}
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

export default ManageItems;