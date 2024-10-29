import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import Search from "./Search";
import { BASE_URL } from '../Constats/Constats';
import axios from 'axios';
import NavbarDefault from "./NavBar";

export default function ListCategory() {
    const [categoryListData, setCategoryListData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); 
    const [searchFechedData, setSearchFechedData] = useState([]);
    const [error,setError] = useState()
       
    console.log(searchFechedData, "search  dataaaa")
    useEffect(() => {
        getCategoryData();
    
    }, []);

    // useEffect(()=>{
    //     getSearchData()
    // },[])

    const getCategoryData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/admin/categoryList`);

            console.log(response,'responnnnnnseeeee');
            

            if (response.data && response.data.data) {
                const categoryNames = response.data.data.map(category => category.categoryName);
                setCategoryData(categoryNames);
            } else {
                console.error("Unexpected response format", response.data);
            }
        } catch (err) {
            console.error("Error fetching category data:", err);
        }
    };

    useEffect(() => {
        if (categoryData.length > 0) {
            propertyCategoryData();
        }
    }, [categoryData]);

    const propertyCategoryData = async () => {
        try {
            const promises = categoryData.map(category => {
                return axios.get(`${BASE_URL}/users/categoryPropertyList`, { params: { category } });
            });

            const responses = await Promise.all(promises);

            const allPropertyData = responses.flatMap(response => response.data.data);
            setCategoryListData(allPropertyData); // Set all category data

        } catch (err) {
            console.error("Error fetching property data:", err);
        }
    };


    const getSearchData = async (e) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

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
            {/* <NavbarDefault /> */}
            <Search searchTerm={searchTerm} handleSearchChange={getSearchData} />
            <div className="md:pt-52 pt-48 pb-20">
                <div className="md:ml-8 flex-ro text-center md:text-left">
                    <h1 className="text-4xl font-bold mb-8 text-[#005555] leading-normal">Properties</h1>
                    <hr className="w-10" />
                </div>



{searchTerm ?
                <div className="md:grid md:grid-cols-1 gap-10 px-3 md:px-10">
                 <div className="grid md:grid-cols-4 mt-4">
                        {searchFechedData.map((property) => {
                            // Check if the property category matches the current category
                               
                                 return (
                                     <div className="">
                                     <PropertyCard
                                           key={property._id}
                                           id={property._id}
                                           img={property.photos[0]}
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
                       
                <div className="md:grid grid-cols-1 gap-10 px-3 md:px-10 ">
                    {categoryData.map((category) => (
                        <div key={category} className="mb-10 w-full">

                             <h1 className="text-3xl font-bold mb-6 text-[#005555] text-center relative">
                                 {category.charAt(0).toUpperCase() + category.slice(1)}
                                 <div style={{ width: '200px' }} className="border-b-2 border-[#005555] absolute left-1/2 transform -translate-x-1/2 top-full"></div>
                             </h1>

                            <div className="grid md:grid-cols-4 mt-4">
                                {categoryListData.map((property) => {
                                    // Check if the property category matches the current category
                                    if (category === property.category) {
                                        return (
                                            <div className="">
                                            <PropertyCard
                                                key={property._id}
                                                id={property._id}
                                                img={property.photos[0]}
                                                rate={property.rate}
                                                area={property.area}
                                                address={property.address}
                                                status={property.status}
                                                name={property.name}
                                            />
                                            </div>
                                        );
                                    }
                                    return null; // Return null for unmatched categories
                                })}
                            </div>
                        </div>
                    ))}
                </div>}




            </div>
        </div>
    );
}
