import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, DirectionsRenderer } from '@react-google-maps/api';
import { MAP_API_KEY } from '../../../../Services/ROR_Api/Constants';
import "../styles.css"
const containerStyle = {
  width: '100%',
  height: '100%',
};

const MapRouteShow = ({ coordinates ,setPaths}) => {
  const [directions, setDirections] = useState(null);
  const [distance, setDistance] = useState(null);
  const [map, setMap] = useState(null);

  const origin = { lat: coordinates?.pickUpLocation?.latitude, lng: coordinates?.pickUpLocation?.longitude } 
  const destination =  { lat: coordinates?.dropOfLocation?.latitude, lng: coordinates?.dropOfLocation?.longitude } 

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: MAP_API_KEY,
  });

  const directionsCallback = (response) => {
    if (response !== null) {
        console.log(response,"response")
      setDirections(response);
      setPaths([ {path:response?.routes[0]?.summary,distance:response.routes[0].legs[0].distance.text,duration:response.routes[0].legs[0].duration.text}])
      setDistance(response.routes[0].legs[0].distance.text);
    }
  };
    const onLoad = (map) => {
    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer({ map });

    directionsService.route(
      {
        origin,
        destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      directionsCallback
    );

    directionsRenderer.setMap(map);
  };

  const onUnmount = () => {
    setMap(null);
  };




  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={origin}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >

      {directions && <DirectionsRenderer directions={directions} />}
      {distance && (
        <div className='routeDistance' >
          Distance: {distance}
        </div>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default MapRouteShow;

