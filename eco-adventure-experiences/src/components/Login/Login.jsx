import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const {
    signInUser,
    signInWithGoogle,
    regex,
    emailRef,
    emailValue1,
    setEmailValue1,
    setEmailValue2,
  } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setErrorMessage("");

    if (password.length < 6) {
      setErrorMessage("you must commit 6 characters");
      return;
    }
    if (!regex.test(password)) {
      setErrorMessage(
        "You Must Commit one upperCase one LowerCase and min 6 characters"
      );
      return;
    }

    signInUser(email, password)
      .then((result) => {
        console.log(result);
        toast.success("Successfully logged in your Account");
        navigate(location?.state ? location.state : "/");
      })

      .catch((error) => {
        console.log(error.message);
        setErrorMessage(error.message);
        toast.error("Something is Wrong");
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error("Navigation prevented due to sign-in error:", error);
        toast.error("Something is Wrong");
      });
  };

  return (
    <div className="w-11/12 mx-auto py-44">
      <div className="">
        <div className="md:flex">
          <div className="card w-full rounded-none flex flex-col justify-center items-center py-8 bg-white shadow-2xl">
            <h1 className="text-4xl text-center font-bold">
              Login to Your Adventure
            </h1>
            <p className="p-6 text-center font-semibold">
              Don't Have an Account
            </p>
            <NavLink to="/Form/Register" className="btn">
              Register Now
            </NavLink>
          </div>
          <div className="card  rounded-none backdrop-blur-sm bg-white/30 w-full py-8  shadow-2xl">
            <form onSubmit={handleLoginForm} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onChange={(e) => {
                    setEmailValue1(e.target.value);
                    setEmailValue2(e.target.value);
                  }}
                  value={emailValue1}
                  ref={emailRef}
                  name="email"
                  type="email"
                  placeholder="email"
                  className="bg-transparent border px-7 py-3"
                  required
                />
                {/* {
                  errorMessage && <label className="label">
                  <span className="label-text">{errorMessage}</span>
                </label>
                } */}
              </div>
              <div className="form-control py-2 relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="bg-transparent border px-7 py-3"
                  required
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className=" absolute right-3 top-[58px]"
                >
                  {showPassword ? <i className="text-xl"><FaEyeSlash></FaEyeSlash></i>
                    :<i className="text-xl"><FaEye></FaEye></i> }
                </div>
                <div className="">
                  {errorMessage ? (
                    <p className="text-red-500">Invalid Password</p>
                  ) : (
                    ""
                  )}
                </div>
                <label className="label">
                  <Link
                    to="/Form/Forget"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="bg-transparent hover:bg-white duration-500 hover:text-gray-600 text-black font-semibold border px-7 py-3">
                  Login
                </button>
              </div>
              <div className="flex justify-center items-center py-2 gap-2">
                <div className="bg-black w-10 h-1"></div>
                <h2 className="text-xl font-bold">OR</h2>
                <div className="bg-black w-10 h-1"></div>
              </div>
            </form>
            <div className="px-6">
              <button
                onClick={handleGoogleLogin}
                className="flex gap-2 sm:gap-4 items-center justify-center  bg-transparent w-full hover:bg-white duration-500 hover:text-gray-600 text-black font-semibold border px-3 sm:px-7 py-3"
              >
                <i class="fa-brands fa-google text-xl"></i>
                Continue With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
