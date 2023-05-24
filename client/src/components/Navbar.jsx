import React from "react";
import logo from "../images/Logo small.png";
import profil from "../images/Sebastian Stemmer 7 Profilbild.jpg";

const Navbar = () => {
  return (
    <>
      <div className="container sticky top-0 z-10 mx-auto flex h-14 items-center justify-between p-10 text-white backdrop-blur-lg">
        <img
          src={logo}
          alt="logo"
          className="h-8 w-8 rounded-full md:h-12 md:w-12"
        />
        <div className="text-lg font-bold lg:text-xl xl:text-2xl">
          Showing off my skills
        </div>
        <img
          src={profil}
          alt=""
          className="h-8 w-8 rounded-full md:h-12 md:w-12"
        />
      </div>
    </>
  );
};

export default Navbar;
