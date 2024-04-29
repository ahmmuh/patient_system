import React from 'react'

function BehandlingsForm({behandling, setBehandling, behandlingsLista}) {
  return (
    <div className='row'>
        <div className="mb-3">
            <label htmlFor="" className="form-label">
        <h4>BehandlingsTyper</h4>

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
        
    </div>
  )
}

export default BehandlingsForm