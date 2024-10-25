import NextArrow from "./Arrows/NextArrow";
import PrevArrow from "./Arrows/PrevArrow";
import HomeCarousel from "./HomeCarousel";


function TitlePage(){
    return(
        <div className="relative headersection md:grid md:grid-cols-2 h-[100vh]">
          <NextArrow />
          <PrevArrow />
        <div className="h-autofont-bold content-center">
        <div class="w-max ml-20 mt-20">
        <h1 class="overflow-hidden whitespace-nowrap pr-5 text-5xl font-bold leading-snug text-[#26a69a]">Real estate <br></br> cannot be</h1>
        <h1 class="overflow-hidden whitespace-nowrap pr-5 text-7xl font-extrabold text-[#0e2e50]">Lost</h1>
        <h1 class="overflow-hidden whitespace-nowrap pr-5 text-5xl font-bold text-[#26a69a]">Or</h1>
        <h1 class="overflow-hidden whitespace-nowrap pr-5 text-7xl font-extrabold text-[#0e2e50]">Stolen</h1>

        <button className="px-8 py-3 rounded-full mt-12 border-2 text-sm text-[#26a69a] font-bold border-[#26a69a] animate-bounce">Explore</button>
        </div>
        </div>
        <HomeCarousel />
        </div>
    )
}


export default TitlePage;

// <Header />
