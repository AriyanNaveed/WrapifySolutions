import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <main
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="flex flex-col lg:flex-row justify-between items-center lg:items-center text-center lg:text-left min-h-[calc(90vh-6rem)] mt-10 sm:mt-5 md:mt-10 lg:mt-20 relative overflow-hidden px-4 sm:px-6 md:px-10"
    >
      <div className=" lg:hidden w-full flex justify-center  mt-15 ">
        <Spline
          className="w-[90%] sm:w-[80%] md:w-[70%] h-[220px] sm:h-80 md:h-[450px]"
          scene="https://prod.spline.design/yldZRxwbDy87zncy/scene.splinecode"
        />
      </div>

      <div className="max-w-xl w-full z-10 flex flex-col items-center lg:items-start">
        <div className="relative w-[80%] sm:w-44 md:w-48 h-8 sm:h-9 md:h-10 bg-linear-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full mx-auto lg:mx-0">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-xs sm:text-sm md:text-base cursor-pointer hover:bg-black">
            <i className="bx bx-diamond"></i> Ai PROJECTS
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-6 sm:my-8 leading-snug">
          WELCOME TO <br /> <span className="text-purple-400">Wrapify</span>
          Solutions
        </h1>

        <p className="text-sm sm:text-base md:text-lg tracking-wider text-gray-400 max-w-96 sm:max-w-md md:max-w-lg leading-relaxed">
          We wrap ideas into intelligent digital solutions. <br />
          Combining creativity and technology!
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-6">
          <a
            className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]"
            href="#"
          >
            Services <i className="bx bx-link-external"></i>
          </a>
          <a
            className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white"
            href="#"
          >
            GetStarted <i className="bx bx-link-external"></i>
          </a>
        </div>
      </div>

      <div className="hidden lg:flex justify-center w-full mt-10 lg:mt-0">
        <Spline
          className="w-[60%] h-[600px]"
          scene="https://prod.spline.design/yldZRxwbDy87zncy/scene.splinecode"
        />
      </div>
    </main>
  );
};

export default Hero;
