import React from "react";
import banner from "../assets/banner.png";

function Ad() {
  return (
    <div className="ad">
      <div className="ad-col-left">
        <h1>Lorem, ipsum dolor.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
          delectus, aut voluptates ducimus non illo blanditiis omnis eum ex unde
          reprehenderit, consectetur totam, sunt atque. Voluptates, vero
          nesciunt repellat a pariatur sunt asperiores quae cum laboriosam sequi
          quam reiciendis minus illum placeat doloribus excepturi ipsum
          voluptatum aperiam assumenda tenetur quos!
        </p>
      </div>

      <div className="ad-banner">
        <img src={banner} alt="" />
      </div>
    </div>
  );
}

export default Ad;
