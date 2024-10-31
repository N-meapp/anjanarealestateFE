// array.map

import { useState } from "react";

export default function ImageGallery({ imgArray }) {
  const [selectedImg, setSelectedImg] = useState(imgArray[0]);

  const imageStyle = {
    width: '100%',
    height: '500px',
    maxHeight: '500px',
    objectFit: 'contain',
};

// Add media query styles
const mediaQueryStyle = window.matchMedia('(max-width: 768px)').matches
    ? { height: '300px', maxHeight: '300px' }
    : {};

const finalImageStyle = { ...imageStyle, ...mediaQueryStyle };

  return (
    <div>
      <div class="grid gap-2">
      {/* h-2/5 w-full rounded-2xl object-contain bg-white */}
        <div className="">
          <img
            class="rounded-2xl object-center w-auto bg-white"
            src={selectedImg}
            alt=""
            style={finalImageStyle}
          />
        </div>
        <div class="grid grid-cols-4 gap-2">
          {imgArray.slice(0, 5).map((image,index) => {
            return image !== selectedImg ? (


                // index==4?(
                //     <div className="relative" onClick={()=>{
                //         // setSelectedImg(image)
                //       }}>
                      
                //         <img
                //           src={image}
                //           className="object-cover transition-all object-center h-20 max-w-full rounded-lg cursor-pointer"
                //           alt="gallery-image"
                //         />
                //       </div>  
                // ):
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
