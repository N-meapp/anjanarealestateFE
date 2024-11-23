import { faAsterisk, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react"

export default function InputField({label,value,update,updatedData,objKey,type,emptyFields}){

    const [isNotNum,setIsNotNum] = useState(false)
    
    const [content,setContent] = useState(value)
    // const [data,setData] = useState(updatedData)

    // useEffect(()=>{

    // },[])

    const checkIsNumber =(x)=>{
        let regex = /[a-zA-Z]/;

        const testingNumb = regex.test(x)
        
        return testingNumb
    }

    const controlOnchange= (e)=>{

        const numberErr = document.getElementById('number-err')
        const numberRateErr = document.getElementById('numberrate-err')
        if(objKey=='contactNumber'){
            if(checkIsNumber(e.target.value)){
                numberRateErr.style.display = 'block'
            }else{
                numberRateErr.style.display = 'none'
            }
        }
    

        const obj = {...updatedData}
        const key = objKey0
        
        obj[key] = e.target.value

        
        setContent(e.target.value)
            update(obj)

    }

    return(
        <div className="w-full">
        <h1 className="mb-4 font-bold">{label}</h1>
        <input onChange={(e)=>{
            controlOnchange(e)
        }} className={`px-3 py-2 rounded-full bg-[#00000010] text-blue-gray-700 font-sans font-normal text-sm ${emptyFields.includes(objKey) && !content?'border-red-100 border':null}`} value={content} type={type}></input>
        <div className="">
        {emptyFields.includes(objKey) && !content?
                 
            <p className="text-red-400 font-thin text-xs mt-1"><FontAwesomeIcon icon={faCircleExclamation} /> This field is required</p>:null

        }

        {objKey=='contactNumber'?
            <p id="numberrate-err" className="text-red-400 font-thin text-xs mt-1 hidden"><FontAwesomeIcon icon={faCircleExclamation} />only numbers</p>:null
        }
        </div>
        </div>
    )
}