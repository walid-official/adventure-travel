import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import VideoBg from "../../assets/videobg1.jpg";
import AOS from 'aos';

import ReactModal from "../ReactModal/ReactModal";
import { useNavigate } from "react-router-dom";
;

const Video = () => {
const scrollToDetails = () => {
  const targetSection = document.getElementById("adventure-details");
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <div
      style={{
        backgroundImage: `url(${VideoBg})`,
        backgroundAttachment: "fixed",
      }}
      className="bg-center relative bg-cover my-20 w-full h-screen"
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with transparency
        }}
      >
        <div className="flex justify-center items-center h-screen">
        {/*   */}
          <div  data-aos="flip-up"  data-aos-mirror="false" data-aos-delay="8000" data-aos-once="false"  className="text-center text-white space-y-3">
            <ReactModal></ReactModal>

            <h2   className="font-bold text-3xl md:text-5xl w-[90%] md:w-[70%] mx-auto md:leading-tight">
            ARE YOU READY TO TRAVEL? <span className="italic font-thin  text-3xl md:text-4xl"> MAKE IT UNFORGETTABLE!</span>
            </h2>
            <p className="sm:w-[60%] w-[80%] mx-auto">
              Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
              nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia
              tenetur, aptent.
            </p>
            <button  onClick={scrollToDetails} className="border-white border hover:bg-white hover:text-black bg-transparent text-white font-semibold rounded-full px-7 py-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
