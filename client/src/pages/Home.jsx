import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MainSection from "../components/MainSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container sticky top-[4.5rem] mx-auto ">
        <Hero />
        <MainSection />
      </div>
    </>
  );
};

export default Home;
