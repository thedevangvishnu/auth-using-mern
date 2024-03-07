import { useState, useEffect } from "react";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";

type ToastProps = {
  type: "SUCCESS" | "ERROR";
  message: string;
  onClose: () => void;
};

const Toast = ({ type, message, onClose }: ToastProps) => {
  const [hideToast, setHideToast] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setHideToast(true);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  return (
    <div
      className={`absolute bottom-5 px-4 py-3 right-8 border-[1px] border-red-600 flex items-center justify-center z-50 rounded-[30px] bg-black shadow-lg ${
        hideToast ? "animate-hideToast" : "animate-showToast"
      }`}
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
