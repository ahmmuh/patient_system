import React from "react";
import FormInput from "../customComponents/FormInput";

function DiagnosForm({ diagnos, diagnosChangeHandler }) {
  console.log("diagnos", diagnos);
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

        <FormInput
          type={"date"}
          name={"diagnosDatum"}
          value={diagnos.diagnosDatum}
          label={"Diagnos Datum"}
          onChange={diagnosChangeHandler}
        />
      </div>
    </div>
  );
}

export default DiagnosForm;
