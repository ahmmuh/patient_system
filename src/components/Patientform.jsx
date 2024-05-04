import React, { useState } from "react";
import FormInput from "../customComponents/FormInput";

function Patientform({ patient, patientChangeHandler}) {
  return (
    <div className="col">
      <FormInput
        type={"text"}
        name={"firstName"}
        value={patient.firstName}
        label={"Förnamn"}
        onChange={patientChangeHandler}
      />

      <FormInput
        type={"text"}
        name={"lastName"}
        value={patient.lastName}
        label={"Efternamn"}
        onChange={patientChangeHandler}
      />

      <FormInput
        type={"number"}
        name={"age"}
        value={patient.age}
        label={"Ålder"}
        onChange={patientChangeHandler}
      />

      <FormInput
        type={"text"}
        name={"phone"}
        value={patient.phone}
        label={"Telefon"}
        onChange={patientChangeHandler}
      />
    </div>
  );
}

export default Patientform;
