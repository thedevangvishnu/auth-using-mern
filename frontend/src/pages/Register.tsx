import RegisterImg from "../assets/bg-1.jpg";
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/* image */}
      <div className="hidden md:flex w-full h-full flex-1">
        <img src={RegisterImg} alt="" className="w-full h-full object-cover" />
      </div>

      {/* form */}
      <div className="w-full flex flex-col flex-1 items-center justify-center px-4 py-6 h-full bg-slate-100">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl text-center font-semibold text-blue-900 mb-2">
            Create account
          </h2>
          <p className="text-center w-[90%] text-sm text-slate-600">
            We are glad that you've decided to join the community!
          </p>
        </div>

        <form action="" className="flex flex-col items-center py-6 px-4 gap-6">
          <div>
            <div className="flex items-center border-b-2 border-slate-400 pb-1">
              <label htmlFor="name" className="">
                <FaUser className="text-slate-400" />
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter full name"
                className="w-[90%] outline-none bg-transparent border-none px-2 text-sm placeholder:text-sm"
              />
            </div>

            {/* error */}
            <p className="min-h-[14px] mt-1 text-xs text-red-600 font-medium italic">
              This field is required
            </p>
          </div>

          <div>
            <div className="flex items-center border-b-2 border-slate-400 pb-1">
              <label htmlFor="email" className="">
                <MdEmail className="text-slate-400" />
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="text-sm w-[90%] outline-none border-none bg-transparent px-2 placeholder:text-sm"
              />
            </div>

            {/* error */}
            <p className="min-h-[14px] mt-1 text-xs text-red-600 font-medium italic">
              This field is required
            </p>
          </div>

          <div>
            <div className="flex items-center border-b-2 border-slate-400 pb-1">
              <label htmlFor="password" className="">
                <FaLock className="text-slate-400" />
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="text-sm w-[90%] outline-none border-none  bg-transparent px-2 placeholder:text-sm"
              />
            </div>

            {/* error */}
            <p className="min-h-[14px] mt-1 text-xs text-red-600 font-medium italic">
              This field is required
            </p>
          </div>

          <div>
            <div className="flex items-center border-b-2 border-slate-400 pb-1">
              <label htmlFor="confirmPassword" className="">
                <FaLock className="text-slate-400" />
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
                className="text-sm w-[90%] outline-none border-none bg-transparent px-2 placeholder:text-sm"
              />
            </div>

            {/* error */}
            <p className="min-h-[14px] mt-1 text-xs text-red-600 font-medium italic">
              This field is required
            </p>
          </div>

          <div className="flex items-center w-full mt-4">
            <button className="w-full py-3 bg-blue-900 rounded-[3rem] text-white uppercase font-semibold tracking-wider transition-[background-color] duration-300 hover:bg-blue-800">
              Sign up
            </button>
          </div>

          <p className="text-sm text-slate-700 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold transition-[color] duration-300 hover:text-blue-800"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
