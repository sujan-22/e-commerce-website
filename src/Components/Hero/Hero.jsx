import React from "react";
import "./Hero.css";
import { MdWavingHand } from "react-icons/md";
import { BsArrowRightCircleFill } from "react-icons/bs";
import HeroModel from "../Assets/hero_model.png";

const Hero = () => {
  return (
    <div className="hero">
      <div class="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div class="hero-hand-icon">
            <p>new</p>
            <MdWavingHand className="img" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div class="hero-latest-btn">
          <div>Latest Collection</div>
          <BsArrowRightCircleFill style={{ fontSize: "25px" }} />
        </div>
      </div>
      <div class="hero-right">
        <img src={HeroModel} alt="" />
      </div>
    </div>
  );
};

export default Hero;
