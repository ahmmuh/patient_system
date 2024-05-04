import React from "react";
import FormInput from "../customComponents/FormInput";
function BehandlingsForm({ behandlingar, behandlingChangeHandler,errors }) {
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
          {errors && <span
        className="text-danger"
      >
        {errors.behandlingsTyp}
      </span>
      }

        <FormInput
          type={"date"}
          name={"behandlingsDatum"}
          value={behandlingar?.behandlingsDatum || ""}
          label={"Behandlings Datum"}
          onChange={behandlingChangeHandler}
        />
    {errors && <span
        className="text-danger"
      >
        {errors.behandlingar?.behandlingsDatum}
      </span>
      }
        {foundedKirurgi ? (
          <FormInput
            type={"text"}
            name={"operationskod"}
            value={behandlingar.kirurgi?.operationskod || ""}
            label={"Operationskod"}
            onChange={behandlingChangeHandler}
          />
        ) : null}
          {errors && <span
        className="text-danger"
      >
        {errors.behandlingar?.kirurgi?.operationskod}
      </span>
      }
      </div>
    </div>
  );
}

export default BehandlingsForm;
