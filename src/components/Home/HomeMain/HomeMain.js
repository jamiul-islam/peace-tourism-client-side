import React from "react";
import { Carousel } from "react-bootstrap";
import "./HomeMain.css";
import image1 from "../../../image/banner-3.jpg";
import image2 from "../../../image/banner-2.jpg";
import image3 from "../../../image/banner-1.jpg";
import NavBar from "../../Shared/NavBar/NavBar";
import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
import { Link } from "react-router-dom";
const HomeMain = () => {
  const fade = useSpring({
    opacity: 1,
    transition: "1s",
    from: { opacity: 0 },
  });
  return (
    <div className="home-container">
      <div className="nav-bar-home">
        <div>
          <NavBar />
        </div>
      </div>
      <Carousel>
        <Carousel.Item interval={3000}>
          <div className="home-text d-flex  text-white align-items-center justify-content-center w-100 h-100">
            <animated.div className="p-3 pt-5" style={fade}>
              <h1>Fly with Us</h1>
              <Link to="/allservices">
                <button className="btn btn-lg btn-outline-success px-5 m-5">
                  Book Now
                </button>
              </Link>
            </animated.div>
          </div>
          <div className="">
            <img className="d-block image" src={image1} alt="First slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className="home-text d-flex  text-white align-items-center justify-content-center w-100 h-100">
            <animated.div className="p-3 pt-5" style={fade}>
              <h1>Best Price Available</h1>
              <p>
                we offer the lowest price with the highest customer experience
                rating
              </p>
              <button className="btn btn-lg btn-outline-success px-5 m-5">
                Book Now
              </button>
            </animated.div>
          </div>
          <div className="">
            <img className="d-block image" src={image2} alt="First slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="home-text d-flex  text-white align-items-center justify-content-center w-100 h-100">
            <animated.div className="p-3 pt-5" style={fade}>
              <h1>best customer experience</h1>
              <p>plan your next tour</p>
              <button className="btn btn-lg btn-outline-success px-5 m-5">
                Book Now
              </button>
            </animated.div>
          </div>
          <div className="">
            <img className="d-block image" src={image3} alt="First slide" />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeMain;
