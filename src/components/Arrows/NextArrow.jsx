import { ChevronRightIcon } from "@heroicons/react/24/solid";



export default function NextArrow({handleNext}){
    return(
        <div onClick={handleNext} className="bg-black">
        <div className="w-14 h-14 bg-[#9a570099] mb-5 rounded-full shadow-xl webkit-center content-center">
        <ChevronRightIcon aria-hidden="true" className="h-7 w-7 text-white" />
        </div>
        </div>
    )
}