import React, { useEffect, useState } from "react"
import Glide from "@glidejs/glide"
import axios from "axios"
import { BASE_URL } from "../Constats/Constats"

export default function Videos() {

  const [videoLink, setVideoLink] = useState([]);


  useEffect(()=>{
    getVideoLink()
  },[])


  const getVideoLink = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/admin/videoList`);

      if(response.data.data) {
        setVideoLink(response.data.data); // Correct setter function
      } else {
      }
    } catch (error) {
    }
  };


  useEffect(() => {
    if (videoLink.length > 0) {
      const slider = new Glide(".glide-03", {
        type: "carousel",
        focusAt: "center",
        perView: 3,
        autoplay: 3000,
        animationDuration: 700,
        gap: 24,
        classNames: {
          nav: {
            active: "[&>*]:bg-wuiSlate-700",
          },
        },
        breakpoints: {
          1024: {
            perView: 2,
          },
          640: {
            perView: 1,
          },
        },
      }).mount();
  
      return () => {
        slider.destroy();
      };
    }
  }, [videoLink]);




  return (
    <div>
       <h1 className="text-5xl font-bold  text-[#e1b400] text-center relative mt-10 " style={{marginTop: '100px', marginBottom: '100px'}}>
            Our videos
            <div style={{ width: '100px', marginTop: "10px" }} className="border-b-2 border-[#e1b400] absolute left-1/2 transform -translate-x-1/2 top-full"></div>
        </h1>
      {/*<!-- Component: Carousel with indicators & controls inside --> */}
      <div className="glide-03 relative w-full mt-16 mb-24">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">

       
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
       
          {videoLink.map((link) => {
              return (
                <li key={link}>
                <iframe
                  width="100%" 
                  height="370px" 
                  className="m-auto max-h-full w-full max-w-full rounded-[20px] "  // Use Tailwind's custom rounded class
                  src={link.video}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube Video"
              ></iframe>

           </li>
         );
       })}


            {/* <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-01.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-02.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-03.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-04.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li> */}
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="absolute bottom-0 flex w-full items-center justify-center gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="group p-4"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
        </div>
      </div>
      {/*<!-- End Carousel with indicators & controls inside --> */}
    </div>
  )
}