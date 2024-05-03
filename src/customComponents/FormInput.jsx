import React from 'react'

function FormInput({...props}) {
  return (
    <div className="mb-3">
        <label htmlFor={props.label}>{props.label}</label>
        <input
          type={props.type}
          name={props.name}
          value={props.value}
          className="form-control"
          onChange={props.onChange}
        />
      </div>
         
  )
}

export default FormInput