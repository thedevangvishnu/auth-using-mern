import React from "react";

const ButtonLoader = () => {
  return (
    <div className="flex gap-1 h-full items-center">
      <div
        className="w-[8px] h-[8px] rounded-[50%] bg-slate-100 animate-btnLoader"
        style={{ animationDelay: "-0.36s" }}
      ></div>
      <div
        className="w-[8px] h-[8px] rounded-[50%] bg-slate-100 animate-btnLoader"
        style={{ animationDelay: "-0.18s" }}
      ></div>
      <div className="w-[8px] h-[8px] rounded-[50%] bg-slate-100 animate-btnLoader"></div>
    </div>
  );
};

export default ButtonLoader;
