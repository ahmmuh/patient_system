import React, { useEffect, useState } from 'react'
import CancerChart from './components/CancerChart';

function Canceranmalan() {

    let  patients = JSON.parse(localStorage.getItem("patients"));
    const [data, setData] = useState({})
    
    let ecogOchdata = patients.map(({allmanTillstand}) =>{
        return allmanTillstand;


    })
    console.log(ecogOchdata)


    useEffect(() =>{
        setData(data)
    },[])
    
  return (
    <div className='container bg-white ' style={{height: '60vh'}}>
        <div className='row p-5 h-100 '>
            <CancerChart ecogOchdata={ecogOchdata} />
        </div>
    </div>
  )
}

export default Canceranmalan