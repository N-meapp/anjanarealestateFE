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
   
  export default function AddProperty() {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const [updatedData,setUpdatedData] = useState()

    console.log(updatedData,'updated....');
    

    const controlSave =async ()=>{
      
      try {
        const response = await axios.post(`${BASE_URL}/admin/updateProperty/${updatedData._id}`,);
        
        setTable(response.data.data);  
    } catch (error) {
        console.log(error); 
    }

    }

    return (
        <div className="p-8">

        <h1 className="font-bold text-lg mb-5 text-center text-[#00000083]">Edit</h1>

       <div className="w-full md:flex gap-5 mb-10">
       <InputField label={'Name'} update={setUpdatedData} updatedData={updatedData} objKey={'name'} />
       <InputField label={'Category'}  update={setUpdatedData} updatedData={updatedData} objKey={'category'} />
       </div>
       <div className="w-full md:flex gap-5 mb-10">
       <InputField label={'Rate'} update={setUpdatedData} updatedData={updatedData} objKey={'rate'} />
       <InputField label={'Address'} update={setUpdatedData} updatedData={updatedData} objKey={'address'} />
       </div>
       <div className="w-full md:flex gap-5 mb-10">
       <InputField label={'Area'} update={setUpdatedData} updatedData={updatedData} objKey={'area'} />
       <InputField label={'Status'} update={setUpdatedData} updatedData={updatedData} objKey={'status'} />
       </div>
       <div className="w-full md:flex gap-5 mb-10">
       <InputField label={'Features'} update={setUpdatedData} updatedData={updatedData} objKey={'features'} />
       <InputField label={'Furnished Status'} update={setUpdatedData} updatedData={updatedData} objKey={'furnishedStatus'} />
       
       </div>
       <div onClick={()=>{
        // controlSave()
       }} className="cursor-pointer px-3 py-2 border-none rounded-full bg-[#000000] shadow-md text-white text-sm text-center font-bold">SAVE</div>
       </div>
       
    );
  }