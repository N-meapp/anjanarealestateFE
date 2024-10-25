import { useState } from "react";
import InputField from "./InputField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function FeaturesInputField({ data, update, updatedData }) {
  const [key, setKey] = useState();
  const [value, setValue] = useState();
  console.log('feature data...',data);
  
  const [featuresObj, setFeaturesObj] = useState(data?data:{});

  const handleAdd = () => {
    const tempObj = featuresObj;

    if(key&&value){

      tempObj[key] = value;
  
      setFeaturesObj(tempObj);
  
      console.log(updatedData,'updated dataa');

        if(updatedData){
          updatedData.features = tempObj;
          update(updatedData);

        }else{
          const updatedData = {features:null}
          updatedData.features = tempObj
          update(updatedData)
        }
      
  
      setKey("");
      setValue("");

    }else{
      
    }
  };

  const handleDelete=(oldKey)=>{


      // const tempObj = featuresArray
      
     setFeaturesObj(featuresObj)  
     console.log(featuresObj);

     const temp = {}
     for (const [key, value] of Object.entries(featuresObj)) {
      console.log(`${key}: ${value}`);
      if(key!=oldKey){
        temp[key] = value
      }
    }
        
    console.log(temp);
    setFeaturesObj(temp)

    updatedData.features = temp;
    update(updatedData);


    

  }

  return (
    <div className="mt-10 w-full">
      <div className="w-full">
        <h1 className="font-bold">Features</h1>
        <div className="w-full justify-around rounded-xl bg-[#f1eded1a] pt-10 px-10">
          <div className="flex gap-1 mb-5 relative">
            <button
              onClick={() => {
                handleAdd();
              }}
              className="py-1 px-5 rounded-full  bg-black text-[#ffffff8c] absolute top-1 right-1 hover:py-0.5 hover:top-1.5 hover:right-2 hover:px-4 shadow-md"
            >
              add
            </button>
            <input
              onChange={(e) => {
                setValue(e.target.value);
              }}
              className=" px-3 py-2  w-1/6 border-none rounded-l-full bg-[#00000010]  text-center"
              value={value}
              placeholder="count"
            ></input>
            <input
              onChange={(e) => {
                setKey(e.target.value);
              }}
              className=" px-3 py-2 w-full pr-20 border-none rounded-r-full bg-[#00000010] "
              value={key}
              placeholder="type your feature..."
            ></input>
          </div>
          {Object.entries(featuresObj).map(([key, value]) => (
            <div className="flex gap-1 mb-5">
              <div className="px-3 py-2 w-1/6 border-none h-10 text-center rounded-l-full bg-[#afaeae10] shadow-md text-blue-gray-700 font-sans text-sm font-bold">
                {value}
              </div>
              <div className="px-3 py-2 w-full border-none h-10 rounded-r-full bg-[#afaeae10] shadow-md relative text-blue-gray-700 font-sans text-sm font-bold">
                <FontAwesomeIcon
                onClick={()=>{
                  handleDelete(key)
                }}
                  icon={faCircleXmark}
                  className="text-red-700 w-6 h-5 absolute right-2 cursor-pointer bg-white rounded-full "
                />
                {key}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// <InputField
//             label={"Features"}
//             value={data ? data.features : ""}
//             update={setUpdatedData}
//             updatedData={updatedData}
//             objKey={"features"}
//           />
