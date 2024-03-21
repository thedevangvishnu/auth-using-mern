type GoogleBtnType = {
  text: string;
  endpoint: string;
};

const GoogleBtn = ({ text, endpoint }: GoogleBtnType) => {
  const onGoogleSignClick = () => {
    window.open(
      `https://auth-using-mern.onrender.com/api/${endpoint}/google`,
      "_self"
    );
  };

  return (
    <button
      type="button"
      className="w-full h-[55px]  bg-blue-700 rounded-[3rem] text-white uppercase font-semibold tracking-wider transition-[background-color] duration-300 hover:bg-blue-600  flex justify-center items-center"
      onClick={onGoogleSignClick}
    >
      {text}
    </button>
  );
};

export default GoogleBtn;
