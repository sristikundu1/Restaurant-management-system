import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { PiClockFill } from "react-icons/pi";

const Location = () => {
    return (
        <div className='max-w-5xl mx-auto mb-24'>
            <SectionTitle
                subHeading={"---Visit Us---"}
                heading={"OUR LOCATION"}></SectionTitle>

            <div className="grid grid-cols-3 gap-4">
                <div className=" text-center border">
                    <button className="w-[331px] h-16 p-4 bg-[#D1A054] flex justify-center items-center"><FaPhoneVolume className="text-white text-xl font-bold text-center"></FaPhoneVolume></button>
                    <div className="bg-[#F3F3F3] ml-6 mr-6 mb-6 h-36 pt-7 ">
                        <h2 className="text-center text-2xl font-medium	 text-[#151515] mb-2">PHONE</h2>
                        <p className="text-center text-[#151515]">+38 (012) 34 56 789</p>
                    </div>
                </div>
                <div className=" text-center border">
                    <button className="w-[331px] h-16 p-4 bg-[#D1A054] flex justify-center items-center"><HiLocationMarker className="text-white text-xl font-bold text-center"></HiLocationMarker></button>
                    <div className="bg-[#F3F3F3] ml-6 mr-6 mb-6 h-36 pt-7 ">
                        <h2 className="text-center text-2xl font-medium	 text-[#151515] mb-2">ADDRESS</h2>
                        <p className="text-center text-[#151515]">+38 (012) 34 56 789</p>
                    </div>
                </div>
                <div className=" text-center border">
                    <button  className="w-[331px] h-16 p-4 bg-[#D1A054] flex justify-center items-center"><PiClockFill className="text-white text-xl font-bold text-center"></PiClockFill></button>
                    <div className="bg-[#F3F3F3] ml-6 mr-6 mb-6 h-36 pt-7 ">
                        <h2 className="text-center text-2xl font-medium	 text-[#151515] mb-2">WORKING HOURS</h2>
                        <p className="text-center text-[#151515]">Mon - Fri: 08:00 - 22:00</p>
                        <p className="text-center text-[#151515]">Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Location;