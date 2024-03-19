const ButtonLoader = ({ bgColor }: { bgColor: string }) => {
  return (
    <div className="flex gap-1 h-full items-center">
      <div
        className={`w-[8px] h-[8px] rounded-[50%] animate-btnLoader ${bgColor}`}
        style={{ animationDelay: "-0.36s" }}
      ></div>
      <div
        className={`w-[8px] h-[8px] rounded-[50%] animate-btnLoader ${bgColor}`}
        style={{ animationDelay: "-0.18s" }}
      ></div>
      <div
        className={`w-[8px] h-[8px] rounded-[50%] animate-btnLoader ${bgColor}`}
      ></div>
    </div>
  );
};

export default ButtonLoader;
