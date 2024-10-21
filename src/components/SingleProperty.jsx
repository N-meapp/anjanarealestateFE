import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery";
import { imgArray } from "./imgArray";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { BASE_URL } from '../Constats/Constats';

export default function SingleProperty() {

  const [singlePropertyData, setSinglePropertyData] = useState(null); // Change to null for object
  const [error, setError] = useState(null);
  
  const { p_id } = useParams();

  useEffect(() => {
    getSingleProperty();
  }, []);

  const getSingleProperty = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users/singleProperty`, { params: { propertyId: p_id } });

      if (response.data && response.data.data) {
        setSinglePropertyData(response.data.data);
      } else {
        console.error("Unexpected response format", response.data);
        setError("Unexpected response format");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Error fetching property data");
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!singlePropertyData) {
    return <div>Loading...</div>;
  }


console.log(singlePropertyData, "single dataaa")
console.log(singlePropertyData, "data fetchhhhh")
  return (
    <div className="mt-28 md:mt-40 w-full h-auto md:px-12 px-4">
      <div className="w-full h-20 grid grid-cols-2 mb-10">   
      <div className="content-center w-max hidden md:block">
      <h1 className="content-center px-4 text-white rounded-full py-2 bg-[#26a69a] font-bold md:font-extrabold text-xl md:text-2xl">
        ₹ {singlePropertyData.rate}
      </h1>
      </div>

      <div className="content-center md:w-full w-[130%]">
      <h1 className="md:text-xl text-base font-bold pb-5">
      {singlePropertyData.name}
      </h1>
      </div>
      <div className="content-center block md:hidden w-full">
      <h1 className="content-center w-max float-right px-4 text-white rounded-full py-2 bg-[#26a69a] font-bold md:font-extrabold text-xl md:text-2xl">
        ₹ {singlePropertyData.rate}
      </h1>
      </div>
      </div>
      <div className="md:flex gap-5">
        <div className="md:w-[40%] w-[100%]">
          <ImageGallery imgArray={imgArray} />
        </div>
        <div className="w-full md:w-[60%] mb-96 mt-6 md:mt-0 rounded-xl">
          <div className="bg-[#ffffff] w-full py-6 rounded-xl grid md:grid-cols-5 grid-cols-3 text-center items-center shadow-xl mb-12 justify-around justify-items-center">

         {/* {singlePropertyData.features.map((feature, index) => {
  return (
    <div key={index}>
      {Object.keys(feature).map((key) => (
        <div className="flex gap-1" key={key}>
          <h1 className="font-bold text-[#155b54]">{feature[key]}</h1> 
          <h1 className="font-thin">{key}</h1> 
        </div>
      ))}
      <h1 className="text-2xl text-[#00000040]">|</h1>
    </div>
  );
})} */}


{singlePropertyData.features && singlePropertyData.features.length > 0 ? (
        singlePropertyData.features.map((feature, index) => (
          <div key={index} className="flex gap-1">
            {Object.entries(feature).map(([key, value]) => (
              <div className="flex gap-1" key={key}>
                <h1 className="font-bold text-[#155b54]">{value}</h1> {/* Value (e.g., 3) */}
                <h1 className="font-thin">{key}</h1> {/* Key (e.g., Beds) */}
                <h1 className="text-2xl text-[#00000040]">|</h1>
              </div>
              
            ))}
          
          </div>
        ))
      ) : (
        <p>No features available</p>
      )}



          
            {/* <div className="flex gap-1">
              <h1 className="font-bold text-[#155b54]">3</h1>
              <h1 className="font-thin">Balcony</h1>
            </div>
            <h1 className="text-2xl text-[#00000040]">|</h1>
            <div className="flex gap-1">
              <h1 className="font-bold text-[#155b54]">3</h1>
              <h1 className="font-thin">Kitchen</h1>
            </div> */}
          </div>
          <div className="h-10 w-full grid grid-cols-2">
            <div>
              <h1 className="text-[#00000071]">Status</h1>
              <h1 className="text-[black] font-bold mb-12">{singlePropertyData.status}</h1>
            </div>
            <div>
              <h1 className="text-[#00000071]">Furnished Status</h1>
              <h1 className="text-[black] font-bold">{singlePropertyData.furnishedStatus}</h1>
            </div>
          <div>
          <h1 className="text-[#00000071]">Area</h1>
        <h1 className="text-[black] font-bold">{singlePropertyData.area}</h1>
          </div>
          <div>
          <h1 className="text-[#00000071]">Address</h1>
        <h1 className="text-[black] font-bold">{singlePropertyData.address}</h1>
          </div>
          <div>
          <h1 className="text-[#00000071]">contact</h1>
        <h1 className="text-[black] font-bold">{singlePropertyData.contactNumber}</h1>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
