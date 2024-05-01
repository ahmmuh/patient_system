import React from 'react'

function AllmantillstandForm({allmanTillstand,allmanTillstandChagneHandler}) {
  return (
    <div className='row'>
      <h5 className='lead'>Patientens allmanTillstand </h5>
      <div className='col'>
        <div className='mb-3'>
        <label htmlFor="ecog">ECOG Värde</label>
        <input className='form-control'
          type='number'
          name='ecog'
          id='ecog'
          value={allmanTillstand.ecog}
          onChange={allmanTillstandChagneHandler}
          min={0}
          max={5}
         
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
          value={allmanTillstand.datum.toLocaleString()}
          placeholder="Behandlings Datum"
          className="form-control"
          onChange={allmanTillstandChagneHandler}
        />
      </div> 
     </div>
    </div>
  )
}

export default AllmantillstandForm