import { useEffect, useState } from "react";
import CategoryTable from "./CategoryTable";
import axios from "axios";
import Swal from "sweetalert2";


export default function AdminCategory(){

    
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    console.log(BASE_URL);

    const [deleted,setDeleted] = useState()

    const [table, setTable] = useState([]); 



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
    },[deleted]); 
    
    return(
        <div className="flex">

        {table.length?
            <CategoryTable categories={table} controlDelete={controlDelete} />
            :null
        }
        </div>
    )
}