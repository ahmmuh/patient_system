import React, { useState } from 'react'

function Input({

    label, name, placeholder,type,id,error,
    handleChange,
    ariaDescribedby
}) {

 const [value, setValue ] = useState("")



const inputContainer ={
padding: '1rem',


}

const inputStyle ={
    padding: ".6rem",
    borderRadius: "10rem",
    width: "80%",

}


  return (
<div style={inputContainer}>
<input
style={inputStyle}
    type={type}
    className="form-control"
    label={label}
    name={name}
    id={id}
    placeholder={placeholder}
    error={error}
    aria-describedby={ariaDescribedby}

  />
</div>
  )
}

export default Input