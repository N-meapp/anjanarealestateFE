import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import Search from "./Search";
import { BASE_URL } from '../Constats/Constats';
import axios from 'axios';

export default function ListingCards(){

    // const [sampleArray,setSampleArray] = useState(['q','e','q','q','e','q'])

    const [homeData, setHomeData]= useState([])
    const [error,setError] = useState()
    // const [searchTerm, setSearchTerm] = useState({});
    const [searchTerm, setSearchTerm] = useState(""); 
    const [searchFechedData, setSearchFechedData] = useState([]);
 
    useEffect(()=>{

        homePropertyData() 

    },[])

   
    const homePropertyData = async () => {
        try {

        const response = await axios.get(`${BASE_URL}/users/PropertyList`)
           
            if (response.data && response.data.data) {
                
                setHomeData(response.data.data);
            } else {
                console.error("Unexpected response format", response.data);
                setError("Unexpected response format");
            }
        } catch (err) {
            console.error("Error fetching data:", err);
            setError("Error fetching property data");
        }
    };

  



    const getSearchData = async (e) => {
        try {
            setSearchTerm(e.target.value)
            const searchKey = e.target.value
   
          const response = await axios.get(`${BASE_URL}/users/search`, { params: { query: searchKey } });
      
      
          if (response.data && response.data.data && response.data.success !== false) {
            setSearchFechedData(response.data.data);
          }else {
            
            setSearchFechedData([]); 
          }


          if (!searchKey || searchKey.trim() === '') {
            setSearchFechedData([]);
            return;  // Stop further execution if the search term is empty
        }
          
        } catch (error) {
     
          console.error("Error fetching data:", error);
          setError("Error fetching property data"); 
          setSearchFechedData([]);
        }
      };



    return (
        <div>
        <Search searchTerm={searchTerm} handleSearchChange={getSearchData} />
        <div className="md:pt-20 pt-10 pb-20">
        <div className="md:ml-8 text-center md:text-left ">
        <h1 className="text-4xl font-bold mb-8 text-[#e1b400] leading-normal">Popular Properties</h1>
        <hr className="w-10"></hr>
        </div>
        {searchTerm ?
                <div className="md:grid grid-cols-1 gap-10 px-3 md:px-10">
                 <div className="md:grid lg:grid-cols-4 sm:grid-cols-2 mt-4">
                 {searchFechedData.length > 0 ? (
                    searchFechedData.map((property) => (
                      <div key={property._id} className="">
                          <PropertyCard
                            id={property._id}
                            img={property.photos[0]}
                            rate={property.rate}
                            area={property.area}
                            address={property.address}
                            status={property.status}
                            name={property.name}
                          />
                    </div>
                  ))
                ) : (
                    <div className="absolute w-full text-center">
                       <h1 className="text-xl pb-6 font-bold text-zinc-300">Data not found!</h1>
                    </div>
                )}
                         </div>
                         </div>
                                :
        <div className="md:grid grid-cols-4 justify-items-center px-3 md:px-10">

            
            
        {homeData.map((property)=>{
            return(
                <PropertyCard id={property._id} rate={property.rate} img={property.photos[0]} area={property.area} address={property.address} status={property.status} name={property.name} contact={property.contactNumber} />
            ) 
        })}
        </div>
}

<div className="container mx-auto text-center">
    <a href="/all-category-list">
  <button className="px-8 py-3 rounded-full mt-12 border-2 text-sm text-[#e1b400] font-bold border-[#e1b400] animate-bounce">
    Explore all properties {">>"}
  </button>
  </a>
</div>

        </div>
        </div>

    )
}