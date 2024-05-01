import React, { useEffect, useState } from 'react'
import CancerChart from './components/CancerChart';

function Start() {

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
            {data?   <CancerChart ecogOchdata={ecogOchdata} />
            : <div className="alert alert-warning p-5" role="alert">
            Vi har inga data o visa just nu - gör anmäl under fliken Cancer anmälan sen får du se data här
          </div>}
          
        </div>
    </div>
  )
}

export default Start