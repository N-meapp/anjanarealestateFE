import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Dialog,
} from "@material-tailwind/react";
import InputField from "./InputField";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constats/Constats";
import ImageInputField from "./ImageInputField";
import { toast, ToastContainer } from "react-toastify";
import FeaturesInputField from "./FeaturesInputField";
import Swal from "sweetalert2";
import { CategoryInputField } from "./CategoryInputField";
import InputTextarea from "./InputTextarea";

export default function FormBlog(data) {
  const { isClicked, setIsClicked, handleDelete } = data;

  const [isSaveClicked,setIsSaveClicked] = useState(false)

  const [updatedData, setUpdatedData] = useState(data ? data.data : null);

  const [imageDeleted, setImageDeleted] = useState(false);

  const [emptyFields,setEmptyFields] = useState([])

  const notify = () =>
    toast.success("Deleted successfully", {
      position: "bottom-center",
      autoClose: 1000,
    });

  useEffect(() => {
    if (imageDeleted) {
      notify();
      setImageDeleted(false);
    }
  }, [imageDeleted]);

  const handleValidation = () => {
    // console.log(updatedData, "for validationssssss");
    const loopArr = [
      'category',
      'title',
      'description'
    ];

    if(updatedData){

      const outputArr = []

      for(let i=0;i<loopArr.length;i++){
  
        const res1 = loopArr[i] in updatedData
        const res2 = updatedData[loopArr[i]]
        console.log('not validdddd...',loopArr[i]);
        if(!res1 || !res2){
          
          outputArr.push(loopArr[i])
        }
      }
    console.log(outputArr,'outtttputttt');
    setEmptyFields(outputArr)

    if(outputArr.length==0){
        return true
    }
    return false
    
    }else{
setEmptyFields(loopArr)
return false;
    }
  
  };

  const saveEdited = async () => {
    setIsSaveClicked(true)
    const result = handleValidation();

    if (result) {
      // const rate = updatedData.rate;
      // updatedData.rate = +rate;
      const contactNumber = updatedData.contactNumber;
      updatedData.contactNumber = +contactNumber;

      const formData = new FormData();

      updatedData.photos.forEach((image, index) => {
        formData.append(`image`, image); // 'photos[]' is the key for the array of images
      });

      try {
        const response = await axios.post(
          `${BASE_URL}/admin/updateProperty/${updatedData._id}`,
          formData,
          { params: updatedData },
          // updatedData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.data.data && response.data.success) {
          Swal.fire({
            icon: "success",
            title: "Saved succeccfully",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            setIsClicked(false);
          });
        } else {
          Swal.fire({
            icon: "warning",
            title: "Something went wrong",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        console.log(error);
        
        Swal.fire({
          icon: "warning",
          title: "something went wrong",
          text: "connect to your technical team",
          showConfirmButton: true,
        });
      }
    }else{
      console.log(result,'result.result..');
      
      Swal.fire({
        title: "Oops!",
        text: "Please check the fields",
        icon: "info"
      });
    }
    setIsSaveClicked(false)
  };

  const saveAdded = async () => {
    setIsSaveClicked(true)

    console.log(updatedData,'updateded .... dataaa');

    const currentDate = new Date()
    
    let body = {

      title:updatedData.title,
      description:updatedData.description,
      category:updatedData.category,
      date: currentDate

    }
    
    const result = handleValidation();

    if (result) {
      // const rate = updatedData.rate;
      // updatedData.rate = +rate;
      // const contactNumber = updatedData.contactNumber;

      // updatedData.contactNumber = +contactNumber;

      // const formData = new FormData();

      // updatedData.photos.forEach((image, index) => {
      //   formData.append(`image`, image);
      // });

      try {
        const response = await axios.post(
          `${BASE_URL}/admin/add-blog`,
          body
        );

        if (response.data.data && response.data.success) {
          Swal.fire({
            icon: "success",
            title: "Saved successfully",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            setIsClicked(false);
            
          });
        } else {
          Swal.fire({
            icon: "warning",
            title: "Something went wrong",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        console.log(error);
        
        Swal.fire({
          icon: "warning",
          title: "something went wrong",
          text: "connect to your technical team",
          showConfirmButton: true,
        });
      }
    }else{
      console.log(result,'resuuuuuu');
      
      Swal.fire({
        title: "Oops!",
        text: "Please check the fields",
        icon: "info"
      });
    }

    setIsSaveClicked(false)
  };

  return (
    <div>
      <div className="p-8">
        <h1 className="font-bold text-lg mb-5 text-center text-[#004b3c]">
          {data.data ? "EDIT" : "ADD"}
        </h1>
        <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10">
          <InputField
            label={"Title"}
            value={data.data ? data.data.name : ""}
            update={setUpdatedData}
            updatedData={updatedData}
            objKey={"title"}
            emptyFields = {emptyFields}
          />
           

          {/* <InputField
            label={"Category"}
            value={data.data ? data.data.rate : ""}
            update={setUpdatedData}
            updatedData={updatedData}
            objKey={"rate"}
            emptyFields = {emptyFields}
          /> */}
          <CategoryInputField
            label={"Category"}
            value={data.data ? data.data.category : ""}
            update={setUpdatedData}
            updatedData={updatedData}
            objKey={"category"}
            emptyFields = {emptyFields}
          />

        </div>

        <InputTextarea
            label={"Description"}
            value={data.data ? data.data.rate : ""}
            update={setUpdatedData}
            updatedData={updatedData}
            objKey={"description"}
            emptyFields = {emptyFields}
          />

  
        <div className="flex gap-5 float-right">
       
          <div
            onClick={() => {
              handleDelete(true);
            }}
            className="cursor-pointer px-6 float-right mb-14 py-3 rounded-full hover:shadow-[#0000005f] border-red-400 border-2 transition-all duration-500 hover:shadow-md hover:bg-red-400 hover:text-white text-sm text-center w-fit mt-14 font-bold"
          >
            cancel
          </div>
          <div
            onClick={() => {
              if(!isSaveClicked){
              if (data.data) {
                
                saveEdited();
              } else {
                saveAdded();
              }
              }
            }}
            className={`${isSaveClicked?'bg-white text-black':'bg-[#000000] text-white'} cursor-pointer px-6 float-right mb-14 py-3 border-none rounded-full hover:bg-white hover:text-black transition-all duration-500 shadow-[#0000005f] shadow-md  text-sm text-center w-fit mt-14 font-bold`}
          >
            SAVE
          </div>
          {isSaveClicked?
          <div className="flex absolute bottom-0 mb-6 right-0 mr-14 gap-2">
      <h1 className="  text-sm text-green-400 font-bold">saving</h1>
      <div className="rounded-full w-5 h-5 spinner spin">
        <div className="w-4 h-4 bg-white rounded-full "></div>
      </div>
          </div>
      :null
      }
        </div>
      </div>
      
    </div>
  );
}
