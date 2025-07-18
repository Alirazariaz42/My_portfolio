import React from "react";

export const AnimatedBorderCard = () => {
  return (
    <div className="relative h-72 w-80">
      <div className="absolute top-0 flex w-full justify-center">
        <div className="left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000" />
      </div>
      <div className="flex h-full items-center justify-center rounded-md border border-gray-800 bg-gradient-to-b from-gray-950 to-black px-3 py-2">
     
        <img src={require('./images/Screenshot 2025-05-06 094159.png')} alt="" />
      </div>
    </div>
  );
};
