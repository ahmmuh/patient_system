import React, { useState } from 'react'

function DiagnosForm({diagnos,setDiagnos, diagnosLista}) {

  return (
    <div className='row mb-5'>
      <div className='col'>
       
        <div className="mb-3">
          <label htmlFor="" className="form-label"><h5 className='lead'>Grund för diagnos</h5></label>
          <select
          onChange={(e) => setDiagnos(e.target.value)}
            className="form-select form-select-lg"          >
            <option defaultValue>Välj diagnos</option>
            {
              diagnosLista.map((diagno) =>(
                <option key={diagno.diagnosId} value={diagno.Id}>{diagno.diagnosTyp}</option>

              ))
            }
         
          </select>

        </div>

        <div className="mb-3">
          <label htmlFor={diagnos.diagnosDatum} className="form-label">Diagnos Datum</label>
          <input
            type="date"
            className="form-control"
            name="diagnosDatum"
            id="diagnosDatum"
            value={diagnos.diagnosDatum}
            aria-describedby="diagnosDatum"
            placeholder="diagnosDatum"
            onChange={(e) => {setDiagnos(e.target.value)}}

          />
        
        </div> 

        
      </div>
    </div>
  )
}

export default DiagnosForm  