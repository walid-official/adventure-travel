import React, { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import ecoProfile from "../../assets/footer1.jpg";
import { NavLink, useLocation } from "react-router-dom";
const Profile = () => {
  const { user } = useContext(AuthContext);

  const location = useLocation();
  useEffect(() => {
    document.title = `Eco-Adventure-${location.pathname.replace("/", "") || ""}`
   },[]);


  return (
   
    <div
      className="py-40 bg-[#0b1e32]"
    >

      <div  className="sm:w-[50%] w-[80%] mx-auto">
      <div  style={{
      position: "relative",
      backgroundImage: `url(${ecoProfile})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "100%",
    }} className="card text-white shadow-xl">
        <div className="card-body text-center">
          <div className="w-24 h-24 mx-auto">
            <img src={user?.photoURL} className="w-full h-full object-cover rounded-full" alt="" />
          </div>
          <h2 className="text-center text-2xl py-2 font-bold">Welcome {user?.displayName} !</h2>
          <p className="font-semibold py-1">{user?.email}</p>
          <div className="card-actions justify-center">
            <NavLink to="/Update"><button className="btn">Update Profile</button></NavLink>
           
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Profile;
