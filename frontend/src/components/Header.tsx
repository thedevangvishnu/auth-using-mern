import { useNavigate } from "react-router-dom";
import { SiPlanetscale } from "react-icons/si";

import { useAppContext } from "../contexts/AppContext";

import HeaderLogoutBtn from "./HeaderLogoutBtn";

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAppContext();

  return (
    <header className="fixed top-0 left-0 z-30 w-full h-16">
      <nav className="relative w-full h-full flex items-center justify-between px-4 md:px-10 py-6">
        <div
          className="w-[80px] h-[30px] cursor-pointer flex items-center gap-1 text-[20px] text-white"
          onClick={() => navigate("/")}
        >
          <SiPlanetscale />
          <span className="font-bold">LOGO</span>
        </div>

        <ul className="flex gap-4 items-center">
          {isLoggedIn && (
            <>
              <li className="text-white font-semibold cursor-pointer transition-[color] hover:text-slate-200 duration-300">
                Bookings
              </li>
            </>
          )}
          <li>
            {isLoggedIn ? (
              <HeaderLogoutBtn />
            ) : (
              <button
                className="w-[100px] h-[40px] bg-transparent backdrop-blur-xl border-white border-2 rounded-[3rem] text-white uppercase font-semibold tracking-wider transition-[background-color, color] duration-300 hover:bg-white hover:text-stone-900"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
