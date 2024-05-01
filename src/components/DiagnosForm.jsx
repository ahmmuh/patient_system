import React, { useState } from 'react'

function DiagnosForm({diagnos,setPatientRegister}) {
  return (
    <div className='row mb-5'>
      <div className='col'>
       
        <div className="mb-3">
          <label htmlFor="" className="form-label"><h5 className='lead'>Grund för diagnos</h5></label>
          <select
          onChange={(e) => setPatientRegister(e.target.value)}
          name='diagnosTyp'
            className="form-select form-select-lg">
            <option defaultValue>Välj diagnos</option>
            <option value={1}>Volvo</option>
            {
              diagnos.map((diagno) =>(
                <option key={diagno.diagnosId} value={diagno.diagnosTyp}>{diagno.diagnosTyp}</option>

              ))
            }
         
          </select>

        </div>


        <div className="mb-3">
          <label htmlFor="" className="form-label">Diagnos Datum</label>
          <input
            type={'date'}
            className="form-control"
            name="diagnosDatum"
            // value={diagnos.diagnosDatum}
            aria-describedby="diagnosDatum"
            // onChange={handleChangeForDiagnos}

          />
        
        </div> 
        
      </div>
    </div>
  )
}

export default DiagnosForm  