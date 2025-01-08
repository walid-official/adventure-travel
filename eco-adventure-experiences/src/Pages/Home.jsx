import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import EcoVenture from "../components/Ecoventure/EcoVenture";
import { useLoaderData, useLocation } from "react-router-dom";
import Video from "../components/Video/Video";
import Gallery from "../components/Gallary/Gallery";

const Home = () => {
    const ecoVentures = useLoaderData();

    const location = useLocation();
    useEffect(() => {
      document.title = `Eco-Adventure-${location.pathname.replace("/", "") || "Home"}`
     },[]);

  return (
    <div>
      <Hero></Hero>
      <div className="py-8">
        <div className="text-center py-10">
          <h2 className="font-bold text-4xl">Eco-Adventure Experiences</h2>
          <p className="py-3">
            "Eco-Adventure Experiences: sustainable, nature-focused adventures
            promoting conservation and responsible travel."
          </p>
        </div>
        <div id="adventure-details" className="w-11/12 mx-auto">
         <EcoVenture ecoVentures={ecoVentures}></EcoVenture>
        </div>
        <div className="">
          <Video></Video>
        </div>
        <div className="w-11/12 mx-auto">
          <Gallery></Gallery>
        </div>
      </div>
    </div>
  );
};

export default Home;
