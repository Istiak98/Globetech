import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div class="container">
      <section className="banner">
        <div className="banner-left">
          <div>
            <h1>
              <span className="welcome-color">Welcome to</span> <br/>
              <span className="highlight text-start">Globetech</span>
            </h1>
            <p className="welcome-color text-start">
              We are committed to deliver <span className="highlight">best IT services</span>. Our Consultants have
              experience in working with clients. We have extensive experience
              in the software application space and also offer a broad range and
              depth of technology.
            </p>
            <button className="banner-btn m-3">Support us</button> 
            <button className="banner-btn1">Our Mission</button>
          </div>
        </div>
        <div className="banner-right">
          <img src="./img/shoes.webp" alt="shoes" />
        </div>
      </section>
    </div>
  );
};

export default Banner;
