import React, { useEffect } from "react";
import traveler1 from "../../assets/traveler1jpg.jpg";
import traveler2 from "../../assets/traveler2.jpg";
import traveler3 from "../../assets/traveler3.jpg";
import traveler4 from "../../assets/traveler4.jpg";



const Gallery = () => {

  return (
    <div>
      <div className="pb-6 text-center">
        <div className="flex items-center gap-3 justify-center">
          <div className="bg-black w-10 h-1"></div>
          <div className=""> <h3>PHOTO GALLERY</h3></div>
         
          <div className="bg-black w-10 h-1"></div>
        </div>
        
        <h2 className="font-bold  text-4xl md:text-5xl py-3">PHOTO'S FROM TRAVELLERS</h2>
        <p className="w-[60%] mx-auto">
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo,
          rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur,
          aptent.
        </p>
      </div>
      <div className="">
      {/* */}
        <div  data-aos="zoom-in" data-aos-mirror="false"  data-aos-once="false" className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
          <img  className="rounded-2xl" src={traveler2} alt="" />
          <img  className="rounded-2xl" src={traveler1} alt="" />
          <img  className="rounded-2xl" src={traveler3} alt="" />
          <img  className="rounded-2xl" src={traveler4} alt="" />
          <div  >
            <img className="rounded-2xl" src="https://img.freepik.com/premium-photo/women-asians-travel-relax-holiday-sit-cliff-moutain_36074-582.jpg?ga=GA1.1.1662778785.1716400131&semt=ais_hybrid" alt="" />
          </div>
          <img className="rounded-2xl" src="https://img.freepik.com/premium-photo/rear-view-couple-walking-field-against-sky_1048944-6645151.jpg?ga=GA1.1.1662778785.1716400131&semt=ais_hybrid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
