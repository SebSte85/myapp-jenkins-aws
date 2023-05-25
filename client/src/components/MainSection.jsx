import React from "react";
import Sidebar from "./Sidebar";
import ContentContainer from "./ContentContainer";
import Submenu from "./Submenu";

const MainSection = () => {
  return (
    <>
      <div className="max-w-8xl relative mx-auto flex justify-center sm:px-2 lg:px-8 xl:px-12">
        <Sidebar />
        <ContentContainer />
        <Submenu />
      </div>
    </>
  );
};

export default MainSection;
