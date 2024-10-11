import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Dialog,
  } from "@material-tailwind/react";
import InputField from "./InputField";
import { useState } from "react";
import axios from "axios";
   
  export default function EditForm(data) {
    console.log(data,'...............................');
    
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const [updatedData,setUpdatedData] = useState(data?data.data:null)

    console.log(updatedData,'updated....');
    

    const saveEdited =async ()=>{

      try {
        const response = await axios.post(`${BASE_URL}/admin/updateProperty/${updatedData._id}`,{updatedData});
        
        console.log(response.data.data);
        
    } catch (error) {
        console.log(error); 
    }

    }

    const saveAdded = async()=>{
      
      try {
        const response = await axios.post(`${BASE_URL}/admin/addPrpertyData`);
        
        console.log(response.data.data);
        
    } catch (error) {
        console.log(error); 
    }
    }

    return (
        <div className="p-8">

        <h1 className="font-bold text-lg mb-5 text-center text-[#00000083]">{data?'Edit':'Add'}</h1>

       <div className="w-full md:flex gap-5 mb-10">
       <InputField label={'Name'} value={data.data?data.data.name:''} update={setUpdatedData} updatedData={updatedData} objKey={'name'} />
       <InputField label={'Category'} value={data.data?data.data.category:''}  update={setUpdatedData} updatedData={updatedData} objKey={'category'} />
       </div>
       <div className="w-full md:flex gap-5 mb-10">
       <InputField label={'Rate'} value={data.data?data.data.rate:''}  update={setUpdatedData} updatedData={updatedData} objKey={'rate'} />
       <InputField label={'Address'} value={data.data?data.data.address:''}  update={setUpdatedData} updatedData={updatedData} objKey={'address'} />
       </div>
       <div className="w-full md:flex gap-5 mb-10">
       <InputField label={'Area'} value={data.data?data.data.area:''}  update={setUpdatedData} updatedData={updatedData} objKey={'area'} />
       <InputField label={'Status'} value={data.data?data.data.status:''}  update={setUpdatedData} updatedData={updatedData} objKey={'status'} />
       </div>
       <div className="w-full md:flex gap-5 mb-10">
       <InputField label={'Features'} value={data.data?data.data.features:''}  update={setUpdatedData} updatedData={updatedData} objKey={'features'} />
       <InputField label={'Furnished Status'} value={data.data?data.data.furnishedStatus:''}  update={setUpdatedData} updatedData={updatedData} objKey={'furnishedStatus'} />
       
       </div>
       <div onClick={()=>{
        if(data){
          saveEdited()
        }else{
          saveAdded()
        }
       }} className="cursor-pointer px-3 py-2 border-none rounded-full bg-[#000000] shadow-md text-white text-sm text-center font-bold">SAVE</div>
       </div>
       
    );
  }