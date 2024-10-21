import { useEffect, useState } from "react";
import SingleVideo from "./SingleVideo";
import { BASE_URL } from "../../Constats/Constats";
import axios from "axios";



export default function Youtube(){
    const [newVideo,setNewVideo] = useState()

    const [videoArray,setVideoArray] = useState([])

    const getAllVideos =async()=>{
        try {
            const response = await axios.get(`${BASE_URL}/admin/videoList`);
            console.log(response.data.data);
            setVideoArray(response.data.data);
        } catch (error) {
            console.log(error); 
        }
    }

    
    useEffect(()=>{
        getAllVideos()
    },[videoArray])


    const handleAdd =async()=>{
        const url = newVideo

        const start = url.lastIndexOf("/") + 1;
        const end = url.indexOf("?");
        const trimmedString = url.substring(start, end);
        
        console.log(trimmedString);

        const body = {
            video: `https://youtube.com/embed/${trimmedString}`
        }
        try {
            const response = await axios.post(`${BASE_URL}/admin/add-video`,body);
            console.log(response.data.data);
        } catch (error) {
            console.log(error); 
        }

        
        
        
    }



    return(
        <div className="">
        <div className="flex gap-5 p-5 mt-5">
        <input onChange={(e)=>{
          setNewVideo(e.target.value)
        }} className="px-4 h-fit w-full py-2 shadow-md rounded-full" placeholder="past video link here..." value={newVideo}></input>
        <button
          onClick={() => {
            handleAdd()
          }}
          className="px-4 h-fit py-2 bg-black text-white text-sm font-bold rounded-full mb-10"
        >
          ADD
        </button>
        </div>
        <div className="p-5 w-full grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5">

        {videoArray.map((videoObj)=>{
            return(
                <SingleVideo url={videoObj.video} />
            )
        })}
        
        </div>
        </div>

    )
}

