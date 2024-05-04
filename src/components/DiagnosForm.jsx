import React from "react";
import FormInput from "../customComponents/FormInput";

function DiagnosForm({ diagnos, diagnosChangeHandler,errors }) {
  return (
    <div className="row mb-3">
      <div className="col">
        <FormInput
          type={"text"}
          name={"diagnosTyp"}
          value={diagnos.diagnosTyp}
          label={"Diagnos Typ"}
          onChange={diagnosChangeHandler}
        />

{errors && <span
        className="text-danger"
      >
        {errors.diagnosTyp}
      </span>
      }
        <FormInput
          type={"date"}
          name={"diagnosDatum"}
          value={diagnos.diagnosDatum}
          label={"Diagnos Datum"}
          onChange={diagnosChangeHandler}
        />
            {errors && <span
        className="text-danger"
      >
        {errors.diagnosDatum}
      </span>
      }
      </div>
    </div>
  );
}

export default DiagnosForm;
