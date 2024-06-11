import React, { useState } from "react";
import "./Form.css";
import LogoImage from "./asset/EZ Works Blue.png";
import FirstCard from "./asset/Research@1.png";
import SecondCard from "./asset/Research@4x.png";
import ThirdCard from "./asset/Research@3.png";
import FourtCard from "./asset/Research@4.png";
import Fifthcard from "./asset/Research@5.png";
import SixthCard from "./asset/Research@6.png";

const FromComponent = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!email) {
      setError("Email is required");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Invalid email format");
      return;
    }

    try {
      const response = await fetch("http://34.225.132.160:8002/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 422) {
        setError("Email ends with @ez.works is not allowed");
      } else if (response.status === 200) {
        setMessage("Form Submitted");
      } else {
        setError("Something went wrong, please try again");
      }
    } catch (error) {
      setError("Failed to submit the form");
    }
  };

  return (
    <div class="container">
      <div class="column left-column">
        <div class="logo-container">
          <img src={LogoImage} alt="logo-img" class="left-column-logo" />
          <h1>A Suite Of Business Support Services</h1>
        </div>
        {/* <h1>Suite Of Business Support Services</h1> */}
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed
        </h3>
        <form class="input-group" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <div className="error"><h3>{error}</h3></div>}
          {message && <div className="message"><h3>{message}</h3></div>}
          <button type="submit">Contact Me</button>
        </form>
      </div>
      <div class="column right-column">
        <div class="card-container">
          <div class="card">
            <div class="card-heading">
              <div class="card-logo">
                <img src={FirstCard} alt="firstcard"/>
              </div>
              <div class="card-title">Presentation Design</div>
            </div>
            <div class="card-body">
              Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
            </div>
          </div>
          <div class="card">
            <div class="card-heading">
              <div class="card-logo">
                <img src={SecondCard} alt="secondcard"/>
              </div>
              <div class="card-title">Audio - Visual Production</div>
            </div>
            <div class="card-body">
              Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
            </div>
          </div>
          <div class="card">
            <div class="card-heading">
              <div class="card-logo">
                <img src={ThirdCard} alt="thirdcard"/>
              </div>
              <div class="card-title">Translation Services</div>
            </div>
            <div class="card-body">
              Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
            </div>
          </div>
          <div class="card">
            <div class="card-heading">
              <div class="card-logo">
                <img src={FourtCard} alt="fourthcard"/>
              </div>
              <div class="card-title">Graphic Design</div>
            </div>
            <div class="card-body">
              Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
            </div>
          </div>
          <div class="card">
            <div class="card-heading">
              <div class="card-logo">
                <img src={Fifthcard} alt="fifthcard"  />
              </div>
              <div class="card-title">Research & Analytics</div>
            </div>
            <div class="card-body">
              Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
            </div>
          </div>
          <div class="card">
            <div class="card-heading">
              <div class="card-logo">
                <img src={SixthCard} alt="sixthcard" />
              </div>
              <div class="card-title">Data Processing</div>
            </div>
            <div class="card-body">
              Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FromComponent;