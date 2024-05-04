import React from 'react'

function NotFound() {
  return (
    <div className='d-flex justify-content-center flex-column align-items-center'>
        <i className="fa-solid fa-ban fa-5x fa-hand text-danger"></i>
        <small className='pt-2'>Den sidan du sökt finns inte</small>
    </div>
  )
}

export default NotFound