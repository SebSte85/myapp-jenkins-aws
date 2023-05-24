import React from "react";

const CodeblockFrame = ({ children }) => {
  return (
    <>
      <div className="codeblock-frame">
        <div className="codeblock-highlight-top"></div>
        <div className="pl-4 pt-4">
          <svg
            aria-hidden="true"
            viewBox="0 0 42 10"
            fill="none"
            className="h-2.5 w-auto stroke-slate-500/80"
          >
            <circle cx="5" cy="5" r="4.5"></circle>
            <circle cx="21" cy="5" r="4.5"></circle>
            <circle cx="37" cy="5" r="4.5"></circle>
          </svg>
          <div className="mt-4 flex space-x-2 text-xs">
            <div className="flex h-6 rounded-full bg-gradient-to-r from-sky-400/30 via-sky-400 to-sky-400/30 p-px font-medium text-sky-300">
              <div className="flex items-center rounded-full bg-slate-800 px-2.5">
                tailwind.config.js
              </div>
            </div>
            <div className="flex h-6 rounded-full text-slate-300">
              <div className="flex items-center rounded-full px-2.5">
                Navbar.jsx
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-start px-1 text-sm">{children}</div>
        </div>
        <div className="codeblock-highlight-bottom"></div>
      </div>
    </>
  );
};

export default CodeblockFrame;
