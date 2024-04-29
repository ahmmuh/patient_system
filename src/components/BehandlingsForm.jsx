import React from 'react'

function BehandlingsForm({behandling, setBehandling, behandlingsLista,
selectedBehandling, setSelectedBehandling}) {
  return (
    <div className='row'>
        <div className="mb-3">
            <label htmlFor="" className="form-label">
        <h5>BehandlingsTyper</h5>

            </label>
            <select className="form-select form-select-lg"
                onChange={(e) => setBehandling(e.target.value)}> 
                {
                    behandlingsLista.map((foundedBehandling) => (
                        <option value={foundedBehandling.behandlingsID}>{foundedBehandling.behandlingsTyp}</option>
                    ))
                }
            
            </select>
        </div>
        {selectedBehandling}
        
    </div>
  )
}

export default BehandlingsForm