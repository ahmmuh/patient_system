import React, { useState } from 'react'

function OperationskodForm({selectedBehandling, setSelectedBehandling}) {
    const [operationkod, setOperationkod] = useState("")
    const [operationskodList, setOperationkodList] = useState([])
  return (
    <div className='col'>
        <div class="mb-3">
            <label for="" class="form-label">Name</label>
            <input
                type="text"
                class="form-control"
                name="operationkod"
                id="operationkod"
                value={operationkod}
                onChange={(e) => setOperationkod(e.target.value)}
                aria-describedby="helpId"
                placeholder="t.ex. ABC 123"
            />
        </div>
        
    </div>
  )
}

export default OperationskodForm