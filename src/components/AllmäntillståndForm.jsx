import React from 'react'

function AllmäntillståndForm({allmänTillstånd,allmänTillståndChagneHandler}) {
  return (
    <div className='row'>
      <h5 className='lead'>Patientens allmäntillstånd </h5>
      <div className='col'>
        <div className='mb-3'>
        <label htmlFor="Ecog">ECOG Värde</label>
        <input className='form-control'
          type='number'
          min={0}
          max={5}
          value={allmänTillstånd.Ecog}
          onChange={(e) => allmänTillståndChagneHandler(e.target.value)}
          placeholder='ECOG, 0–5'/>
        </div>
      </div>

     <div className='col'>
     <div className="mb-3">
        <label htmlFor="datum">ECOG Datum</label>

        <input
          type="date"
          name="datum"
          id="datum"
          value={allmänTillstånd.datum.toLocaleString()}
          placeholder="Behandlings Datum"
          className="form-control"
          onChange={allmänTillståndChagneHandler}
        />
      </div> 
     </div>
    </div>
  )
}

export default AllmäntillståndForm