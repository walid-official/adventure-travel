import React, { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const ForgetPassword = () => {
const {userForgetPassword,emailRef,emailValue2,setEmailValue2,setEmailValue1} = useContext(AuthContext);
useEffect(()=> {
  document.title = "Eco-Adventure - ForgetPassword"
},[])
const handleForgetPassword = (e) => {
e.preventDefault();
 const email = emailRef.current.value;
 if(!email){
   alert("please Provide a valid Email Address")
 }else{
   userForgetPassword(email)
   .then(() => {
    window.location.href = 'https://mail.google.com/';
   }).catch((error) => {
    console.error("Error sending reset email:", error);
   })
 }
}


  return (
    <div className="py-56">
      <div className="card md:w-[50%] mx-auto rounded-none backdrop-blur-sm bg-white/30 w-full py-8  shadow-2xl">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input 
              ref={emailRef}
              value={emailValue2}
              onChange={(e) => {
                setEmailValue1(e.target.value);
                setEmailValue2(e.target.value); 
              }}
              name="email"
              type="email"
              placeholder="email"
              className="bg-transparent border px-7 py-3"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button onClick={handleForgetPassword} className="bg-transparent hover:bg-white duration-500 hover:text-gray-600 text-black font-semibold border px-7 py-3">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
