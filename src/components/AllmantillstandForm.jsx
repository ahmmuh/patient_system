import React from "react";
import FormInput from "../customComponents/FormInput";
function AllmantillstandForm({
  allmanTillstand,
  allmanTillstandChagneHandler,
  errors
}) {
  return (
    <div className="row">
      <div className="col">
        <FormInput
          type={"number"}
          name={"ecog"}
          value={allmanTillstand?.ecog}
          label={"ECOG (0-5)"}
          onChange={allmanTillstandChagneHandler}
        />
          {errors && <span
        className="text-danger"
      >
        {errors.ecog}
      </span>
      }
      </div>

      <div className="col">
        <FormInput
          type={"date"}
          name={"datum"}
          value={allmanTillstand?.datum}
          label={"ECOG - Datum"}
          onChange={allmanTillstandChagneHandler}
        />
          {errors && <span
        className="text-danger"
      >
        {errors.datum}
      </span>
      }
      </div>
    </div>
  );
}

export default AllmantillstandForm;
