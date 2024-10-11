import { useEffect, useState } from "react";
import { Table } from "./Table";
import axios from "axios";
import EditModal from "./EditModal";
import Swal from "sweetalert2";
import Search from "../Search";

function AdminProperty() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  console.log(BASE_URL);

  const [table, setTable] = useState([]);
  const [singleProperty, setSingleProperty] = useState();
  const [deleted, setDeleted] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [isAddClicked, setIsAddClicked] = useState(false);

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

  const deleteConfirmed = async (id) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/admin/deleteProperty/${id}`
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
      confirmButtonColor: "#3085d6",
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
    console.log("fetchData called..");

    try {
      const response = await axios.get(`${BASE_URL}/users/allPropertyList`);

      setTable(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [deleted]);

  return (
    <div>
      <div className="w-full h-20 flex justify-around items-center">
        <div className="flex gap-2">
          <input className="px-4 py-2 rounded-full bg-[#ffffff] shadow-lg"></input>
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
          ADD
        </button>
      </div>
      <div className="p-5 w-full">
        {table.length ? (
          <Table
            properties={table}
            controlEdit={controlEdit}
            controlDelete={controlDelete}
          />
        ) : null}
      </div>
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
        <EditModal
          singleProperty={null}
          setIsClicked={setIsAddClicked}
          isClicked={isAddClicked}
        />
      ) : null}
    </div>
  );
}

export default AdminProperty;
