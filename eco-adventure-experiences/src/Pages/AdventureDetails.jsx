import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useLoaderData, useParams } from "react-router-dom";
import Modal from "../components/Modal/Modal";
import cardImage from "../assets/videobg2.jpg";
const AdventureDetails = () => {
  const details = useLoaderData();
  const { Details } = useParams();
  const [adventures, setAdventures] = useState([]);

  useEffect(() => {
    const adventureFind = details.find((adventure) => adventure.id == Details);
    console.log(adventureFind);
    setAdventures(adventureFind);
  }, [adventures, Details]);

  useEffect(() => {
    document.title = `Eco-Adventure - AdventureDetails`;
  }, []);

  const handleMeetExpert = () => {
    const date = new Date();
    const hours = date.getHours();
    if (hours >= 10 && hours <= 20) {
      window.open("https://meet.google.com/", "_blank");
    } else {
      document.getElementById("my_modal_1").showModal();
    }
  };

  const {
    id,
    image,
    adventureTitle,
    shortDescription,
    ecoFriendlyFeatures = [],
    adventureCost,
    bookingAvailability,
    location,
    duration,
    adventureLevel,
    includedItems = [],
    maxGroupSize,
    specialInstructions = [],
  } = adventures;

  return (
    <div className="">
      <Navbar></Navbar>
      <div
        className="hero py-20"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              JOURNEY TO EXPLORE WORLD
            </h1>
            <p className="mb-5">
              Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus? Suscipit
              class corporis nostra rem quos voluptatibus habitant? Fames,
              vivamus minim nemo enim, gravida lobortis quasi, eum.
            </p>
          </div>
        </div>
      </div>
      <div className="my-8 w-11/12 mx-auto md:flex rounded-lg backdrop-blur-2xl bg-white/30 p-5 md:p-10 shadow-2xl">
        <div
          className="bg-white p-6 w-full overlay-container"
        >
          <h2 className="text-2xl font-bold">{adventureTitle}</h2>
          <p className="py-2">{shortDescription}</p>
          <div className="">
            <p className="font-semibold text-xl">Features</p>
            <ul className="space-y-1 list-disc pl-4 py-3">
              {ecoFriendlyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <div className="">
              <p className="font-semibold text-xl">Items</p>
              <ul className="space-y-1 list-disc pl-4 py-3">
                {includedItems.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="">
              <p className="font-semibold text-xl">Instruction</p>
              <ul className="space-y-1 list-disc pl-4 py-3">
                {specialInstructions.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#568bd0] p-6 text-white w-full">
          <div className="py-3">
            <div className="">
              Adventure-Level:{" "}
              <span className="font-bold">{adventureLevel}</span>
            </div>
            <div className="my-3">
              Max-Group-Size: <span className="font-bold">{maxGroupSize}</span>
            </div>
            <div className="my-3">
              Adventure-Cost: <span className="font-bold">{adventureCost}</span>
            </div>
            <div className="my-3">
              Location: <span className="font-bold">{location}</span>
            </div>
            <div className="my-3">
              Duration: <span className="font-bold">{duration}</span>
            </div>
            <div className="my-3">
              Booking: <span className="font-bold">{bookingAvailability}</span>
            </div>
          </div>
          <div className="py-6">
            <button
              onClick={handleMeetExpert}
              className="btn bg-white font-bold shadow-2xl rounded-full"
            >
              Talk With Expert
            </button>
          </div>
        </div>
      </div>
      <Modal></Modal>
    </div>
  );
};

export default AdventureDetails;
