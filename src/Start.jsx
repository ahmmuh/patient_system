import React, { useEffect, useState } from "react";
import CancerChart from "./components/CancerChart";
import NoDataToShow from "./components/NoDataToShow";

function Start() {
  let patients = JSON.parse(localStorage.getItem("patients"));

  // ]
  // Patient hälsa tillstånd
  let patiantHalsaTillStand = patients?.map(({ allmanTillstand }) => {
    return allmanTillstand;
  });

  return (
    <>
      {patiantHalsaTillStand ? (
        <div className="container bg-white " style={{ height: "60vh" }}>
          <div className="row p-5 h-100 ">
            <CancerChart patiantHalsaTillStand={patiantHalsaTillStand} />
          </div>
        </div>
      ) : (
        <NoDataToShow />
      )}
    </>
  );
}

export default Start;
