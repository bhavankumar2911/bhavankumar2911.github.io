import React from "react";
import Name from "./Name";
import About from "./About";
import Photo from "./Photo";

const Intro = () => {
  return (
    <section className="md:flex md:items-center md:justify-between md:bg-white md:mb-10">
      {/* top */}
      <div className="md:flex-1 md:mr-10">
        <div className="md:hidden">
          <Name />
        </div>
        <div className="hidden md:block">
          <About />
        </div>
      </div>
      {/* bottom */}
      <div>
        <Photo />
        <div className="md:hidden">
          <About />
        </div>
      </div>
    </section>
  );
};

export default Intro;
