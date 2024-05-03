import React from "react";
import FormInput from "../customComponents/FormInput";
function BehandlingsForm({ behandlingar, behandlingChangeHandler }) {
  let findKirurgi = behandlingar.behandlingsTyp;
  let foundedKirurgi = findKirurgi?.includes("kirurgi");
  return (
    <div className="row mb-3">
      <div className="col">
        <FormInput
          type={"text"}
          name={"behandlingsTyp"}
          value={behandlingar?.behandlingsTyp || ""}
          label={"Behandlings typ"}
          onChange={behandlingChangeHandler}
        />

        <FormInput
          type={"date"}
          name={"behandlingsDatum"}
          value={behandlingar?.behandlingsDatum || ""}
          label={"Behandlings Datum"}
          onChange={behandlingChangeHandler}
        />

        {foundedKirurgi ? (
          <FormInput
            type={"text"}
            name={"operationskod"}
            value={behandlingar.kirurgi?.operationskod}
            label={"AB5123"}
            onChange={behandlingChangeHandler}
          />
        ) : null}
      </div>
    </div>
  );
}

export default BehandlingsForm;
