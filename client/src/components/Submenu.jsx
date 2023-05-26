import React from "react";
import { useSelector } from "react-redux";
import SubGettingStarted from "./SubGettingStarted";
import SubInstallation from "./SubInstallation";

const Submenu = () => {
  const sitename = useSelector((state) => state.navbar.page);
  return (
    <>
      <div className="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
        <nav className="w-56">
          <h2 className="font-display text-sm font-medium text-slate-900 dark:text-white">
            On this page
          </h2>
          {sitename === "Getting Started" ? (
            <SubGettingStarted />
          ) : sitename === "Installation" ? (
            <SubInstallation />
          ) : null}
        </nav>
      </div>
    </>
  );
};

export default Submenu;
