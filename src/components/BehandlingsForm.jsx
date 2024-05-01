import React from 'react'

function BehandlingsForm({behandlingar, behandlingHandlerChange}) {
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
          onChange={behandlingHandlerChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="behandlingsDatum">Behandlings Datum</label>

        <input
          type="date"
          name="behandlingsDatum"
          id="behandlingsDatum"
          value={behandlingar.behandlingsDatum.toLocaleString()}
          placeholder="Behandlings Datum"
          className="form-control"
          onChange={behandlingHandlerChange}
        />
      </div> 

        </div>
    </div>
  )
}

export default BehandlingsForm