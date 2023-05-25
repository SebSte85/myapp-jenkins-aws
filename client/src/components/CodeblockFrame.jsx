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
          {children}
        </div>
        <div className="codeblock-highlight-bottom"></div>
      </div>
    </>
  );
};

export default CodeblockFrame;
