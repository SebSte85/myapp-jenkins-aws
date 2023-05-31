import React from "react";

const SubGettingStarted = () => {
  return (
    <>
      <ol className="mt-4 space-y-3 text-sm " data-testid="sub-getting-started">
        <li>
          <h3>
            <button className="text-sky-500">Who am I?</button>
          </h3>
          <ol className="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400">
            <li>
              <button className="hover:text-slate-600 dark:hover:text-slate-300">
                Just a dude
              </button>
            </li>
            <li>
              <button className="hover:text-slate-600 dark:hover:text-slate-300">
                Background
              </button>
            </li>
          </ol>
        </li>
      </ol>
    </>
  );
};

export default SubGettingStarted;
