import React, { useEffect, useState } from 'react'
import { patients } from '../data/patient'

function PatientRegister({patient,setPatient}) {




    // useEffect(() =>{
    //   setPatient(patient);
    //   console.log("Valda patient " , patient.name)
    // },[])
  return (
    <div className='row my-3'>
      <p>{patient}</p>
        <div className="mb-3">
          <label htmlFor="" className="form-label"><h3>Patient information</h3></label>
          <select  
          onChange={(e) => setPatient(e.target.value)}
            className="form-select form-select-lg"          >
            <option defaultValue="Välj">Välj patient</option>
            {
              patients.map((patient) =>(
                <option key={patient.id} value={patient.id}>{patient.name} - {patient.age} år gammal</option>

              ))
            }
          </select>
        </div>
    </div>
  )
}

export default PatientRegister