import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })

    return (
        <div>
            <SectionTitle
                subHeading={"---At a Glance!---"}
                heading={"PAYMENT HISTORY"}>

            </SectionTitle>

            <div className=" bg-[#FFF] border mx-16 ">
                <div className="flex justify-start mt-24 bg-[#FFF] pl-14 py-10">
                    <h2 className="text-[#151515] font-bold text-4xl font-cinzel ">Total Payments:  {payments.length}</h2>
                </div>

                <div className="overflow-x-auto px-16">
                    <table className="table w-full ">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#D1A054] text-white h-16">
                                <th></th>
                                <th>EMAIL</th>
                                <th>TRANSACTIONID</th>
                                <th>TOTAL PRICE</th>
                                <th>PAYENT DATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((payment, index) => <tr key={payment._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        {payment.email}
                                    </td>
                                    <td>
                                        {payment.transactionId}
                                    </td>
                                    <td>
                                        ${payment.price}
                                    </td>
                                    <td>
                                        {payment.date}
                                    </td>
                                </tr>)
                            }


                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    );
};

export default PaymentHistory;