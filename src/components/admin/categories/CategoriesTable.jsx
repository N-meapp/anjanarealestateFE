import React, { useEffect, useState } from "react";
import EachTableCategory from "./EachTableCategory";
import axios from "axios";
import EditCategory from "./EditCategory";

function CategoriesTable() {
  const [items, setItems] = useState([]);

  const [categoryUpdated,setCategoryUpdated] = useState(false)
  const [isDeleted,setIsDeleted] = useState()
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/CategoryItemsList/')
      .then((response) => {
        console.log("vannuuuu", response.data);
        setItems(response.data);
      })
      .catch((error) => {
        console.error("vanniillaa", "Error:", error);
      });
  }, [isDeleted,categoryUpdated]);

  return (
    <div>
      {currentItem ? (
        <EditCategory item={currentItem} setItem={setCurrentItem} setCategoryUpdated={setCategoryUpdated} />
      ) : (
        <div>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Category Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                return (
                  <div>
                    <EachTableCategory
                      item={item}
                      setCurrentItem={setCurrentItem} setIsDeleted={setIsDeleted}                    />
                  </div>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CategoriesTable;
