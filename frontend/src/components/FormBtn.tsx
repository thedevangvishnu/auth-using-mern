import ButtonLoader from "./ButtonLoader";

type FormBtnType = {
  text: string;
  isLoading: boolean;
};

const FormBtn = ({ text, isLoading }: FormBtnType) => {
  return (
    <button
      type="submit"
      className="w-full h-[55px]  bg-black rounded-[3rem] text-white uppercase font-semibold tracking-wider transition-[background-color] duration-300 hover:bg-stone-900  flex justify-center items-center"
    >
      {isLoading ? <ButtonLoader bgColor="bg-slate-100" /> : text}
    </button>
  );
};

export default FormBtn;
