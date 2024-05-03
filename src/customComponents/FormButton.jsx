import React from 'react'

function FormButton({...props}) {
  return (
    <div>
         <button className={props.btnClass}
          style={props.style}
          >
            {props.title}
          </button>
    </div>
  )
}

export default FormButton