import React from 'react'

function BehandlingsForm({behandlingar,setPatientBehandlingar}) {
  return (
    <div className='row mb-3'>
        <div className="col mb-3">
            <label htmlFor="" className="form-label">
        <h5 className='lead'>BehandlingsTyper</h5>

            </label>
            <select className="form-select form-select-lg"
      
                onChange={(e) => setPatientBehandlingar(e.target.value)}
                
                > 
                <option value="Välj" defaultValue>Välj behandlingstyp</option>
                {
                    behandlingar.map((foundedBehandling) => (
                        <option key={foundedBehandling.behandlingID} 
                        value={foundedBehandling.behandlingsID}>{foundedBehandling.behandlingsTyp}</option>
                    ))
                }
            
            </select>
        </div>
        
    </div>
  )
}

export default BehandlingsForm