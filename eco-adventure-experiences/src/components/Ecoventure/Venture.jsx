import React from "react";
import { NavLink } from "react-router-dom";

const Venture = ({ ecoVenture }) => {
  const {
    id,
    image,
    adventureTitle,
    ecoFriendlyFeatures = [],
  } = ecoVenture;
  return (
  
      <div className="card shadow-xl">
        <div className="relative overflow-hidden duration-500 rounded-lg">
        <figure className="hover:scale-110 duration-700 overflow-hidden">
            <img src={image} alt="Adventure" />
          </figure>
        </div>
         
        <div className="card-body">
          <h2 className="card-title">
            {adventureTitle}
          </h2>
          <div className="">
            <p className="font-bold text-xl">Features</p>
            <ul className="space-y-1 list-disc pl-4 py-3">
              {ecoFriendlyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="card-actions justify-start">
            <NavLink to={`/AdventureDetails/${id}`}><button className="btn">Explore Now</button></NavLink>
          </div>
        </div>
      </div>
  );
};

export default Venture;
