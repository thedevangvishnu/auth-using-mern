import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";

import { SiPlanetscale } from "react-icons/si";
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import RegisterImg from "../assets/bg1.png";
import FormBtn from "../components/FormBtn";

import * as request from "../request";
import { useAppContext } from "../contexts/AppContext";
import GoogleBtn from "../components/GoogleBtn";

export type RegisterFormType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const { showToast } = useAppContext();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(request.register, {
    onSuccess: async () => {
      showToast({
        type: "SUCCESS",
        message: "Sign up successfull!",
      });
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
    },

    onError: (error: Error) => {
      showToast({
        type: "ERROR",
        message: error.message,
      });
    },
  });

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>();

  const onSubmit: SubmitHandler<RegisterFormType> = (data) => {
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
        <div className="flex flex-col items-center mb-3">
          <h2 className="text-3xl  mb-4 md:mb-6 text-center font-semibold text-black">
            Create Account
          </h2>
          <p className="text-center w-[90%] text-sm text-slate-600">
            We are glad that you've decided to join the community!
          </p>
        </div>

        <form
          action=""
          className="flex flex-col items-center py-6 px-4 gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <div className="flex items-center border-b-2 border-stone-400 pb-1">
              <label htmlFor="name" className="">
                <FaUser className="text-stone-400" />
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter full name"
                className="w-[90%] outline-none bg-transparent border-none px-2 text-sm placeholder:text-sm"
                {...register("name", { required: "This field is required!" })}
              />
            </div>

            {/* error */}
            <div className="h-[20px] mt-1">
              {errors.name && (
                <p className="text-xs text-red-600 font-medium italic">
                  {errors.name.message}
                </p>
              )}
            </div>
          </div>

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

          <div>
            <div className="flex items-center border-b-2 border-stone-400 pb-1">
              <label htmlFor="confirmPassword" className="">
                <FaLock className="text-stone-400" />
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
                className="text-sm w-[90%] outline-none border-none bg-transparent px-2 placeholder:text-sm"
                {...register("confirmPassword", {
                  required: "This field is required!",
                  validate: (value) => {
                    if (watch("password") != value) {
                      return "Password does not match!";
                    }
                  },
                })}
              />
            </div>

            {/* error */}
            <div className="h-[20px] mt-1 ">
              {errors.confirmPassword && (
                <p className="text-xs text-red-600 font-medium italic">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center w-full mt-4">
            <FormBtn isLoading={isLoading} text="Sign up" />
          </div>

          <GoogleBtn text="Google Sign Up" endpoint="users" />

          <p className="text-sm text-slate-700 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold transition-[color] duration-300 text-black hover:text-stone-900"
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
