import React from 'react'

function AllmäntillståndForm({ecog,setEcog}) {
  return (
    <div className='row'>
      <h5 className='lead'>Patientens allmäntillstånd </h5>
      <div className='col'>
          <input className='form-control'
          type='number'
          min={0}
          max={5}
          value={ecog}
          onChange={(e) => setEcog(e.target.value)}
          placeholder='ECOG, 0–5'/>
      </div>
    </div>
  )
}

export default AllmäntillståndForm