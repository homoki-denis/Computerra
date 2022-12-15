import React from "react";
import { Typography } from "@mui/material";

function Email() {
  return (
    <div className="email-container">
      <div className="email-title">
        <h2>Get Started With Us!</h2>

        <p>
          Utilize easy drag-and-drop tools to adapt the framework to your small
          business processes.
        </p>
      </div>
      <div className="email-strategy">
        <div className="email-item">
          <h1>1</h1>
          <h3>Developing an effective strategy</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            assumenda unde quidem maxime laudantium molestiae possimus placeat
            distinctio optio. Magnam?
          </p>
        </div>
        <div className="email-item">
          <h1>2</h1>
          <h3>Software development process</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            assumenda unde quidem maxime laudantium molestiae possimus placeat
            distinctio optio. Magnam?
          </p>
        </div>
        <div className="email-item">
          <h1>3</h1>
          <h3>Developing an effective strategy</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            assumenda unde quidem maxime laudantium molestiae possimus placeat
            distinctio optio. Magnam?
          </p>
        </div>
      </div>
      <div className="email-enter">
        <input type="email" placeholder="Enter Your Email" />
        <button>Send</button>
      </div>
    </div>
  );
}

export default Email;
