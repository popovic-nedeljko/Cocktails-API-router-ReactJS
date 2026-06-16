import React from "react";
import heroImg from "../img/kokteli.webp";

const About = () => {
  return (
    <section className="about-hero">
      <img src={heroImg} alt="" className="hero-bg-img" aria-hidden="true" />
      <div className="hero-content">
        <span className="hero-eyebrow">Our Story</span>
        <div className="ornament">
          <span></span>
        </div>
        <div className="search-hero-text">
          <h1>
            About <em>CocktailDB</em>
          </h1>
        </div>
        <div className="ornament">
          <span></span>
        </div>
        <p className="about-text">
          Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut.
          Carrot cake caramels pie sweet apple pie tiramisu carrot cake.
          Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon
          drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton
          candy gummi bears chocolate bar cake cookie. Cupcake muffin danish
          muffin cookie gummies.
        </p>
      </div>
    </section>
  );
};

export default About;
