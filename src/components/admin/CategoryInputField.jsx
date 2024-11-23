import { Select, Option } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../Constats/Constats";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

export function CategoryInputField({label,value,update,updatedData,objKey,type,emptyFields}) {

    const [catArray,setCatArray] = useState([])
    const [category,setCategory] = useState(value)

    const fetchData = async () => {
        
        try {
            const response = await axios.get(`${BASE_URL}/admin/categoryList`);
            setCatArray(response.data.data)
        } catch (error) {
            console.log(error); 
        }
    };

    useEffect(() => {
        fetchData(); 
    },[]); 

    const addCategory = (data)=>{

        
        setCategory(data)
        if(updatedData){
            updatedData.category = data
            update(updatedData)
        }else{
            update({category:data})
        }
    }


  return (
    <div className="w-full">
        <h1 className="mb-3 font-bold">{label}</h1>
      <Select className={`px-3 py-1 dropdown-category rounded-full bg-[#00000010] ${emptyFields.includes(objKey) && !category?'border-red-100 border':'border-none'}`} variant="standard" value={category}>

      
      {
        
        catArray.map((cat)=>{
            return(
                <Option onClick={()=>{
                    addCategory(cat.categoryName)
                }}>{cat.categoryName}</Option>
            )
      })}

      </Select>
      {emptyFields.includes(objKey) && !category?
                 
        <p className="text-red-400 font-thin text-xs mt-1"><FontAwesomeIcon icon={faCircleExclamation} /> This field is required</p>:null

    }
    </div>
  );
}