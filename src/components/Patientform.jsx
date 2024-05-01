import React, { useState } from "react";

function Patientform({ patient,patientChangeHandler }) {

// console.log("Old patient",patient)
  return (
    <div className="col">
    <div className="mb-3">
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
      </div>

      <div className="mb-3">
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
      </div>

      <div className="mb-3">
        <label htmlFor="age">Ålder</label>
        <input
          type="text"
          name="age"
          id="age"
          value={patient.age}
          className="form-control"
          placeholder="Ålder"
          onChange={patientChangeHandler}
        />
      </div>

      <div className="mb-3">
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
      </div>
    </div>
  );
}

export default Patientform;
