import { useQueryClient, useMutation } from "react-query";

import * as request from "../request";

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
      className="w-[100px] py-1 bg-transparent backdrop-blur-xl border-white border-2 rounded-[3rem] text-white uppercase font-semibold tracking-wider transition-[background-color, color] duration-300 hover:bg-white hover:text-stone-900"
      onClick={handleClick}
    >
      {isLoading ? "..." : "Logout"}
    </button>
  );
};

export default HeaderLogoutBtn;
