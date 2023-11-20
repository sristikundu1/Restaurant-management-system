import { RiDeleteBin6Fill } from "react-icons/ri";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { IoIosPeople } from "react-icons/io";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({

        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            return res.data;
        }
    })


    const handleAddAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })
    }

    const handleDelete = user => {
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
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
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
        <div>
            <SectionTitle
                subHeading={"---How many??---"}
                heading={"MANAGE ALL USERS"}>

            </SectionTitle>

            <div className=" bg-[#FFF] border mx-16 ">
                <div className="flex justify-start mt-24 bg-[#FFF] pl-14 py-10">
                    <h2 className="text-[#151515] font-bold text-4xl font-cinzel ">Total users:  {users.length}</h2>
                </div>

                <div className="overflow-x-auto px-16">
                    <table className="table w-full ">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#D1A054] text-white h-16">
                                <th></th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>ROLE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                        {
                                            user.role === 'admin' ? 'Admin' :
                                                <button
                                                    onClick={() => handleAddAdmin(user)}
                                                    className="btn   bg-[#D1A054] text-white rounded-lg"><IoIosPeople className="text-xl"></IoIosPeople></button>
                                        }
                                    </td>
                                    <th>
                                        <button
                                            onClick={() => handleDelete(user)}
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

export default AllUsers;