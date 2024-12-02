import { useEffect, useState } from "react";
import { Table } from "./Table";
import EditModal from "./EditModal";
import Swal from "sweetalert2";
import Search from "../Search";
import { BASE_URL } from "../../Constats/Constats";
import axios from "axios";
import { TableBlog } from "./TableBlog";
import ModalBlog from "./ModalBlog";

function AdminBlog() {
    
  const [table, setTable] = useState([]);
  const [tableCopy,setTableCopy] = useState([])
  const [singleProperty, setSingleProperty] = useState();
  const [deleted, setDeleted] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [isAddClicked, setIsAddClicked] = useState(false);
  const [isNoData,setIsNodData] = useState(false)

  const controlEdit = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/users/singleProperty`, {
        params: { propertyId: id },
      });
      console.log(response.data.data);
      setSingleProperty(response.data.data);
      setIsEditClicked(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (value)=>{

    setIsNodData(false)
   
    let flag = false

    const key = value.trim()
    if(key){
      flag = true
    }
    const searchArray = []

    for(let i=0;i<tableCopy.length;i++){
      if(tableCopy[i].name.includes(key)){
        searchArray.push(tableCopy[i])
    }
  }
  if(searchArray.length>0){
    setTable(searchArray)
  }else if(flag){
    setIsNodData(true)
  }else{
    setTable(tableCopy)
  }

  }

  const deleteConfirmed = async (id) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/admin/delete-blog/${id}`
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

  const controlDelete = async (id) => {
    setDeleted(false);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const status = await deleteConfirmed(id);

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

    try {

        const response = await axios.get(`${BASE_URL}/admin/blog-list`)
      

      setTable(response.data.data);
      setTableCopy(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [deleted,isAddClicked,isEditClicked]);

  return (
    <div>
      <div className="w-full h-20 flex justify-around items-center">
        <div className="flex gap-2">
          <input onChange={(e)=>{
            handleSearch(e.target.value)
          }} placeholder="search here..." className="px-4 py-2 rounded-full bg-[#ffffff] shadow-lg"></input>
          <button className="px-4 h-fit py-2 bg-[#0000002c] shadow-lg text-black text-sm font-bold rounded-full">
            search
          </button>
        </div>
        <button
          onClick={() => {
            setIsAddClicked(true);
          }}
          className="px-4 h-fit py-2 bg-black text-white text-sm font-bold rounded-full"
        >
          ADD this blog
        </button>
      </div>
     


      {isNoData?
        <div>
        
      <h1 className="font-bold text-2xl text-center text-[#7d7d7d] mt-40">No result found!</h1>
        </div>:
        
             <div className="p-5 w-full">
             {table.length ? (
               <TableBlog
                 properties={table}
                 controlEdit={controlEdit}
                 controlDelete={controlDelete}
               />
             ) : null}
             </div>
        
      }


      {isEditClicked ? (
        singleProperty.name ? (
          <EditModal
            singleProperty={singleProperty}
            setIsClicked={setIsEditClicked}
            isClicked={isEditClicked}
          />
        ) : null
      ) : null}
      {isAddClicked ? (
        <ModalBlog
          singleProperty={null}
          setIsClicked={setIsAddClicked}
          isClicked={isAddClicked}
        />
      ) : null}
    </div>
  );
}

export default AdminBlog;

