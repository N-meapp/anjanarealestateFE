import { useState } from "react"

export default function InputField({label,value,update,updatedData,objKey}){
    const [content,setContent] = useState(value)
    // const [data,setData] = useState(updatedData)

    const controlOnchange= (e)=>{
        const obj = {...updatedData}
        const key = objKey
        
        obj[key] = e.target.value

        
        setContent(e.target.value)
            update(obj)
    }

    return(
        <div className="w-full">
        <h1 className="mb-4 font-bold">{label}</h1>
        <input onChange={(e)=>{
            controlOnchange(e)
        }} className=" px-3 py-2 border-none rounded-full bg-[#00000010] shadow-md" value={content}></input>
        </div>
    )
}