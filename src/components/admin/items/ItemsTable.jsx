import React, { useEffect, useState } from "react";
import EachTableItem from "./EachTableItem";
import axios from "axios";
import EditItem from "./EditItem";

function ItemsTable(){


    const [items,setItems] = useState([])

    const [itemsUpdated,setItemsUpdated] = useState(false)

    const [currentItem, setCurrentItem] = useState(null);

        useEffect(()=>{

    axios.get('http://127.0.0.1:8000/api/MenuItemsList/')
  .then(response => {
    console.log('vannuuuu',response.data);
    setItems(response.data)
  })
  .catch(error => {
    console.error('vanniillaa','Error:', error,);
  });

        },[itemsUpdated])


    return(
        <div>
    {currentItem ? (
        <EditItem item={currentItem} setItem={setCurrentItem} setItemsUpdated={setItemsUpdated} />
      ) : (
        <div>
<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Image
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        {items.map((item)=>{
            return(
            
            <EachTableItem item = {item} setCurrentItem={setCurrentItem} />
            
            )
        })}
        </tbody>
    </table>
        </div>
      )}
        </div>
        
    );
}

export default ItemsTable;