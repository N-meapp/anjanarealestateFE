import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import Search from "./Search";
import { BASE_URL } from '../Constats/Constats';
import axios from 'axios';


export default function ListingCards(){

    // const [sampleArray,setSampleArray] = useState(['q','e','q','q','e','q'])

    const [homeData, setHomeData]= useState([])
    const [searchTerm, setSearchTerm] = useState({});
 
    useEffect(()=>{

        homePropertyData()

    },[])

   
    const homePropertyData = async () => {
        try {

            const response = await axios.get(`${BASE_URL}users/PropertyList`);
            
           
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

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        filterProperties(e.target.value); // Filter data based on search input
    };



    return (
        <div>
        <Search />
        <div className="md:pt-20 pt-10 pb-20">
        <div className="md:ml-8 text-center md:text-left ">
        <h1 className="text-4xl font-bold mb-8 text-[#005555] leading-normal">Popular Properties</h1>
        <hr className="w-10"></hr>
        </div>
        <div className="md:grid grid-cols-4 justify-items-center px-10">
        {homeData.map((property)=>{
            return(
                <PropertyCard id={property._id} rate={property.rate} area={property.area} address={property.address} status={property.status} name={property.name} />
            )
        })}
        </div>
        </div>
        </div>

    )
}