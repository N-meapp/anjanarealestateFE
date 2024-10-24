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

            console.log(BASE_URL,'baseurll.....');
            

        const response = await axios.get(`${BASE_URL}/users/PropertyList`)

        console.log(response);
        
            
            
           
            if (response.data && response.data.data) {
                console.log(response.data.data,',..jllojoij...');
                
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
      
          console.log('Response:', response);
      
          if (response.data && response.data.data && response.data.success !== false) {
            setSearchFechedData(response.data.data);
            console.log(response.data.data, "Search fetched data");
          }else {
            
            console.log('No data found or request unsuccessful.');
            setSearchFechedData([]); 
          }


          if (!searchKey || searchKey.trim() === '') {
            console.log('Search term is empty after trimming.');
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
        <h1 className="text-4xl font-bold mb-8 text-[#005555] leading-normal">Popular Properties</h1>
        <hr className="w-10"></hr>
        </div>
        {searchTerm ?
                <div className="md:grid grid-cols-1 gap-10 px-10">
                 <div className="md:grid lg:grid-cols-4 sm:grid-cols-2 mt-4">
                        {searchFechedData.map((property) => {
                            // Check if the property category matches the current category
                               
                                 return (
                                     <div className="">
                                     <PropertyCard
                                           key={property._id}
                                           id={property._id}
                                           rate={property.rate}
                                           area={property.area}
                                           address={property.address}
                                           status={property.status}
                                           name={property.name}
                                    />
                                    </div>
                                );
                           })}
                         </div>
                        </div>
                                :
        <div className="md:grid grid-cols-4 justify-items-center px-10">

            
            
        {homeData.map((property)=>{
            return(
                <PropertyCard id={property._id} rate={property.rate} area={property.area} address={property.address} status={property.status} name={property.name} contact={property.contactNumber} />
            )
        })}
        </div>
}
        </div>
        </div>

    )
}