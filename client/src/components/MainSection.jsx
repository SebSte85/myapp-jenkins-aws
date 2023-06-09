import React from "react";
import Sidebar from "./Sidebar";
import ReactContent from "./ReactContent";
import ContentContainer from "./ContentContainer";
import Submenu from "./Submenu";
import ReduxContent from "./ReduxContent";
import TestingContent from "./TestingContent";
import { useSelector } from "react-redux";
import WhoAmIPage from "./WhoAmIPage";
import Overview from "./Overview";
import TailwindContent from "./TailwindContent";

const MainSection = () => {
  const sitename = useSelector((state) => state.navbar.page);
  return (
    <>
      <div className="max-w-8xl relative mx-auto flex justify-center sm:px-2 lg:px-8 xl:px-12">
        <Sidebar />
        <ContentContainer>
          {sitename === "Who am I" ? (
            <WhoAmIPage />
          ) : sitename === "Overview" ? (
            <Overview />
          ) : sitename === "React" ? (
            <ReactContent />
          ) : sitename === "Tailwind" ? (
            <TailwindContent />
          ) : sitename === "Redux" ? (
            <ReduxContent />
          ) : sitename === "Testing" ? (
            <TestingContent />
          ) : null}
        </ContentContainer>
        <Submenu />
      </div>
    </>
  );
};

export default MainSection;
