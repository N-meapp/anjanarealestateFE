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

export default function EditForm(data) {
  const { isClicked, setIsClicked, handleDelete } = data;

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
    console.log(updatedData, "for validationssssss");
    const loopArr = [
      'address',
      'area',
      'category',
      'contactNumber',
      'furnishedStatus',
      'name',
      'photos',
      'rate',
      'status',
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
      console.log('huuuuuuuuuu');
      
      let regex = /[a-zA-Z]/;
      const rate = +updatedData.rate
      const contact = +updatedData.contactNumber
      console.log('ajaj',rate,contact);
      const resultRate = regex.test(rate)
      const resultContact = regex.test(contact)
      console.log(resultRate,resultContact,'hummmmmm');
      
      if(!resultRate && !resultContact){
        return true
      }
      
    }
    return false
    
    }else{
      console.log('hahhhhhhhh');
setEmptyFields(loopArr)
return false;
    }
  
  };

  const saveEdited = async () => {
    const result = handleValidation();

    if (result) {
      const rate = updatedData.rate;
      updatedData.rate = +rate;
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
  };

  const saveAdded = async () => {
    const result = handleValidation();

    if (result) {
      const rate = updatedData.rate;
      updatedData.rate = +rate;
      const contactNumber = updatedData.contactNumber;

      updatedData.contactNumber = +contactNumber;

      const formData = new FormData();

      updatedData.photos.forEach((image, index) => {
        formData.append(`image`, image);
      });

      try {
        const response = await axios.post(
          `${BASE_URL}/admin/addPropertyData`,
          formData,
          { params: updatedData },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
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
  };

  return (
    <div>
      <div className="p-8">
        <h1 className="font-bold text-lg mb-5 text-center text-[#004b3c]">
          {data.data ? "EDIT" : "ADD"}
        </h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          <InputField
            label={"Name"}
            value={data.data ? data.data.name : ""}
            update={setUpdatedData}
            updatedData={updatedData}
            objKey={"name"}
            emptyFields = {emptyFields}
          />
          <CategoryInputField
            label={"Category"}
            value={data.data ? data.data.category : ""}
            update={setUpdatedData}
            updatedData={updatedData}
            objKey={"category"}
            emptyFields = {emptyFields}
          />

          <InputField
            label={"Rate"}
            value={data.data ? data.data.rate : ""}
            update={setUpdatedData}
            updatedData={updatedData}
            objKey={"rate"}
            emptyFields = {emptyFields}
          />
          <InputField
            label={"Address"}
            value={data.data ? data.data.address : ""}
            update={setUpdatedData}
            updatedData={updatedData}
            objKey={"address"}
            emptyFields = {emptyFields}
          />

          <InputField
            label={"Area"}
            value={data.data ? data.data.area : ""}
            update={setUpdatedData}
            updatedData={updatedData}
            objKey={"area"}
            emptyFields = {emptyFields}
          />
          <InputField
            label={"Status"}
            value={data.data ? data.data.status : ""}
            update={setUpdatedData}
            updatedData={updatedData}
            objKey={"status"}
            emptyFields = {emptyFields}
          />

          <InputField
            label={"Furnished Status"}
            value={data.data ? data.data.furnishedStatus : ""}
            update={setUpdatedData}
            updatedData={updatedData}
            objKey={"furnishedStatus"}
            emptyFields = {emptyFields}
          />

          <InputField
            label={"Contact"}
            value={data.data ? data.data.contactNumber : ""}
            update={setUpdatedData}
            updatedData={updatedData}
            objKey={"contactNumber"}
            emptyFields = {emptyFields}
          />
        </div>

        <FeaturesInputField
          data={data.data ? data.data.features : ""}
          update={setUpdatedData}
          updatedData={updatedData}
        />

        <ImageInputField
          data={data.data ? data.data.photos : ""}
          setImageDeleted={data.setImageDeleted}
          update={setUpdatedData}
          updatedData={updatedData}
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
              if (data.data) {
                saveEdited();
              } else {
                saveAdded();
              }
            }}
            className="cursor-pointer px-6 float-right mb-14 py-3 border-none rounded-full bg-[#000000] hover:bg-white hover:text-black transition-all duration-500 shadow-[#0000005f] shadow-md text-white text-sm text-center w-fit mt-14 font-bold"
          >
            SAVE
          </div>
        </div>
      </div>
    </div>
  );
}
