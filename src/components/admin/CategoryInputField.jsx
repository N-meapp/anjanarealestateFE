import { Select, Option } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../Constats/Constats";

export function CategoryInputField({label,value,update,updatedData,objKey,type}) {

    const [catArray,setCatArray] = useState([])
    const [category,setCategory] = useState(value)

    const fetchData = async () => {
        console.log('categoryy');
        
        try {
            const response = await axios.get(`${BASE_URL}/admin/categoryList`);
            console.log('category. array...',response.data.data);
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
        updatedData.category = data
        update(updatedData)
    }


  return (
    <div className="w-full">
        <h1 className="mb-4 font-bold">{label}</h1>
      <Select className="px-3 py-2 border-none dropdown-category rounded-full bg-[#00000010]" variant="standard" value={value}>

      
      {
        
        catArray.map((cat)=>{
            return(
                <Option onClick={()=>{
                    addCategory(cat.categoryName)
                }}>{cat.categoryName}</Option>
            )
      })}

      </Select>
    </div>
  );
}