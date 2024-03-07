import { ReactNode } from "react";

const LoadingSpinner = ({ text }: { text: ReactNode }) => {
  return (
    <div className="fixed inset-0 w-full h-screen bg-slate-100 flex items-center justify-center z-40">
      <div className="w-[45px] h-[45px] border-[6px] border-stone-800 rounded-[50%] "></div>
      <div className="absolute w-[45px] h-[45px] border-[6px] border-stone-800 border-t-stone-500 rounded-[50%] animate-spin"></div>

      <div className="absolute mt-[5.5rem] font-semibold">{text}</div>
    </div>
  );
};

export default LoadingSpinner;
