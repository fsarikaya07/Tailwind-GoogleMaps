import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
// yarn add @react-google-maps/api
const MapContainer = () => {
  const containerStyle = {
    width: "500px",
    height: "250px",
  };

  const center = {
    lat: 39.97,
    lng: 32.80,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyD-KpSijiR8dQtnIGe1hEG4FTKnXKqjvBs">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={9}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
