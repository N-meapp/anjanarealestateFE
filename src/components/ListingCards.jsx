import { useState } from "react";
import PropertyCard from "./PropertyCard";
import Search from "./Search";


export default function ListingCards(){
    const [sampleArray,setSampleArray] = useState(['q','e','q','q','e','q'])
    return (
        <div>
        <Search />
        <div className="md:pt-20 pt-10 pb-20">
        <div className="md:ml-8 text-center md:text-left ">
        <h1 className="text-4xl font-bold mb-8 text-[#005555] leading-normal">Popular Properties</h1>
        <hr className="w-10"></hr>
        </div>
        <div className="md:grid grid-cols-4 justify-items-center px-10">
        {sampleArray.map(()=>{
            return(
                <PropertyCard />
            )
        })}
        </div>
        </div>
        </div>

    )
}