import React from "react";

import MapContainer from "./MapContainer";

const Connect = () => {
  return (
    <div className="bg-slate-100 p-8">
      <h1 className="text-center font-bold text-2xl">LET'S CONNECT</h1>
      <div className="flex justify-center items-center p-5">
        <div className="flex justify-start  flex-col w-1/2">
          <h2 className="m-2 font-bold">GET A FREE CASE EVALUATION TODAY!</h2>
          <p className="m-2">AVAILABLE 24 HOURS A DAY!</p>
          <input
            className="m-2 border-solid border-2 w-10/12"
            type="text"
            placeholder="Enter your Name"
          />
          <input
            className="m-2 border-solid border-2 w-10/12"
            type="text"
            placeholder="Enter a valid email address "
          />

          <textarea
            className="m-2 w-10/12 h-12 border-solid border-2"
            placeholder="Enter your message"
          ></textarea>
          <button className="p-1 w-1/4 m-2 border-black border-solid border-2 star">
            Submit
          </button>
        </div>
        <div className="p-5 w-1/2">
          <h2 className="m-2 font-bold">WE ARE HERE</h2>
          <p className="m-2">AVAILABLE 24 HOURS A DAY!</p>
          <MapContainer />
        </div>
      </div>
    </div>
  );
};

export default Connect;
