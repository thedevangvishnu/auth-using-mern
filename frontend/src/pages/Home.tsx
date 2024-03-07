import HeroBanner from "../assets/hero-bg-1.jpg";

const Home = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      {/* image */}
      <div className="w-full h-full absolute inset-0 bg-stone-800">
        <img
          src={HeroBanner}
          alt=""
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* content */}
      <div className="relative flex flex-col z-20 items-center gap-8 text-center px-2 ">
        <h2 className="text-6xl md:text-7xl uppercase font-bold text-white">
          Travel
        </h2>
        <h2 className="text-6xl md:text-7xl uppercase font-bold text-white mt-[-30px]">
          FOR LIVING
        </h2>
        <p className=" text-white w-[80%] md:w-[60%] lg:w-[50%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          sapiente animi qui nobis doloribus necessitatibus quidem excepturi sit
          sequi, enim fugit dolores quaerat, perferendis veritatis ex quo!
        </p>
        <button className="w-[200px] py-3 bg-transparent border-white border-2 rounded-[3rem] text-white uppercase font-semibold tracking-wider transition-[background-color, color] duration-300 hover:bg-white hover:text-stone-900">
          EXPLORE
        </button>
      </div>

      {/* overlay */}
      <div className="absolute bottom-0 left-0 z-10 w-full h-[500px] bg-gradient-to-t from-stone-950 to stone-300"></div>
    </div>
  );
};

export default Home;
