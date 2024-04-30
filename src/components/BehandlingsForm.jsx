import React from 'react'

function BehandlingsForm({behandling, setBehandling, behandlingsLista,
selectedBehandling, setSelectedBehandling}) {
  return (
    <div className='row mb-3'>
        <div className="col mb-3">
            <label htmlFor="" className="form-label">
        <h5 className='lead'>BehandlingsTyper</h5>

            </label>
            <select className="form-select form-select-lg"
      
                onChange={(e) => setBehandling(e.target.value)}> 
                <option value="Välj" defaultValue>Välj behandlingstyp</option>
                {
                    behandlingsLista.map((foundedBehandling) => (
                        <option key={foundedBehandling.behandlingID} 
                        value={foundedBehandling.behandlingsID}>{foundedBehandling.behandlingsTyp}</option>
                    ))
                }
            
            </select>
        </div>
        {selectedBehandling}
        
    </div>
  )
}

export default BehandlingsForm