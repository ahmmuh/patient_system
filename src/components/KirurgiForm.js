import React from "react";

const KirurgiForm = ({kirurgi,behandlingChangeHandler})=>{
    const {operationskod} = kirurgi;
    return(
    <div className='mb-3'>
        
    <input type='text' 
    className='form-control' 
    name='operationskod'
    id='operationskod'
    value={operationskod}
    onChange={behandlingChangeHandler} placeholder='ABC123'/>
    <button type='submit' className='btn btn-info text-white mt-2'>Lägg till operationskod</button>
 </div>
      
    )
}

export default KirurgiForm;