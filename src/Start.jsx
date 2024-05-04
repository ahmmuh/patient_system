import React, { useEffect, useState } from 'react'
import CancerChart from './components/CancerChart';
import NoDataToShow from './components/NoDataToShow';

function Start() {

    let  patients = JSON.parse(localStorage.getItem("patients"));
    
    // ]
    // Patient hälsa tillstånd
    let patiantHalsaTillStand = patients.map(({allmanTillstand}) =>{
      console.log("PAtien allmäntillstånd", typeof(allmanTillstand))
      return allmanTillstand;
  })


   
    
    console.log("patiantHalsaTillStand type check",typeof(data))
  return (
    <div className='container bg-white ' style={{height: '60vh'}}>
        <div className='row p-5 h-100 '>
            {patiantHalsaTillStand?   <CancerChart patiantHalsaTillStand={patiantHalsaTillStand} />
            : <NoDataToShow/>}
          
        </div>
    </div>
  )
}

export default Start