import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
// yarn add @react-google-maps/api
const MapContainer = () => {
  const containerStyle = {
    width: "250px",
    height: "200px",
  };

  const center = {
    lat: 39.97,
    lng: 32.8,
  };
  console.log(process.env.REACT_APP_Key);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_Key}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={9}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
