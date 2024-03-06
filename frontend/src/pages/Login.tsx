import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "react-query";

import RegisterImg from "../assets/bg2.png";
import { SiPlanetscale } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import ButtonLoader from "../components/ButtonLoader";

import * as request from "../request";

export type LoginFormType = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(request.login, {
    onSuccess: () => {
      navigate("/");
    },

    onError: (error: Error) => {
      console.log("Error", error.message);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>();

  const onSubmit: SubmitHandler<LoginFormType> = (data) => {
    mutate(data);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/* image */}
      <div className="hidden md:flex w-full h-full flex-1">
        <img src={RegisterImg} alt="" className="w-full h-full object-cover" />

        <span
          className="w-[80px] h-[30px] absolute inset-0 top-4 left-10 cursor-pointer flex items-center gap-1 text-[20px] text-white"
          onClick={() => navigate("/")}
        >
          <SiPlanetscale />
          <span className="font-bold">LOGO</span>
        </span>
      </div>

      {/* form */}
      <div className="w-full flex flex-col flex-1 items-center justify-center px-4 py-6 h-full bg-stone-100">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-4xl mb-4 md:mb-8 text-center font-semibold text-black">
            Login
          </h2>
          <p className="text-center w-[80%] md:w-[70%] text-sm text-slate-600">
            Welcome back! We missed you a lot. Sign in and let's get going.
          </p>
        </div>

        <form
          action=""
          className="flex flex-col items-center py-6 px-4 gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <div className="flex items-center border-b-2 border-stone-400 pb-1">
              <label htmlFor="email" className="">
                <MdEmail className="text-stone-400" />
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="text-sm w-[90%] outline-none border-none bg-transparent px-2 placeholder:text-sm"
                {...register("email", { required: "This field is required!" })}
              />
            </div>

            {/* error */}
            <div className="h-[20px] mt-1 ">
              {errors.email && (
                <p className="text-xs text-red-600 font-medium italic">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center border-b-2 border-stone-400 pb-1">
              <label htmlFor="password" className="">
                <FaLock className="text-stone-400" />
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="text-sm w-[90%] outline-none border-none  bg-transparent px-2 placeholder:text-sm"
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 or more characters!",
                  },
                })}
              />
            </div>

            {/* error */}
            <div className="h-[20px] mt-1 ">
              {errors.password && (
                <p className="text-xs text-red-600 font-medium italic">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center w-full mt-4">
            <button
              type="submit"
              className="w-full  bg-black rounded-[3rem] text-white uppercase font-semibold tracking-wider transition-[background-color] duration-300 hover:bg-stone-900 h-[55px] flex justify-center items-center"
            >
              {isLoading ? <ButtonLoader /> : "Sign in"}
            </button>
          </div>

          <p className="text-sm text-slate-700 text-center">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold transition-[color] duration-300 text-black hover:text-stone-900"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
