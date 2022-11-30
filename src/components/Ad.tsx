import React from "react";
import banner from "../assets/banner.png";

function Ad() {
  return (
    <div className="ad">
      <div className="ad-col-left">
        <h1>Crafted with detail for a great start</h1>
        <p>
          Computerra includes well designed components which always gives you
          best results as you wanted. Each content element has been crafted with
          terrific attention to details and offers multiple options. Combine the
          content elements to create unique websites in minutes. You are free to
          move the blocks between demos
        </p>
        <button className="ad-btn">Check Our Prices</button>
      </div>

      <div className="ad-banner">
        <img src={banner} alt="" />
      </div>
    </div>
  );
}

export default Ad;
