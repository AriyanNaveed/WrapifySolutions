import React from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import Hero from "./components/Hero";
const App = () => {
  return (
    <main>
      <img
        className="absolute top-0 right-0 opacity-60 -z-10"
        src="/gradient.png"
        alt="gradient background"
      />
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_30px_#e99b63] -rotate-45 -z-10"></div>
      <Navbar />
      <Hero />
    </main>
  );
};

export default App;
