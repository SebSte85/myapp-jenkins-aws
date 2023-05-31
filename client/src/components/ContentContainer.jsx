import React from "react";

const ContentContainer = ({ children }) => {
  return (
    <>
      <div className="w-full min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
        {children}
      </div>
    </>
  );
};

export default ContentContainer;
