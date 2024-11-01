import { useRef, useState } from "react";
import NextArrow from "./Arrows/NextArrow";
import PrevArrow from "./Arrows/PrevArrow";
import HomeCarousel from "./HomeCarousel";

function TitlePage() {
  // const handleArrow=(fun)=>{
  //     handleFun(fun)
  // }

  const carouselRef = useRef(null); // Reference to the carousel to control it


  const handleExplore = ()=>{
    window.scrollBy({
      top: 500, // Amount to scroll down in pixels
      behavior: 'smooth' // Smooth scroll effect
  });
  }

  return (
    <div className="relative headersection md:grid md:grid-cols-2 md:h-[91vh]">

<div className="bg-[#e1b400]">
      <div className="pt-24 h-autofont-bold content-center rounded-br-[1000px] bg-[#faffe6]">
        <div class="md:w-max md:ml-20 md:text-left text-center mt-10 md:mt-20">

          <h1 class="overflow-hidden whitespace-nowrap pr-5 text-4xl md:text-5xl font-bold leading-snug text-[#b9b9b3]">
          Welcome <br></br> to
          </h1>
          <h1 class="overflow-hidden whitespace-nowrap pr-5 text-6xl md:text-7xl font-extrabold text-[#ff9800]">
          Anjana
          </h1>
          <h1 class="overflow-hidden whitespace-nowrap pr-5 text-4xl md:text-5xl font-bold text-[#b9b9b3]">
          Real
          </h1>
          <h1 class="overflow-hidden whitespace-nowrap pr-5 text-6xl md:text-7xl font-extrabold text-[#ff9800]">
        Estate
          </h1>

          <button onClick={()=>{
            handleExplore()
          }} className="px-8 py-3 rounded-full mt-12 border-2 text-sm text-[#980a00] font-bold border-[#980a006b] animate-bounce">
            Explore
          </button>
        </div>
      </div>
      </div>
      <HomeCarousel ref={carouselRef} />
    </div>
  );
}

export default TitlePage;

// <Header />
