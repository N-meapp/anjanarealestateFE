'use client'

import { useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import EditForm from './EditForm'
import { toast, ToastContainer } from 'react-toastify'
import FormBlog from './FormBlog'

export default function ModalBlog({singleProperty,setIsClicked,isClicked}) {
  
  const [imageDeleted, setImageDeleted] = useState(false);

  const notify = () => toast.success("Deleted successfully",{
    position:'top-right',
    autoClose:2000
  });


  useEffect(() => {
    if (imageDeleted) {
      notify();
      setImageDeleted(false);
    }
  }, [imageDeleted]);


  
  const handleClick = ()=>{
    if(!isClicked){
        // setIsClicked(false)
        setIsClicked(true)
    }
  }

  const handleDelete = (flag)=>{
    if(flag){
      setIsClicked(false)
    }else{
      setIsClicked(true)
    }
  }

  return (
    <div>
    <Dialog open={isClicked} onClose={()=>{
      handleDelete(false)
    }} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            
          <FormBlog data={singleProperty} setImageDeleted={setImageDeleted} isClicked={isClicked} setIsClicked={setIsClicked} handleDelete={handleDelete} />
          </DialogPanel>
        </div>
      </div>
      </Dialog> 
      <ToastContainer />
      </div>
  )
}
