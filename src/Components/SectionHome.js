import React from "react";
import "../css/hero.css";

// import playIcon from "../img/playstore-icon-hero.png";

const SectionHero = () => {
  return (
    <>
      <section id="home" className="hero-section">
        <div className="m-auto px-5 pt-20 container grid grid-cols-2 grid-rows-4">
          <h2 className="hero-heading h-28 text-8xl">MindGinie</h2>
          <h3>Build an active & healthy mind</h3>
          <p>We are available in hindi & english</p>
          <p>Google img</p>
          {/* <img src={"/"} alt="Google Playstore icon" /> */}
          <p className="row-span-full col-start-2">Ginie img</p>
        </div>
      </section>
    </>
  );
};

export default SectionHero;
