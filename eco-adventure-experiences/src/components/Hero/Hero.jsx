import React from "react";
import HeroSlider, { Slide, Nav } from "hero-slider";
import 'hero-slider/dist/index.css';

// Images
const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

const Hero = () => {
  return (
    <div className="hero-container">
      <HeroSlider
        slidingAnimation="left_to_right"
        orientation="horizontal"
        initialSlide={1}
        onBeforeChange={(previousSlide, nextSlide) =>
          console.log("onBeforeChange", previousSlide, nextSlide)
        }
        onChange={(nextSlide) => console.log("onChange", nextSlide)}
        onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.33)",
        }}
        settings={{
          slidingDuration: 250,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButtons: true,
          autoplayDuration: 5000,
          height: "100vh",
        }}
      >
        <Slide
          background={{
            backgroundImage: `url(${giauPass})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div 
           className=""
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              textAlign: "center",
              fontSize: "2rem",
              padding: "0 20px",
              zIndex: 10,
            }}
          >
            <h1 className="animate__animated animate__backInDown font-bold md:text-5xl mb-3">Giau Pass</h1>
            <p className="animate__animated animate__backInUp" style={{ fontSize: "1.2rem" }}>Experience the breathtaking views of the Dolomites</p>
          </div>
        </Slide>
        
        <Slide
          background={{
            backgroundImage: `url(${bogliasco})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div 
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              textAlign: "center",
              fontSize: "2rem",
              padding: "0 20px",
              zIndex: 10,
            }}
          >
            <h1 className="animate__animated animate__backInDown text-5xl mb-3">Bogliasco</h1>
            <p className="animate__animated animate__backInDown" style={{ fontSize: "1.2rem" }}>A coastal gem with stunning views</p>
          </div>
        </Slide>
        
        <Slide
          background={{
            backgroundImage: `url(${countyClare})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div 
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              textAlign: "center",
              fontSize: "2rem",
              padding: "0 20px",
              zIndex: 10,
            }}
          >
            <h1 className="font-bold" style={{ fontSize: "3rem", marginBottom: "10px" }}>County Clare</h1>
            <p style={{ fontSize: "1.2rem" }}>Rich in history and natural beauty</p>
          </div>
        </Slide>
        
        <Slide
          background={{
            backgroundImage: `url(${craterRock})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div 
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              textAlign: "center",
              fontSize: "2rem",
              padding: "0 20px",
              zIndex: 10,
            }}
          >
            <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>Crater Rock</h1>
            <p style={{ fontSize: "1.2rem" }}>Explore the rugged terrain of this volcanic region</p>
          </div>
        </Slide>

        <Nav />
      </HeroSlider>
    </div>
  );
};

export default Hero;
