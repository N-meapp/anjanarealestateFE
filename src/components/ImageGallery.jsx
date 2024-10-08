// array.map

import { useState } from "react";

export default function ImageGallery({ imgArray }) {
  const [selectedImg, setSelectedImg] = useState(imgArray[0]);
  return (
    <div>
      <div class="grid gap-2">
        <div className="h-2/5 w-full rounded-2xl object-contain bg-black">
          <img
            class="rounded-2xl object-center w-auto"
            src={selectedImg}
            alt=""
          />
        </div>
        <div class="grid grid-cols-4 gap-2">
          {imgArray.slice(0, 5).map((image,index) => {
            return image !== selectedImg ? (


                index==4?(
                    <div className="relative" onClick={()=>{
                        // setSelectedImg(image)
                      }}>
                      <div className="bg-[#00000080] absolute h-full w-full text-white text-center content-center font-bold rounded-lg">+15</div>
                      
                        <img
                          src={image}
                          className="object-cover transition-all object-center h-20 max-w-full rounded-lg cursor-pointer"
                          alt="gallery-image"
                        />
                      </div>  
                ):
              <div onClick={()=>{
                setSelectedImg(image)
              }}>
                <img
                  src={image}
                  className="object-cover transition-all object-center h-20 max-w-full rounded-lg cursor-pointer"
                  alt="gallery-image"
                />
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}
