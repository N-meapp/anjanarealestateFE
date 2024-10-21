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
  console.log(data, "...............................");

  const {isClicked, setIsClicked} = data

  const [updatedData, setUpdatedData] = useState(data ? data.data : null);

  console.log(updatedData, "updated....");

  const [imageDeleted, setImageDeleted] = useState(false);

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

  const saveEdited = async () => {
    const rate = updatedData.rate;
    updatedData.rate = +rate;
    const contactNumber = updatedData.contactNumber;
    updatedData.contactNumber = +contactNumber;

    const formData = new FormData();

    console.log(updatedData, "updated,datalllll");

    updatedData.photos.forEach((image, index) => {
      console.log(image,'images.......');
      
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

      if(response.data.data && response.data.success){
        Swal.fire({
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        }).then(()=>{
          setIsClicked(false)
        })
      }else{
        Swal.fire({
          icon: "warning",
          title: "Something went wrong",
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "warning",
        title: "something went wrong",
        text:'connect to your technical team',
        showConfirmButton: true,
      });
    }
  };

  const saveAdded = async () => {
    const rate = updatedData.rate;
    updatedData.rate = +rate;
    const contactNumber = updatedData.contactNumber;
    console.log(updatedData);
    
    updatedData.contactNumber = +contactNumber;

    const formData = new FormData();
    
    updatedData.photos.forEach((image, index) => {
      formData.append(`image`, image);
    });
    console.log(updatedData, "newly adding data11111111111111");


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

      if(response.data.data && response.data.success){
        Swal.fire({
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          setIsClicked(false)
        })
      }else{
        Swal.fire({
          icon: "warning",
          title: "Something went wrong",
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "warning",
        title: "something went wrong",
        text:'connect to your technical team',
        showConfirmButton: true,
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
          />
          <CategoryInputField
            label={"Category"}
            value={data.data ? data.data.category : ""}
            update={setUpdatedData}
            updatedData={updatedData}
            objKey={"category"}
          />

          <InputField
            label={"Rate"}
            value={data.data ? data.data.rate : ""}
            update={setUpdatedData}
            updatedData={updatedData}
            objKey={"rate"}
          />
          <InputField
            label={"Address"}
            value={data.data ? data.data.address : ""}
            update={setUpdatedData}
            updatedData={updatedData}
            objKey={"address"}
          />

          <InputField
            label={"Area"}
            value={data.data ? data.data.area : ""}
            update={setUpdatedData}
            updatedData={updatedData}
            objKey={"area"}
          />
          <InputField
            label={"Status"}
            value={data.data ? data.data.status : ""}
            update={setUpdatedData}
            updatedData={updatedData}
            objKey={"status"}
          />

          <InputField
            label={"Furnished Status"}
            value={data.data ? data.data.furnishedStatus : ""}
            update={setUpdatedData}
            updatedData={updatedData}
            objKey={"furnishedStatus"}
          />

          <InputField
            label={"Contact"}
            value={data.data ? data.data.contactNumber : ""}
            update={setUpdatedData}
            updatedData={updatedData}
            objKey={"contactNumber"}
          />
        </div>

        <FeaturesInputField
          data={data.data ? data.data.features : ""}
          update={setUpdatedData}
          updatedData={updatedData}
        />

        <ImageInputField
        data={data.data?data.data.photos:""}
          setImageDeleted={data.setImageDeleted}
          update={setUpdatedData}
          updatedData={updatedData}
        />

        <div
          onClick={() => {
            if (data.data) {
              saveEdited();
            } else {
              saveAdded();
            }
          }}
          className="cursor-pointer px-6 float-right mb-14 py-3 border-none rounded-full bg-[#000000] shadow-[#0000005f] shadow-md text-white text-sm text-center w-fit mt-14 font-bold"
        >
          SAVE
        </div>
      </div>
    </div>
  );
}
