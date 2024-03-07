import { useQueryClient, useMutation } from "react-query";

import * as request from "../request";
import ButtonLoader from "./ButtonLoader";

const HeaderLogoutBtn = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(request.logout, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
    },
  });

  const handleClick = () => {
    mutate();
  };

  return (
    <button
      className="w-[100px] h-[40px] flex items-center justify-center bg-transparent backdrop-blur-xl border-white border-2 rounded-[3rem] text-white uppercase font-semibold tracking-wider transition-[background-color, color] duration-300 hover:bg-white hover:text-stone-900 active:bg-white focus:bg-white"
      onClick={handleClick}
    >
      {isLoading ? <ButtonLoader bgColor="bg-stone-800" /> : "Logout"}
    </button>
  );
};

export default HeaderLogoutBtn;
