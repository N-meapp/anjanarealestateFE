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
    <div className="relative headersection md:grid md:grid-cols-2">
<div className="bg-[#005555]">
      <div className="pt-24 h-autofont-bold content-center rounded-br-[1000px] bg-[#effdf5]">
        <div class="md:w-max md:ml-20 md:text-left text-center mt-10 md:mt-20">
          <h1 class="overflow-hidden whitespace-nowrap pr-5 text-4xl md:text-5xl font-bold leading-snug text-[#26a69a]">
          Unlock <br></br> unique
          </h1>
          <h1 class="overflow-hidden whitespace-nowrap pr-5 text-6xl md:text-7xl font-extrabold text-[#0e2e50]">
          Spaces
          </h1>
          <h1 class="overflow-hidden whitespace-nowrap pr-5 text-4xl md:text-5xl font-bold text-[#26a69a]">
          for
          </h1>
          <h1 class="overflow-hidden whitespace-nowrap pr-5 text-6xl md:text-7xl font-extrabold text-[#0e2e50]">
        Dreams
          </h1>

          <button onClick={()=>{
            handleExplore()
          }} className="px-8 py-3 rounded-full mt-12 border-2 text-sm text-[#26a69a] font-bold border-[#26a69a] animate-bounce">
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
