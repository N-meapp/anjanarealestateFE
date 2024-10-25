import { ChevronLeftIcon } from "@heroicons/react/24/solid"


export default function PrevArrow({handlePrev}){
    return(
        <div onClick={handlePrev} className="bg-black">
        <div className="w-14 h-14 bg-[#0e2e50] mb-5 rounded-full shadow-xl webkit-center content-center">
        <ChevronLeftIcon aria-hidden="true" className="h-7 w-7 text-white" />
        </div>
        </div>
    )
}