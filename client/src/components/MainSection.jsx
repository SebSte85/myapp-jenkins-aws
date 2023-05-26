import React from "react";
import Sidebar from "./Sidebar";
import ContentContainer from "./ContentContainer";
import Submenu from "./Submenu";
import { useSelector } from "react-redux";
import GettingStartedPage from "./GettingStartedPage";
import InstallationPage from "./InstallationPage";

const MainSection = () => {
  const sitename = useSelector((state) => state.navbar.page);
  return (
    <>
      <div className="max-w-8xl relative mx-auto flex justify-center sm:px-2 lg:px-8 xl:px-12">
        <Sidebar />
        <ContentContainer>
          {sitename === "Getting Started" ? (
            <GettingStartedPage />
          ) : sitename === "Installation" ? (
            <InstallationPage />
          ) : null}
        </ContentContainer>
        <Submenu />
      </div>
    </>
  );
};

export default MainSection;
