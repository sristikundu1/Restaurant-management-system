import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <footer>

            <div>
                <div className="w-full md:flex lg:flex ">

                    <div className="w-full py-14 bg-[#1F2937] text-[#FFF] lg:w-1/2  lg:pl-20">
                        <h2 className="font-medium	text-3xl text-center mb-7">CONTACT US</h2>
                        <div className="flex flex-col justify-center items-center  font-medium space-y-2">
                            <p>123 ABS Street, Uni 21, Bangladesh</p>
                            <p>+88 123456789</p>
                            <p>Mon - Fri: 08:00 - 22:00</p>
                            <p>Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>

                    <div className="w-full bg-[#111827] text-[#FFF] py-14 lg:w-1/2 lg:pr-36 ">
                        <h2 className="font-medium	text-3xl text-center mb-7">Follow US</h2>

                        <p className="text-center font-medium mb-7">Join us on social media</p>
                        <div className="flex gap-5 justify-center items-center text-3xl">
                            <a><BsFacebook></BsFacebook></a>
                            <a><BsInstagram></BsInstagram></a>
                            <a><BsTwitter></BsTwitter></a>
                        </div>
                    </div>
                </div>

                <div className=" bg-[#151515] text-[#FFF] py-3 font-medium text-center ">

                    <p>Copyright © CulinaryCloud. All rights reserved.</p>

                </div>
            </div>

        </footer>


    );
};

export default Footer;