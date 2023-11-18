import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AiFillGoogleCircle } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const SignUp = () => {
    const { signUp, googleSignIn, updateUserProfile } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()


    const handleClickGoogle = () => {
        googleSignIn().then((result) => {
            console.log(result.user);
        })
    }


    const onSubmit = (data) => {
        console.log(data)
        signUp(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log("user profile updated");
                        reset();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "You successfully sign up",
                            showConfirmButton: false,
                            timer: 1500
                        });

                        navigate("/");
                    })
                    .catch(error => console.log(error))
            })

    };

    return (
        <>
            <Helmet>
                <title>Bistro Boss | SignUp</title>
            </Helmet>
            <div className="bg-[url(https://i.ibb.co/XJdhK0h/authentication.png)] h-screen">
                <Helmet>
                    <title>Bistro Boss | SignUp</title>
                </Helmet>
                <div className="max-w-6xl mx-auto pt-2 mb-28">

                    <div className="grid grid-cols-7  mt-5 border-t-4 border-[#00000040]  border-b-8 border-r-8 shadow-2xl pt-5  pb-4 pl-16 ">



                        <div className=" col-span-3">
                            <h2 className="font-bold text-3xl text-center ">Sign Up</h2>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">Name</span>
                                    </label>
                                    <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Type here" type="text" {...register("name", { required: true })} name="name" id="name" />
                                    {/* errors will return when field validation fails  */}
                                    {errors.name && <span className="text-red-600">Name field is required</span>}
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">Photo URL</span>
                                    </label>
                                    <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Type here" type="text" {...register("photoURL", { required: true })} name="photoURL" id="photoURL" />
                                    {/* errors will return when field validation fails  */}
                                    {errors.photoURL && <span className="text-red-600">url field is required</span>}
                                </div>

                                <div className="">
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">Email</span>
                                    </label>
                                    <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Enter Your Email" type="email" {...register("email", { required: true })} name="email" id="email" />
                                    {/* errors will return when field validation fails  */}
                                    {errors.email && <span className="text-red-600">Email field is required</span>}
                                </div>

                                <div className="relative ">
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">Password</span>
                                    </label>

                                    <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Enter your Password" type={showPassword ? "text" : "password"} {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&@? "])[a-zA-Z0-9!#$%&@?]{6,15}$/
                                    })} name="password" id="password" required />
                                    <span className='absolute top-14 right-2' onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <FaEyeSlash className="text-black"></FaEyeSlash> : <FaEye className="text-black"></FaEye>}
                                    </span>
                                    {errors.password?.type === "required" &&
                                        <p className="text-red-600">password is required</p>}
                                    {errors.password?.type === "minLength" &&
                                        <p className="text-red-600">password must be 6 chatecters required</p>}
                                    {errors.password?.type === "maxLength" &&
                                        <p className="text-red-600">password must be less than 20 chatecters required</p>}
                                    {errors.password?.type === "pattern" &&
                                        <p className="text-red-600">password must have one upper case ,one lolwer case,one number and  one special chatecters required</p>}

                                </div>


                                <input className="btn btn-block bg-[#D1A054] text-white  capitalize mt-5  font-bold text-xl" type="submit" value="Sign Up" />

                            </form>


                            <div className=" flex flex-col justify-center items-center  ">
                                <p className="text-[#D1A054] font-bold	text-center mt-2">Already registered? Go to <Link to="/login">log in</Link> </p>
                                <h2 className="text-center mt-3">Or sign up with</h2>


                                <div className="flex gap-6 text-3xl mt-2">
                                    <CiFacebook></CiFacebook>
                                    <Link to="/">
                                        <AiFillGoogleCircle onClick={handleClickGoogle}></AiFillGoogleCircle>
                                    </Link>
                                    <VscGithub></VscGithub>
                                </div>


                            </div>

                        </div>

                        <div className=" col-span-4">
                            <img src="https://i.ibb.co/pz4h2Kg/authentication2.png" alt="" />
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default SignUp;