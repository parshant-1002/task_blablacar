import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, DirectionsRenderer } from '@react-google-maps/api';
import { MAP_API_KEY } from '../../../../Services/ROR_Api/Constants';
import "../styles.css"
const containerStyle = {
  width: '100%',
  height: '100%',
};

const MapRouteShow = ({ coordinates ,setPaths}) => {
  const [directionsWithToll, setDirectionsWithToll] = useState([]);
  const [directionsWithoutToll, setDirectionsWithoutToll] = useState(null);
  const [distanceWithToll, setDistanceWithToll] = useState(null);
  const [distanceWithoutToll, setDistanceWithoutToll] = useState(null);
  const [map, setMap] = useState(null);

  const origin = { lat: coordinates?.pickUpLocation?.latitude, lng: coordinates?.pickUpLocation?.longitude } 
  const destination =  { lat: coordinates?.dropOfLocation?.latitude, lng: coordinates?.dropOfLocation?.longitude } 

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: MAP_API_KEY,
  });

  const directionsCallbackForToll = (response) => {
    if (response !== null) {
        console.log(response,"response")
        setDirectionsWithToll(response);
      setPaths((x=>[...x, {path:response?.routes[0]?.summary,distance:response.routes[0].legs[0].distance.text,duration:response.routes[0].legs[0].duration.text}]))
      setDistanceWithToll(response.routes[0].legs[0].distance.text);
    }
  };
  const directionsCallbackForNoToll = (response) => {
    if (response !== null) {
        console.log(response,"response")
        setDirectionsWithoutToll(response);
      setPaths((x=>[...x, {path:response?.routes[0]?.summary,distance:response.routes[0].legs[0].distance.text,duration:response.routes[0].legs[0].duration.text}]))
      setDistanceWithoutToll(response.routes[0].legs[0].distance.text);
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
        avoidTolls: true
      },
      directionsCallbackForToll
    );
    directionsService.route(
        {
          origin,
          destination,
          travelMode: window.google.maps.TravelMode.DRIVING,
          avoidTolls: false
        },
        directionsCallbackForNoToll
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
      options={{
        mapTypeId: 'roadmap'
      }}
    >

      {directionsWithToll && <DirectionsRenderer directions={directionsWithToll} 
      options={{
        map: map,
        polylineOptions: {
          strokeColor:  "#00BFFF" ,
          strokeOpacity: 1,
          strokeWeight: 6
        },
        markerOptions: {
          visible: true
        }
      }}
      
      />}
       {directionsWithoutToll && <DirectionsRenderer directions={directionsWithoutToll} 
      options={{
        map: map,
        polylineOptions: {
          strokeColor:  "grey" ,
          strokeOpacity: 1,
          strokeWeight: 6
        },
        markerOptions: {
          visible: true
        }
      }}
      
      />}
      {distanceWithToll && (
        <div className='routeDistance' >
          DistanceToll: {distanceWithToll}
        </div>
      )}
       {distanceWithoutToll && (
        <div className='routeDistance' >
          DistanceNoToll: {distanceWithoutToll}
        </div>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default MapRouteShow;

