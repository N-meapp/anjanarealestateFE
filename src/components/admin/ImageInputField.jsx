import { faCircleExclamation, faCircleXmark, faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function ImageInputField({data,setImageDeleted,update,updatedData,emptyFields}){

    const [imageArray,setImageArray]  = useState(data?data:[])
    const [imageFileArray,setImageFileArray] = useState(data?data:[])
    const [image,setImage] = useState('')
    const [imageUrl,setImageUrl] = useState('')

    console.log(imageFileArray,'araaaaaaaaaay...');
    

    const handleFileInputChange=(value)=>{
        console.log(value,'value....');

        const tempArray = imageArray
        const tempFile = imageFileArray
        const image = value[0]
        setImage(image)
        const url = URL.createObjectURL(image)


        setImageUrl(url)
        console.log('imageurl',imageUrl);
        tempArray.push(url)
        tempFile.push(image)
        setImageArray(tempArray)
        setImageFileArray(tempFile)
        console.log(updatedData,'updated..data...');
        updatedData.photos = imageFileArray
        update(updatedData)
        

    }


    const handleDelete=(index)=>{

        const tempArray = []
        const tempFile = []


       for(let i=0;i<imageArray.length;i++){
        if(i!=index){
            tempArray.push(imageArray[i])
            tempFile.push(imageFileArray[i])
        }
       }
       
       console.log(tempFile,'temp....');
       
       setImageDeleted(true)
       setImageArray(tempArray)
       setImageFileArray(tempFile)
       updatedData.photos = tempFile
       update(updatedData)

    }
  

    return(
    // <div className="w-[90%] mx-auto md:flex mt-16 gap-5">
    <div>
  <div className="w-[90%] mt-16 justify-items-center grid grid-cols-4 mx-auto">
  <div>
  
  <label
    htmlFor="dropzone-file"
    className="added-image w-fit px-4 flex flex-col h-fit self-center bg-no-repeat bg-contain bg-center border-none rounded-xl bg-[#00000010] shadow-md cursor-pointer"
    >
        <div className="flex items-center gap-2 justify-around pt-2 pb-2">
        
          <FontAwesomeIcon icon={faImage} />
          <p className="text-sm text-[#0000008b] dark:text-[#00000076]">
            <span className="font-semibold text-xs">choose image</span>
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          name="image"
          className="hidden"
          onChange={(e)=>{
            handleFileInputChange(e.target.files);
          }}
        />
        </label>
        {emptyFields.includes('photos') && imageArray.length==0?
                 
          <p className="text-red-400 font-thin text-xs mt-2"><FontAwesomeIcon icon={faCircleExclamation} /> This field is required</p>:null

      }
       <p className="text-gray-600 font-thin text-xs mt-2"> Max 5 images only allowed</p>
  </div>

  {imageArray.map((singleUrl,index)=>{
    return(
        <div className="w-auto h-auto relative">
        <FontAwesomeIcon icon={faCircleXmark} className="text-red-700 absolute -top-1 cursor-pointer -right-1 bg-white rounded-full" onClick={()=>{handleDelete(index)}} />
        <img src={`${singleUrl}`} className="h-24 rounded-xl mb-4">
        </img>
        </div>
    )
  })}
  
  </div>
  </div>

)
}