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
          value={behandlingar.behandlingsTyp}
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
          value={behandlingar?.behandlingsDatum}
          placeholder="Behandlings Datum"
          className="form-control"
          onChange={behandlingChangeHandler}
        />
      </div> 
      {
        foundedKirurgi && <KirurgiForm kirurgi={kirurgi}
        kirurgiChagneHandler={kirurgiChagneHandler}
        />
      }

    </div>
    </div>
  )
}

export default BehandlingsForm