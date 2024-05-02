import React from 'react'
import KirurgiForm from './KirurgiForm';

function BehandlingsForm({behandlingar,
    behandlingChangeHandler,
    kirurgiChagneHandler}) {

    let findKirurgi = behandlingar.behandlingsTyp;
    let foundedKirurgi = findKirurgi?.includes("kirurgi")
    console.log(foundedKirurgi)


    const {kirurgi} = behandlingar;
  
  return (
    <div className='row mb-3'>
        <div className="col">
    <div className="mb-3">
        <label htmlFor="behandlingsTyp">Behandlings typ</label>
        <input
          type="text"
          name="behandlingsTyp"
          id="behandlingsTyp"
          value={behandlingar?.behandlingsTyp || ""}
          className="form-control"
          placeholder="Behandlings typ"
          onChange={behandlingChangeHandler}
        />
      </div>
         
      <div className="mb-3">
        <label htmlFor="behandlingsDatum">Behandlings Datum</label>
        <input
          type="date"
          name="behandlingsDatum"
          id="behandlingsDatum"
          value={behandlingar?.behandlingsDatum || ""}
          placeholder="Behandlings Datum"
          className="form-control"
          onChange={behandlingChangeHandler}
        />
      </div> 
      {
        foundedKirurgi? <div className='mb-3'>
        
        <input type='text' 
        className='form-control' 
        name='operationskod'
        id='operationskod'
        value={behandlingar.kirurgi?.operationskod}
        onChange={behandlingChangeHandler} placeholder='ABC123'/>
     </div>: null
      }

    </div>
    </div>
  )
}

export default BehandlingsForm