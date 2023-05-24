import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Hero />
      </div>
    </>
  );
};

export default Home;
