import React, { useContext, useEffect } from "react";
import bg1 from "../assets/footer1.jpg";
import updateBg from "../assets/profile2-bg.jpg";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";


const UpdateProfile = () => {
const {updateUserProfile} = useContext(AuthContext);
const navigate = useNavigate();
const location = useLocation();
    useEffect(() => {
      document.title = `Eco-Adventure-${location.pathname.replace("/", "") || ""}`
     },[]);




 const handleUserProfile = (e) => {
   e.preventDefault();
   const name = e.target.name.value;
   const photo = e.target.photo.value;

   const profileInfo = {
    displayName: name,
    photoURL: photo
   }
   updateUserProfile(profileInfo)
   .then(() => {
     toast.success("Successfully updated your Profile")
     navigate("/myProfile")

   }).catch(() => {
    toast.error("Profile is Not Updated")
   })

 }

  return (
    <div 
     className="bg-[#0b1e32] flex  justify-center py-40">
      <div
        style={{
          position: "relative",
          backgroundImage: `url(${updateBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="card w-11/12 mx-auto max-w-sm shrink-0 shadow-2xl"
      >
        <form onSubmit={handleUserProfile} className="card-body">
          <div className="form-control">
            <label className="label font-semibold">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold">
              <span className="label-text text-white">PhotURL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="PhotoURL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-slate-800 text-white border-none">Update Your Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
