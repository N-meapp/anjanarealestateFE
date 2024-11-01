import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function PropertyCard(props){

 const navigate = useNavigate()


    return(
        <div className="w-[100%]" >
        <a href="javascript:void(0)">
  <div onClick={()=>
    navigate(`/property-details/${props.id}`)
  } 
  class="relative flex flex-col my-6 bg-white property rounded-lg mx-3 shadow-xl hover:shadow-sm" >
    <div class="relative overflow-hidden text-white rounded-t-md bg-black" >
      <img src={props.img} className="w-full h-[190px] md:h-[200px] object-cover"/>
    </div>
    <div class="p-4">
    
    <div className="flex justify-around">
    <div class="mb-4 font-bold py-0.5 px-2.5 border border-transparent text-base text-[#000000] transition-all text-center">
    ₹{props.rate}
    </div>
    <div className="text-2xl text-[#00000042]">|</div>
    <div class="mb-4 font-bold py-0.5 px-2.5 border border-transparent text-base text-[#000000] transition-all text-center">
    {props.area}
    </div>
    </div>
    <div class="mb-4 font-bold py-0.5 px-2.5 border border-transparent text-lg text-[#000000] transition-all truncate">
    {props.name}
    </div>
      <p class="text-slate-600 leading-normal text-[#0000009f] text-sm font-light mb-3">
        {props.address}
      </p>
      
      <p class="text-slate-600 leading-normal text-[#ffffffe4] font-semibold text-xs bg-[#e1b400] w-fit px-2 py-1 rounded-full">
      {props.status}
    </p>
    <button onClick={()=>
      navigate(`/property-details/${props.id}`)
    } id="view" class="text-slate-600 leading-normal mt-4 text-[#ffffffe4] float-right font-semibold bg-[#010404] w-fit px-3 py-2 text-sm rounded-full">
    view details
    </button>
    </div>
 
  </div> 
</a>
        </div>
    )
}