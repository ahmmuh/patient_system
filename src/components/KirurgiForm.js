import React from "react";

const KirurgiForm = ({kirurgiChagneHandler,kirurgi})=>{
    return(
    <div className='mb-3'>
        
    <input type='text' 
    className='form-control' 
    name='kirurgi'
    id='kirurgi'
    value={kirurgi.operationskod}
    onChange={kirurgiChagneHandler} placeholder='ABC123'/>
    <button type='submit' className='btn btn-info text-white mt-2'>Lägg till operationskod</button>
 </div>
      
    )
}

export default KirurgiForm;