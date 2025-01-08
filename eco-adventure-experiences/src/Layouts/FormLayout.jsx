import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Login from "../components/Login/Login";
import Footer from "../components/Footer/Footer";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Register from "../components/Register/Register";
import ForgetPassword from "../components/ForgetPassword/ForgetPassword";

const FormLayout = () => {
  
  const location = useLocation();
  useEffect(() => {
    document.title = `Eco-Adventure - ${location.pathname.replace("/Form/", "") || ""}`
   },[]);

    const {page} = useParams();
  return (
    <div className="">
      <div
        style={{
          position: "relative",
          backgroundImage: `url(https://img.freepik.com/free-photo/profile-serious-male-scientist-with-stubble-taking-picture-nature-his-black-generic-digital-tablet-while-working-scientific-research-jungle_273609-6426.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Black overlay with transparency
          }}
        ></div>
        <Navbar />
        <div className="">
            {page === "Login" &&  <Login></Login>}
            {page === "Register" &&  <Register></Register>}
            {page === "Forget" && <ForgetPassword></ForgetPassword>}
        </div>
        <div className="">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default FormLayout;
