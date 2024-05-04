import React from 'react'

function FormInput({...props}) {
    const inputStyle ={
        borderRadius: '3rem'
    }
  return (
    <div className="mb-3 mt-2">
        <label htmlFor={props.label}>{props.label}</label>
        <input
        style={inputStyle}
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