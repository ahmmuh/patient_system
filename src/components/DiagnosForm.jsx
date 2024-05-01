import React from 'react'

function DiagnosForm({diagnos,patientChangeHandler}) {
  let {diagnosTyp,diagnosDatum} = diagnos;
  console.log("diagnos",diagnos)

  return (
    <div className='row mb-5'>
      <div className='col'>
       
        <div className="mb-3">
        
        <label htmlFor="diagnosTyp" className="form-label">Grund för diagnos</label>
          <input
            type="text"
            className="form-control"
            name="diagnosTyp"
            id='diagnosTyp'
            value={diagnosTyp.diagnosTyp}
            aria-describedby="diagnosTyp"
             onChange={patientChangeHandler}

          />
        </div>


        <div className="mb-3">
          <label htmlFor="diagnosDatum" className="form-label">Diagnos Datum</label>
          <input
            type="date"
            className="form-control"
            name="diagnosDatum"
            id='diagnosDatum'
            value={diagnosDatum.diagnosDatum}
            aria-describedby="diagnosDatum"
             onChange={patientChangeHandler}

          />
        
        </div> 

      </div>
    </div>
  )
}

export default DiagnosForm  