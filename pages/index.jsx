import React from "react";
import Contact from "../components/Contact";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <main className={`min-h-screen py-10 ${styles.background}`}>
      <div className="wrapper">
        {/* intro section */}
        <Intro />
        {/* projects section */}
        <Projects />
        <div className="sm:flex sm:justify-between">
          {/* skills */}
          <Skills />
          {/* contact */}
          <Contact />
        </div>
      </div>
    </main>
  );
};

export default Home;
