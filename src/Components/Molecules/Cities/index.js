
import axios from 'axios';
import { useState } from 'react';

const GeocodingComponent = () => {
    const [location,setLocation]=useState()
  const getCities = async (query) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?components=locality:${query}&key=AIzaSyDUzn63K64-sXadyIwRJExCfMaicagwGq4`
      );

      // Process the response and extract city information
      const cities = response?.data?.results?.map((result) => {
        return result.formatted_address;
      });
      const coordinates = response?.data?.results[0]?.geometry?.location;
      console.log(cities,coordinates?.lat,coordinates?.lng); // Print the cities to the console or update your state with the city data
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
        <input onChange={(e)=>{setLocation(e.target.value)
             getCities(e.target.value)}} value={location}></input>
     
    </div>
  );
};

export default GeocodingComponent;
