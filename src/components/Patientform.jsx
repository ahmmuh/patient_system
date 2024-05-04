import React, { useState } from "react";
import FormInput from "../customComponents/FormInput";

function Patientform({ patient, patientChangeHandler,errors}) {
  return (
    <div className="col">
     <FormInput
        type={"text"}
        name={"firstName"}
        value={patient.firstName}
        label={"Förnamn"}
        onChange={patientChangeHandler}
      />
      {errors && <span
        className="text-danger"
      >
        {errors.firstName}
      </span>
      }

      <FormInput
        type={"text"}
        name={"lastName"}
        value={patient.lastName}
        label={"Efternamn"}
        onChange={patientChangeHandler}
      />
      {errors && <span
        className="text-danger"
      >
        {errors.lastName}
      </span>
      }
      <FormInput
        type={"text"}
        name={"age"}
        value={patient.age}
        label={"Ålder"}
        onChange={patientChangeHandler}
      />
      {errors && <span
        className="text-danger"
      >
        {errors.age}
      </span>
      }

      <FormInput
        type={"text"}
        name={"phone"}
        value={patient.phone}
        label={"Telefon"}
        onChange={patientChangeHandler}
      />
      {errors && <span
        className="text-danger"
      >
        {errors.phone}
      </span>
      }
    </div>
  );
}

export default Patientform;
