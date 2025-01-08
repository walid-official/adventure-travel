import React, { useState } from "react";
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss'; // Ensure to import the modal video CSS

const ReactModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <React.Fragment>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="sGN7ef6Oer0" // Replace with your video ID
        onClose={() => setIsOpen(false)}
      />
        <div onClick={openModal} className="bg-[#3a78c9] animate__animated animate__pulse animate__infinite w-24 h-24 mx-auto shadow-2xl border-2 flex justify-center items-center cursor-pointer rounded-full text-white">
                <i class="fa-solid fa-play text-2xl"></i>
            </div>
    </React.Fragment>
  );
};

export default ReactModal;
