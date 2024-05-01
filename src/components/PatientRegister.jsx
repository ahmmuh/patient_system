import React, { useEffect, useState } from "react";
import { patients } from "../data/patient";
import { behandlingsLista, diagnosLista } from "../data/cancerData";
import DiagnosForm from "./DiagnosForm";
import BehandlingsForm from "./BehandlingsForm";
import Patientform from "./Patientform";
function PatientRegister() {

  const [patient, setPatient] = useState({
    firstName: "",
    lastName: "",
    age: "",
    phone: "",
    diagnos: {diagnosTyp: "", diagnosDatum: new Date},
  });
 
// ta ut diagnos from patient objekt - skicka in det vidare till <DiagnosForm /> komponent
let {diagnos} = patient; 

  const patientChangeHandler = (e) => {
    e.preventDefault();
    setPatient({
      ...patient,
      [e.target.name]: e.target.value
    })

  };


  //skriv ut patient info som namn
  // console.log(patient)
  return (
    <>
    <div className="container">
    

    <div className="row justify-content-center align-items-center g-2">
      <div className="col">
        <h3>Patient information</h3>
        <Patientform patientChangeHandler={patientChangeHandler}
         setPatient={setPatient} patient={patient} />
      </div>
    </div>

    <div className="row justify-content-center align-items-center g-2">
      <div className="col">
        <h3>Diagnos</h3>
        <DiagnosForm 
        patientChangeHandler={patientChangeHandler}
        setPatient={setPatient}
        diagnos={diagnos}
        />
      </div>
    </div>

    <div className="row my-3">
      {/* <div className="mb-3">
      <label htmlFor="" className="form-label">
        <h3>Patient information</h3>
      </label>
      <select
        onChange={setPatient(e          className="form-select form-select-lg"
      >
        <option defaultValue="Välj">Välj patient</option>
        {patients.map((patient) => (
          <option key={patient.id} value={patient.id}>
            {patient.name} - {patient.age} år gammal
          </option>
        ))}
      </select>
    </div> */}

      <form>
        {/* <Patientform /> */}
        {/* <input
        type="text"
        name="diagnosTyp"
        value={patients.diagnosTyp}
        placeholder="Diagnos Typ"
        className="form-control"
        onChange={handleSubmit}
      />

      <input
        type="date"
        name="diagnosDatum"
        value={patients.diagnosDatum}
        placeholder="Diagnos Datum"
        className="form-control"
        onChange={handleSubmit}
      />

      <input
        type="text"
        name="behandling"
        value={patients.behandling}
        className="form-control"
        onChange={handleSubmit}
      />
      <input
        type="text"
        name="ecog"
        value={patients.ecog}
        className="form-control"
        onChange={handleSubmit}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="btn btn-primary"
      >
        Spara
      </button> */}
      </form>
    </div>
  </div>
    </>
  );
}

export default PatientRegister;
