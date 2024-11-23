import axios from "axios";
import { useEffect, useState } from "react"
import { BASE_URL } from "../../Constats/Constats";

export default function Dashboard(){

  const [propertyCount,setPropertyCount] = useState()
  const [categoryCount,setCategoryCount] = useState()
  const [categoryArray,setCategoryArray] = useState([])
  const [countArray,setCountArray] = useState([])


  const fetchPropertyCount=async ()=>{
    try {
      const response = await axios.get(`${BASE_URL}/admin/getPropertyCount`);

      if (response.data && response.data.count) {
        setPropertyCount(response.data.count);
      } else {
        
        setPropertyCount(0)
        
        console.error("Unexpected response format", response.data);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }

  const fetchCategoryCount=async ()=>{
    try {
      const response = await axios.get(`${BASE_URL}/admin/categoryList`);

      if (response.data) {
        
        setCategoryCount(response.data.data.length);
      } else {
        
        setPropertyCount(0)
        
        console.error("Unexpected response format", response.data);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }


  const fetchCategoryWiseCount=async ()=>{
    try {
      const response = await axios.get(`${BASE_URL}/admin/getCategoryWiseCount`);

      if (response.data) {
        const category = []
        const count = []
        for(let i=0;i<response.data.data.length;i++){
          category.push(response.data.data[i]._id)
          count.push(response.data.data[i].count)
        }

        setCategoryArray(category)
        setCountArray(count)

      } else {
                
        console.error("Unexpected response format", response.data);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }



  useEffect(()=>{
    fetchPropertyCount()
    fetchCategoryCount()
    fetchCategoryWiseCount()
  },[])

    return(
        <div>
        <div className='flex mt-20 justify-around'>
        <div className='h-40 w-1/3 bg-[white] shadow-lg rounded-2xl'>
          <h1 className='font-bold text-xl text-center mt-5 text-[#000000a9]'>Total Properties</h1>
          <h1 className='font-bold text-3xl text-center mt-5 text-[#000000]'>{propertyCount}</h1>


        </div>
        <div className='h-40 w-1/3 bg-[white]  shadow-lg rounded-2xl'>
        <h1 className='font-bold text-xl text-center mt-5 text-[#000000a9]'>Total Categories</h1>
          <h1 className='font-bold text-3xl text-center mt-5 text-[#000000]'>{categoryCount}</h1>
        </div>
        </div>
        <div className='w-4/5 mt-10 mx-auto border-[#00000033] border-2 rounded-3xl flex p-10 gap-9'>
        <div className='w-4/6'>
        <h1 className='font-bold text-lg text-center text-[#000000a9] '>Categories</h1>
        {categoryArray.map((name)=>{
          return(
            <h1 className='font-medium text-base text-center mt-5 text-[#000000a9] p-3 bg-white rounded-full shadow-md'>{name}</h1>
          )
        })}
        </div>
        <div className='w-2/6'>
        <h1 className='font-bold text-lg text-center text-[#000000a9]'>count</h1>
        {countArray.map((count)=>{
          return(
            <h1 className='font-bold text-base text-center mt-5 text-[#000000a9] p-3 bg-white rounded-full shadow-md'>{count}</h1>
          )
        })}
        </div>
        </div>
        </div>
    )
}