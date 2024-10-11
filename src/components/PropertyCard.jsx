import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function PropertyCard(props){

 const navigate = useNavigate()


    return(
        <div className="">
        <a href="javascript:void(0)">
  <div onClick={()=>
    navigate(`/property-details/${props.id}`)
  } 
  class="relative flex flex-col my-6 bg-white property rounded-lg mx-3 shadow-xl hover:shadow-sm">
    <div class="relative overflow-hidden text-white rounded-t-md">
      <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80" alt="card-image" />
    </div>
    <div class="p-4">
    
    <div className="flex justify-around">
    <div class="mb-4 font-bold py-0.5 px-2.5 border border-transparent text-lg text-[#000000] transition-all text-center">
    ₹{props.rate}
    </div>
    <div className="text-2xl text-[#00000042]">|</div>
    <div class="mb-4 font-bold py-0.5 px-2.5 border border-transparent text-lg text-[#000000] transition-all text-center">
    {props.area}
    </div>
    </div>
    <div class="mb-4 font-bold py-0.5 px-2.5 border border-transparent text-xl text-[#000000] transition-all">
    {props.name}
    </div>
      <p class="text-slate-600 leading-normal text-[#0000009f] font-light mb-4">
        {props.address}
      </p>
      
      <p class="text-slate-600 leading-normal text-[#ffffffe4] font-semibold text-xs bg-[#26A69A] w-fit px-2 py-1 rounded-full">
      {props.status}
    </p>
    <button onClick={()=>
      navigate('/property-details')
    } id="view" class="text-slate-600 leading-normal mt-4 text-[#ffffffe4] float-right font-semibold bg-[#010404] w-fit px-3 py-2 text-sm rounded-full">
    view details
    </button>
    </div>
 
  </div> 
</a>
        </div>
    )
}