import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { CiFacebook } from "react-icons/ci";
import { AiFillGoogleCircle } from "react-icons/ai";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";



const Login = () => {
    const axiosPublic = useAxiosPublic();


    const [showPassword, setShowPassword] = useState(false);
    const [success, setSuccess] = useState("");
    const [logINError, setLogInError] = useState("");


    const location = useLocation();
    const navigate = useNavigate();


    const [disabled, setDisabled] = useState(true);

    const { logIn, googleSignIn } = useContext(AuthContext);


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleClickGoogle = () => {
        googleSignIn()
            .then((result) => {
                console.log(result.user);
                const guserInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', guserInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate("/");

                    })
            })
    }


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setLogInError('');
        setSuccess('');

        if ((email, password)) {
            logIn(email, password)
                .then((result) => {
                    const user = result.user;
                    console.log(user);

                    Swal.fire({
                        title: "Wow!",
                        text: "You successfully login!",
                        icon: "success"
                    });

                    setSuccess("user loged successfully");

                    navigate(location?.state ? location.state : "/")
                    form.reset();
                })


                .catch(error => {
                    console.error(error);
                    setLogInError(error.message);
                })
        }

    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }

    }
    return (

        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>

            <div className="bg-[url(https://i.ibb.co/XJdhK0h/authentication.png)] h-screen">

                <div className="max-w-6xl mx-auto pt-2 mb-28">

                    <div className="grid grid-cols-7  mt-10 border-t-4 border-[#00000040]  border-b-8 border-r-8 shadow-2xl pt-9 pr-7 pb-4 ">

                        <div className=" col-span-4">
                            <img src="https://i.ibb.co/pz4h2Kg/authentication2.png" alt="" />
                        </div>

                        <div className=" col-span-3">
                            <h2 className="font-bold text-3xl text-center ">Login</h2>

                            <form onSubmit={handleLogin}>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">Email</span>
                                    </label>
                                    <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Enter Your Email" type="email" name="email" id="email" />
                                </div>

                                <div className=" relative">
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">Password</span>
                                    </label>

                                    <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Enter your Password" type={showPassword ? "text" : "password"} name="password" id="password" required />
                                    <span className='absolute top-14 right-2' onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <FaEyeSlash className="text-black"></FaEyeSlash> : <FaEye className="text-black"></FaEye>}
                                    </span>

                                </div>
                                <div className="mt-4 ">


                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input onBlur={handleValidateCaptcha} className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Type here" type="text" name="capcha" id="capcha" required />
                                    {/* <button  className="btn btn-outline btn-accent btn-xs w-full mt-3">validate</button> */}

                                </div>

                                <input disabled={disabled} className="btn btn-block bg-[#D1A054] text-white  capitalize mt-3  font-bold text-xl" type="submit" value="Login" />

                            </form>

                            {
                                logINError && <p>{logINError}</p>

                            }
                            {
                                success && <p>{success}</p>

                            }


                            <div className=" flex flex-col justify-center items-center  ">
                                <Link to="/signup">
                                    <p className="text-[#D1A054] font-bold	text-center mt-2">New here? Create a New Account</p>
                                </Link>
                                <h2 className="text-center mt-3">Or sign in with</h2>


                                <div className="flex gap-6 text-3xl mt-2">
                                    <CiFacebook></CiFacebook>
                                    <Link to="/">
                                        <AiFillGoogleCircle onClick={handleClickGoogle}></AiFillGoogleCircle>
                                    </Link>
                                    <VscGithub></VscGithub>
                                </div>


                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default Login;