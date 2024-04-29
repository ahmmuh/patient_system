import React, { useState } from 'react'
import { patients } from '../data/patient'

function PatientRegister() {

    const [patientList, setPatients] = useState(patients)
  return (
    <div className='row'>
        <div className="mb-3">
          <label htmlFor="" className="form-label"><h3>Patient information</h3></label>
          <select
          onChange={(e) => setPatients(e.target.value)}
            className="form-select form-select-lg"          >
            <option selected>Välj patient</option>
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