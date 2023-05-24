import React from "react";
import logo from "../images/Logo small.png";
import profil from "../images/Sebastian Stemmer 7 Profilbild.jpg";

const Navbar = () => {
  return (
    <>
      <div>
        <div className="container mx-auto flex h-14 items-center justify-between p-8 text-white">
          <img src={logo} alt="logo" className="h-12 w-12 rounded-full" />
          <div className="text-lg font-bold">Showing off my skills</div>
          <img src={profil} alt="" className="h-12 w-12 rounded-full" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
