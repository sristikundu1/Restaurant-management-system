import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaPaperPlane } from "react-icons/fa6";
import ReCAPTCHA from "react-google-recaptcha";


const Form = () => {

    function onChange(value) {
        console.log("Captcha value:", value);
    }
    return (
        <div className='max-w-5xl mx-auto mb-24'>
            <SectionTitle
                subHeading={"---Send Us a Message---"}
                heading={"CONTACT FORM"}></SectionTitle>


            <div className="border bg-[#F3F3F3] pt-24 px-14">
                <form>
                    <div className="w-full flex gap-3">
                        <div className="w-1/2">
                            <label className="label">
                                <span className="label-text text-[#444] font-semibold">Name*</span>
                            </label>
                            <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Enter your name" type="text" name="name" id="name" />
                        </div>

                        <div className="w-1/2">
                            <label className="label">
                                <span className="label-text text-[#444] font-semibold">Email*</span>
                            </label>
                            <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Enter your email" type="email" name="email" id="email" />
                        </div>
                    </div>
                    <div className="w-full flex gap-3">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-[#444] font-semibold">Phone*</span>
                            </label>
                            <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Enter your phone number" type="number" name="phone" id="phone" />
                        </div>
                    </div>
                    <div className="w-full flex gap-3 mb-10">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-[#444] font-semibold">Message*</span>
                            </label>
                            <textarea className="w-full  border-2 p-4 pl-5 rounded-lg" placeholder="Write your message here" name="message" id="message" cols="30" rows="10"></textarea>
                        </div>
                    </div>

                    <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={onChange}
                    />
                    <button className="text-center  text-[#FFF] bg-gradient-to-r from-[#835D23] to-[#B58130] w-44 h-14 border font-bold pt-1 ml-[380px] mb-16 mt-56 flex justify-center items-center" >Send Message<FaPaperPlane className="ml-2"></FaPaperPlane></button>
                </form>
            </div>

        </div>
    );
};

export default Form;