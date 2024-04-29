import React, { useState } from 'react'

function DiagnosForm({diagnos,setDiagnos, diagnosLista,
  diagnosDatum, setDiagnosDatum}) {
  return (
    <div className='row'>
      <div className='col'>
       

        <div className="mb-3">
          <label htmlFor="grundDiagnosDatum" className="form-label">Grund Diagnos Datum</label>
          <input
            type="date"
            className="form-control"
            name="diagnosDatum"
            id="diagnosDatum"
            value={diagnosDatum}
            aria-describedby="diagnosDatum"
            placeholder="diagnosDatum"
            onChange={(e) => {setDiagnosDatum(e.target.value)}}

          />
        
        </div> 


        <div className="mb-3">
          <label htmlFor="" className="form-label">City</label>
          <select
          onChange={(e) => setDiagnos(e.target.value)}
            className="form-select form-select-lg"          >
            <option selected>Välj diagnos</option>
            {
              diagnosLista.map((diagno) =>(
                <option key={diagno.id} value={diagno.id}>{diagno.diagnosTyp}</option>

              ))
            }
         
          </select>

        </div>
        
      </div>
    </div>
  )
}

export default DiagnosForm  