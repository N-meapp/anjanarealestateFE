import axios from "axios";
import React, { useState } from "react";

function EachTableCategory({ item,setCurrentItem,setIsDeleted}) {

    const [isHidden,setIsHidden] = useState(item.hide)
    
    console.log(item,'itemmm');
    

    const updateStatus = ()=>{

        // setIsHidden(state)

        // const body = {
        //     hide:state
        // }
        axios.delete(`http://127.0.0.1:8000/api/Category_update/${item.id}/`).then(response => {
            console.log('vannuuuu',response.data);
            setIsDeleted(true)

          })
          .catch(error => {
            console.error('vanniillaa','Error:', error,);
          });
    }

  console.log(item);

  return (
    <>
      <tr className={`'bg-[#80808029]':'odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800  dark:border-gray-700'} border-b`}>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {item.Category_name}
        </th>
        <td className="px-6 py-4">
          <img
            src={`http://127.0.0.1:8000${item.Category_image}`}
            className=" w-10 h-10"
            alt=""
          />
        </td>
        {/* <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td> */}
        <td className="px-6 py-4 flex gap-5">
          <button onClick={()=>{
                setCurrentItem(item)
          }} className="bg-[#c8ffc8] p-2 rounded-full text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
            </svg>
          </button>
            {/* <button onClick={()=>{
                updateStatus()
            }}
             className="bg-[#fbafaf] p-2 rounded-full text-black">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
  <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
</svg>
            </button> */}
          
        </td>
      </tr>
    </>
  );
}

export default EachTableCategory;
