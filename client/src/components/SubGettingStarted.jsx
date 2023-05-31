import React from "react";

const SubGettingStarted = () => {
  return (
    <>
      <ol className="mt-4 space-y-3 text-sm " data-testid="sub-getting-started">
        <li>
          <h3>
            <a href="" className="text-sky-500">
              Who am I?
            </a>
          </h3>
          <ol className="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400">
            <li>
              <a
                href=""
                className="hover:text-slate-600 dark:hover:text-slate-300"
              >
                Just a dude
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-slate-600 dark:hover:text-slate-300"
              >
                Background
              </a>
            </li>
          </ol>
        </li>
      </ol>
    </>
  );
};

export default SubGettingStarted;
