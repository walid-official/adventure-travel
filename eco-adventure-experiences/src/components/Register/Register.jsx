import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, signInWithGoogle, updateUserProfile, regex } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  useEffect(() => {
    document.title = `Eco-Adventure - ${
      location.pathname.replace("/Form/", "") || ""
    }`;
  }, []);

  const handleRegisterForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);

    setErrorMessage({});

    if (password.length < 6) {
      setErrorMessage((prev) => ({
        ...prev,
        password: "You must commit 6 characters",
      }));
      return;
    }
    if (!regex.test(password)) {
      setErrorMessage((prev) => ({
        ...prev,
        password:
          "You must commit one uppercase, one lowercase, and min 6 characters",
      }));
      return;
    }

    createUser(email, password)
      .then((result) => {
        navigate("/");
        toast.success("Successfully Registered Your Account");
        const profile = {
          displayName: name,
          photoURL: photo,
        };
        updateUserProfile(profile)
          .then(() => {
            // Update the user state in the context immediately
            setUser({
              ...result.user,
              displayName: name,
              photoURL: photo,
            });
            toast.success("Successfully updated your profile");
            navigate("/");
          })
          .catch((error) => {
            console.error("Error updating profile:", error);
            setErrorMessage((prev) => ({ ...prev, profile: error.message }));
          });
      })
      .catch((error) => {
        console.error("Error registering user:", error.message);
        setErrorMessage((prev) => ({ ...prev, register: error.message }));
        toast.error("Registration failed");
      });
  };

  const handleRegisterGoogleLogin = () => {
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
    <div>
      <div className="w-11/12 mx-auto py-44">
        <div className="">
          <div className="md:flex">
            <div className="card w-full px-4 rounded-none flex flex-col justify-center items-center py-8 bg-white shadow-2xl">
              <h1 className="text-3xl sm:text-4xl text-center font-bold">
                Join the Eco-Adventurer's Community
              </h1>
              <p className="p-6 text-center font-semibold">
                Have you an Account?
              </p>
              <NavLink to="/Form/Login" className="btn">
                Login Now
              </NavLink>
            </div>
            <div className="card  rounded-none backdrop-blur-sm bg-white/30 w-full py-8  shadow-2xl">
              <form onSubmit={handleRegisterForm} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="bg-transparent border px-7 py-3"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    name="photo"
                    type="text"
                    placeholder="photo url"
                    className="bg-transparent border px-7 py-3"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="bg-transparent border px-7 py-3"
                    required
                  />
                  {errorMessage.register && (
                    <label className="label">
                      <span className="label-text text-red-500">
                        {errorMessage.register}
                      </span>
                    </label>
                  )}
                </div>
                <div className="form-control relative">
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
                    className=" absolute right-3 top-[54px]"
                  >
                    {showPassword ? (
                      <i className="text-xl">
                        <FaEyeSlash></FaEyeSlash>
                      </i>
                    ) : (
                      <i className="text-xl">
                        <FaEye></FaEye>
                      </i>
                    )}
                  </div>
                </div>
                <div className="">
                  {errorMessage.password && (
                    <label className="label">
                      <span className="label-text text-red-500">
                        {errorMessage.password}
                      </span>
                    </label>
                  )}
                </div>
                <div className="form-control mt-3">
                  <button className="bg-transparent hover:bg-white duration-500 hover:text-gray-600 text-black font-semibold border px-7 py-3">
                    Register
                  </button>
                  <div className="flex justify-center items-center py-2 gap-2">
                    <div className="bg-black w-10 h-1"></div>
                    <h2 className="text-xl font-bold">OR</h2>
                    <div className="bg-black w-10 h-1"></div>
                  </div>
                </div>
              </form>
              <div className="px-8">
                <button
                  onClick={handleRegisterGoogleLogin}
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
    </div>
  );
};

export default Register;
