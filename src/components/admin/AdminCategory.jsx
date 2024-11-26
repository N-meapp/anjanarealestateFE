import { useEffect, useState } from "react";
import CategoryTable from "./CategoryTable";
import axios from "axios";
import Swal from "sweetalert2";


export default function AdminCategory(){

    
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    console.log(BASE_URL);

    const [newcategory,setNewCategory] = useState()
    const [deleted,setDeleted] = useState()
    const [isAddClicked,setIsAddClicked] = useState(false)

    const [table, setTable] = useState([]); 


    const handleAdd=async()=>{
      setIsAddClicked(true)
      try{
        const response =await axios.post(`${BASE_URL}/admin/addCategory`,{categoryName:newcategory})

        if(response){
          console.log(response);
          setIsAddClicked(false)
          setNewCategory('')
          
        }
      } catch(error){

      }
    } 


    const deleteConfirmed = async (name)=> {
        try {
          const response = await axios.delete(
            `${BASE_URL}/admin/deleteCategory`,{params:{name:name}}
          );
          console.log("dfdfddddd", response);
          setDeleted(true);
          if (response) {
            return true;
          }
        } catch (error) {
          console.log(error);
    
          return false;
        }
      };
    
      const controlDelete = async (name) => {
        setDeleted(false);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            const status = await deleteConfirmed(name);
    
            console.log(status, "statuss");
    
            if (status) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            } else {
              Swal.fire({
                title: "Something went wrong!",
                text: "",
                icon: "warning",
              });
            }
          }
        });
      };


    const fetchData = async () => {
        console.log('categoryy');
        
        try {
            const response = await axios.get(`${BASE_URL}/admin/categoryList`);
            console.log(response.data.data);
            setTable(response.data.data);  
        } catch (error) {
            console.log(error); 
        }
    };

    useEffect(() => {
        fetchData(); 
    },[deleted,isAddClicked]); 
    
    return(
        <div className="w-1/2 mx-auto mt-[6rem]">
        <div className="flex gap-10">
        <input onChange={(e)=>{
          setNewCategory(e.target.value)
        }} className="px-4 h-fit w-full py-2 shadow-md rounded-full" placeholder="add category here..." value={newcategory}></input>
        <button
          onClick={() => {
            handleAdd()
          }}
          className="px-4 h-fit py-2 bg-black text-white text-sm font-bold rounded-full mb-10"
        >
          ADD
        </button>
        </div>

        {table.length?
            <CategoryTable categories={table} controlDelete={controlDelete} />
            :null
        }
        </div>
    )
}