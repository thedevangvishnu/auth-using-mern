import React from "react";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";

type ToastProps = {
  type: "SUCCESS" | "ERROR";
  message: string;
};

const Toast = ({ type, message }: ToastProps) => {
  return (
    <div
      className={`absolute bottom-3 px-4 py-3 right-5 border-[1px] border-red-600 flex items-center justify-center z-30 rounded-[30px] bg-black shadow-lg animate-showToast`}
    >
      <p className="text-white font-semibold text-sm flex items-center">
        <span
          className={`${
            type === "SUCCESS" ? "text-green-500" : "text-red-600"
          } text-xl mr-2`}
        >
          {type === "SUCCESS" ? <FaCircleCheck /> : <FaCircleXmark />}
        </span>
        {message}
      </p>
    </div>
  );
};

export default Toast;
