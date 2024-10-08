import ImageGallery from "./ImageGallery";
import { imgArray } from "./imgArray";

export default function SingleProperty() {
  return (
    <div className="mt-28 md:mt-40 w-full h-auto md:px-12 px-4">
      <div className="w-full h-20 grid grid-cols-2 mb-10">   
      <div className="content-center w-max hidden md:block">
      <h1 className="content-center px-4 text-white rounded-full py-2 bg-[#26a69a] font-bold md:font-extrabold text-xl md:text-2xl">
        ₹31 Cr
      </h1>
      </div>

      <div className="content-center md:w-full w-[130%]">
      <h1 className="md:text-xl text-base font-bold pb-5">
        3 BHK Flat For Sale in Ernakulam kaloor, Ernakulam
      </h1>
      </div>
      <div className="content-center block md:hidden w-full">
      <h1 className="content-center w-max float-right px-4 text-white rounded-full py-2 bg-[#26a69a] font-bold md:font-extrabold text-xl md:text-2xl">
        ₹31 Cr
      </h1>
      </div>
      </div>
      <div className="md:flex gap-5">
        <div className="md:w-[40%] w-[100%]">
          <ImageGallery imgArray={imgArray} />
        </div>
        <div className="w-full md:w-[60%] mb-96 mt-6 md:mt-0 rounded-xl">
          <div className="bg-[#ffffff] w-full py-6 rounded-xl grid md:grid-cols-5 grid-cols-3 text-center items-center shadow-xl mb-12 justify-around justify-items-center">
            <div className="flex gap-1">
              <h1 className="font-bold text-[#155b54]">3</h1>
              <h1 className="font-thin">Beds</h1>
            </div>
            <h1 className="text-2xl text-[#00000040]">|</h1>
            <div className="flex gap-1">
              <h1 className="font-bold text-[#155b54]">3</h1>
              <h1 className="font-thin">Balcony</h1>
            </div>
            <h1 className="text-2xl text-[#00000040]">|</h1>
            <div className="flex gap-1">
              <h1 className="font-bold text-[#155b54]">3</h1>
              <h1 className="font-thin">Kitchen</h1>
            </div>
          </div>
          <div className="h-10 w-full grid grid-cols-2">
            <div>
              <h1 className="text-[#00000071]">Status</h1>
              <h1 className="text-[black] font-bold mb-12">Ready to Move</h1>
            </div>
            <div>
              <h1 className="text-[#00000071]">Furnished Status</h1>
              <h1 className="text-[black] font-bold">Semi-Furnished</h1>
            </div>
          <div>
          <h1 className="text-[#00000071]">Area</h1>
        <h1 className="text-[black] font-bold">31 Sqft</h1>
          </div>
          <div>
          <h1 className="text-[#00000071]">Address</h1>
        <h1 className="text-[black] font-bold">Kaloor, Ernakulam, Kerala</h1>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
