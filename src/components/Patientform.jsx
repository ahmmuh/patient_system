import React, { useState } from "react";
import FormInput from "../customComponents/FormInput";

function Patientform({ patient,patientChangeHandler, errors,setErrors }) {
  return (
    <div className="col">
     
    {/* <div className="mb-3">
        <label htmlFor="firstName">Förnamn</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={patient.firstName}
          className="form-control"
          placeholder="Förnamn"
          onChange={patientChangeHandler}
        />        
        
      </div> */}

      <FormInput
      type={'text'}
      name={'firstName'}
      value={patient.firstName}
      label={'Förnamn'}
      onChange={patientChangeHandler}
      />



<FormInput
      type={'text'}
      name={'lastName'}
      value={patient.lastName}
      label={'Efternamn'}
      onChange={patientChangeHandler}
      />

      {/* <div className="mb-3">
        <label htmlFor="lastName">Efternamn</label>

        <input
          type="text"
          name="lastName"
          id="lastName"
          value={patient.lastName}
          placeholder="Efternamn"
          className="form-control"
          onChange={patientChangeHandler}
        />
      </div> */}

<FormInput
      type={'number'}
      name={'age'}
      value={patient.age}
      label={'Ålder'}
      onChange={patientChangeHandler}
      />


      {/* <div className="mb-3">
        <label htmlFor="age">Ålder</label>
        <input
          type="number"
          name="age"
          id="age"
          value={patient.age}
          className="form-control"
          placeholder="Ålder"
          onChange={patientChangeHandler}
        />
      </div> */}




<FormInput
      type={'text'}
      name={'phone'}
      value={patient.phone}
      label={'Telefon'}
      onChange={patientChangeHandler}
      />


      {/* <div className="mb-3">
        <label htmlFor="phone">Telefon</label>

        <input
          type="number"
          name="phone"
          id="phone"
          value={patient.phone}
          className="form-control"
          placeholder="Phone"
          onChange={patientChangeHandler}
        />
      </div> */}
    </div>
  );
}

export default Patientform;
