import React from "react";
// import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="section-hero">
      <div className="hero-title">
        <h1 className="heading-primary">
          Welcome to the heart and soul of our Pet Creator Project!
        </h1>
      </div>
      <div className="hero">
        <div className="hero-img-box">
          <img
            src="./img/pets/quetzal.jpg"
            className="hero-img"
            alt="quetzalcoatl pet"
          ></img>
        </div>
        <div className="hero-text-box">
          <p className="hero-description">
            Welcome to the About page of our Imaginary Pet Creator project.
            Here, we aim to provide a platform where users can create and
            interact with virtual pets in a seamless and innovative way. Using
            modern microservices architecture and smooth API integrations, we
            offer a variety of digital companions, from cats to dragons. Whether
            you're a developer, a pet enthusiast, or simply someone who loves to
            explore creative possibilities, you'll find something here. Join us
            as we blend technology and imagination to redefine the pet
            simulation experience.
          </p>
          <a href="#how" className="btn btn--outline">
            Learn More &darr;
          </a>
          <div className="exclamation">
            <p className="claim-text">
              <span>Unleash Your Imagination</span> with Imaginary Pet Creator –
              Where Pixels Become Companions.
            </p>
            <p className="claim-text">
              The Tutorial below takes about 5 minutes to read!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
