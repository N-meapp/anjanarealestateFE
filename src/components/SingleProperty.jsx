import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery";
import { imgArray } from "./imgArray";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../Constats/Constats";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function SingleProperty() {
  const [singlePropertyData, setSinglePropertyData] = useState(null); // Change to null for object
  const [error, setError] = useState(null);

  const { p_id } = useParams();

  useEffect(() => {
    getSingleProperty();
  }, []);


  const getSingleProperty = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users/singleProperty`, {
        params: { propertyId: p_id },
      });

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

  return (
    <div className="pt-28 md:pt-40 w-full h-auto md:px-12 px-4" style={{marginBottom:'100px'}}>
      <div className="w-full h-20 grid md:grid-cols-2 mb-10 md:content-normal justify-center mt-5 md:mt-0">   
      <div className="content-center w-max hidden md:block">
      <h1 className="content-center px-4 text-white rounded-full py-2 bg-[#e1b400] font-bold md:font-extrabold text-xl md:text-2xl">
        ₹ {singlePropertyData.rate}
      </h1>
      </div>

        <div className="content-center md:w-full ">
          <h1 className="md:text-3xl text-2xl font-bold pb-5">
            {singlePropertyData.name}
          </h1>
        </div>
        <div className="content-center block md:hidden w-full">
          <h1 className="content-center w-max float-right px-4 text-white rounded-full py-2 bg-[#e1b400] font-bold md:font-extrabold text-xl md:text-2xl">
            ₹ {singlePropertyData.rate}
          </h1>
        </div>
      </div>
      <div className="md:flex gap-5">
        <div className="md:w-[40%] w-[100%]">
          <ImageGallery imgArray={singlePropertyData.photos} />
        </div>
        <div className="w-full md:w-[60%] mb-96 mt-6 md:mt-0 rounded-xl">
          <div className="bg-[#ffffff] w-full py-6 rounded-xl grid md:grid-cols-5 grid-cols-3 text-center items-center shadow-xl mb-12 justify-around justify-items-center">
            {singlePropertyData.features?
              Object.keys(singlePropertyData.features).map((key, index) => (
              <div
                className={`flex border-[black] w-full justify-center ${
                  index % 4 == 0 && index !== 0
                    ? "md:border-none border-r" 
                    : index % 2 == 0 && index !== 0
                    ? "md:border-r"
                    : "border-r"
                }`}
              >
                <h1 className=" text-[#0e5246] font-bold py-1 text-sm ">
                  {singlePropertyData.features[key] == "none"
                    ? null
                    : singlePropertyData.features[key]}
                </h1>
                <h1 className=" text-[#858484] py-1 px-2 text-sm ">{key}</h1>
              </div>
            )):<p>no features found!</p>}
          </div>
          <div className="w-full grid grid-cols-2 justify-center">
            <div className="justify-items-center">
              <h1 className="text-[#00000071]">Status</h1>
              <h1 className="text-[black] font-bold mb-12 text-center">
                {singlePropertyData.status}
              </h1>
            </div>

            <div className="justify-items-center">
              <h1 className="text-[#00000071]">Area</h1>
              <h1 className="text-[black] font-bold mb-12 text-center">
                {singlePropertyData.area}
              </h1>
            </div>

            <div className="justify-items-center">
              <h1 className="text-[#00000071]">Furnished Status</h1>
              <h1 className="text-[black] font-bold mb-12 text-center">
                {singlePropertyData.furnishedStatus}
              </h1>
            </div>

            <div className="justify-items-center">
              <h1 className="text-[#00000071]">Address</h1>
              <h1 className="text-[black] font-bold mb-12 text-center">
                {singlePropertyData.address}
              </h1>
            </div>
          </div>

          <div className="justify-items-center">
              <h1 className="text-[#00000071]">contact</h1>
              <a href={`tel:${singlePropertyData.contactNumber}`}>
              <button className="mb-12 py-2 px-6 mt-2 border-2 bg-[#e1b400] rounded-full flex gap-3">
              <FontAwesomeIcon icon={faPhone} className="text-[#ffffffa8] self-center" />
              <h1 className="text-[#ffffff]">
              {singlePropertyData.contactNumber}
              </h1>
              </button>
              </a>
            </div>
          
        </div>
      </div>
    </div>
  );
}

// <div key={index} className="flex gap-1">
// {Object.entries(feature).map(([key, value]) => (
//   <div className="flex gap-1" key={key}>
//     <h1 className="font-bold text-[#155b54]">{value}</h1> {/* Value (e.g., 3) */}
//     <h1 className="font-thin">{key}</h1> {/* Key (e.g., Beds) */}
//     <h1 className="text-2xl text-[#00000040]">|</h1>
//   </div>

// ))}

// </div>

// {singlePropertyData.features.map((feature, index) => {
//   return (

//     <div key={index}>
//       {Object.keys(feature).map((key) => (
//         <div className="flex gap-1" key={key}>
//           <h1 className="font-bold text-[#155b54]">{feature[key]}</h1>
//           <h1 className="font-thin">{key}</h1>
//         </div>
//       ))}
//     </div>
//   );
// })}
