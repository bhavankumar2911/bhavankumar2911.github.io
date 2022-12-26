import React from "react";
import Name from "./Name";

const About = ({ align }) => {
  return (
    <div className={`section-card md:m-0`}>
      <div className="hidden md:block">
        <Name />
      </div>
      <div className="md:hidden">
        <h2 className="section-title">About</h2>
      </div>
      <p className="section-text md:mb-5">
        I'm a self-taught full-stack web developer specializing in the MERN
        stack. I write optimized code that makes the web app faster and more
        scalable.
      </p>
    </div>
  );
};

export default About;
