import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../../Constats/Constats";
import Swal from "sweetalert2";

export default function SingleVideo({url,id,setIsApiCalled}){

    console.log(url,'rullllll');
    
    const handleHover = (flag)=>{
        const card = document.getElementById(url)

        if(flag){
            card.classList.add('bounce-out-down')
            card.classList.remove('hidden')
        }else{
            // card.classList.add('bounce-out-up')
            card.classList.add('hidden')
            
        }
    }

    const handleDelete = ()=>{
        setIsApiCalled(false)
        try{


            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then(async (result) => {
                if (result.isConfirmed) {
                    const response =await axios.delete(`${BASE_URL}/admin/deleteVideo/${id}`)
                    if(response.data.success){
                        console.log(response,'deletelelelele');
                        setIsApiCalled(true)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your video has been deleted.",
                            icon: "success"
                          });
                    }
                }
              });





           if(response){
            console.log('successfully deleted');
            
           }

        }catch(error){
        }
    }

    console.log(url,'urlllll');
    
    return (

        <div
        //  onMouseEnter={()=>{
        //     handleHover(true)
        // }}
        // onMouseLeave={()=>{
        //     handleHover(false)
        // }}
         className="relative">
         <iframe allow="fullscreen" class="w-full rounded-2xl aspect-video ..." src={url}></iframe>
         <div className=" h-auto mt-2">
        <button onClick={handleDelete} className="float-right text-xs py-2 transition-all duration-500 px-3 rounded-full text-red-500 font-bold hover:shadow-sm hover:bg-black bg-[#cccaca] shadow-md">delete</button>
     </div>
         </div>
        )
    }


    // <svg onClick={handleDelete} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-[#ff5050] right-2 bottom-2 w-8 p-1 h-8 cursor-pointer float-right bg-[#000000] rounded-full">
    // <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
    // </svg>