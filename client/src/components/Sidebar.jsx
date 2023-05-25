import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="hidden lg:relative lg:block lg:flex-none">
        <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden"></div>
        <div className="absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-slate-600 dark:block"></div>
        <div className="absolute bottom-0 right-0 top-28 hidden w-px bg-slate-600 dark:block"></div>
        <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16">
          <nav className="text-base lg:text-sm">
            <ul className="space-y-9">
              <li>
                <h2 className="font-display font-medium text-slate-900 dark:text-white">
                  Introduction
                </h2>
                <ul className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200">
                  <li className="relative">
                    <a
                      href=""
                      className="block w-full pl-3.5 font-semibold text-sky-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-sky-500"
                    >
                      Getting Started
                    </a>
                  </li>
                  <li className="relative">
                    <a
                      href=""
                      className="block w-full pl-3.5 text-slate-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:hidden before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                    >
                      Installation
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
