import React, { useState } from 'react'

function OperationskodForm({operationkod,setOperationkod}) {

  return (
   <div className='row mb-5'>
     <div className='col'>
        <div className="">
            <label htmlFor="" className="form-label">Operationkod</label>
            <input
                type="text"
                className="form-control"
                name="operationkod"
                id="operationkod"
                value={operationkod}
                onChange={(e) => setOperationkod(e.target.value)}
                aria-describedby="helpId"
                placeholder="t.ex. ABC 123"
            />
        </div>
        
    </div>
   </div>
  )
}

export default OperationskodForm