import React from "react";

function HeroSection() {
  return (
    <div
      className="flex items-center justify-center gap-x-60 bg-gradient-to-br from-stone-800 via-brown to-white"
      style={{
        // background: "linear-gradient(180deg, #403530 100%, white 70%)",
        height: "60vh",
      }}
    >
      <div className="">
        <h1 className="text-4xl font-bold text-white p-4">
          Welcome to ROLLACAN
        </h1>
        <p className="text-lg text-white p-4">
          At <strong>ROLLACAN</strong>, we specialize in offering the finest timepieces  <br /> from some
         
          of the most prestigious brands in the world, including  <br /> Audemars Piguet
          and Rolex.  We believe that a watch is more than <br /> just a
          time-telling device – it is a reflection of the wearer's
          personality, <br /> style, and status. That's why we hand-select each of our
          
          watches to <br /> ensure that they meet the highest standards of quality,
          craftsmanship, <br/> and design.
        </p>
      </div>
      <div>
        <img src={require("./images/watch2.png")} />
      </div>
    </div>
  );
}

export default HeroSection;
