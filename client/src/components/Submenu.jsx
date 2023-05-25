import React from "react";

const Submenu = () => {
  return (
    <>
      <div className="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
        <nav className="w-56">
          <h2 className="font-display text-sm font-medium text-slate-900 dark:text-white">
            On this page
          </h2>
          <ol className="mt-4 space-y-3 text-sm">
            <li>
              <h3>
                <a href="" className="text-sky-500">
                  Quick start
                </a>
              </h3>
              <ol className="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400">
                <li>
                  <a
                    href=""
                    className="hover:text-slate-600 dark:hover:text-slate-300"
                  >
                    Installing dependencies
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="hover:text-slate-600 dark:hover:text-slate-300"
                  >
                    Configuring library
                  </a>
                </li>
              </ol>
            </li>
            <li></li>
            <li></li>
          </ol>
        </nav>
      </div>
    </>
  );
};

export default Submenu;
