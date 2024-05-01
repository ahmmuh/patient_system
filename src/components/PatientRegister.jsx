import React, { useEffect, useState } from "react";
import { patients } from "../data/patient";
import { behandlingsLista, diagnosLista } from "../data/cancerData";
import DiagnosForm from "./DiagnosForm";
import BehandlingsForm from "./BehandlingsForm";
import Patientform from "./Patientform";
function PatientRegister() {
  const [registerPatient, setPatientRegister] = useState({
    firstName: "",
    age: 0,
    diagnos: [diagnosLista],
    behandlingar: [behandlingsLista],
    operationkoder: [],
    ecogoStatus: 0,
  });

  //user test
  const [user, setUser] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const [diagnos, setDiagnos] = useState({
    diagnosType: "",
    diagnosDatum: new Date(),
  });

  //test form

  const [patient, setPatient] = useState({
    firstName: "",
    lastName: "",
    age: "",
    phone: "",
    diagnos: {dianosTyp: "Kirurgi",date: new Date}
  });

 

  // diagnos:{diagnosTyp:"",diagnosDatum: new Date},
  // diagnosTyp: "",
  // diagnosDatum: new Date(),
  // behandling: "",
  // ecog: 0,
  // const changeHandler = (e) =>{
  //   setPatient(e.target.value)
  // }
  const patientChangeHandler = (e) => {
    e.preventDefault();
    setPatient({
      ...patient,
      [e.target.name]: e.target.value
    })

  };

  console.log(patient)

  // useEffect(() =>{
  //   setPatient({
  //     ...patients,
  //     [e.target.name]: value
  //   })
  // },[])
  return (
    <div className="container">
      {/* user test form */}
      {/* <form>
        <input
          type="text"
          name="userName"
          id="userName"
          value={user.userName}
          className="form-control"
          placeholder="användarnamn"
          onChange={userChangeHandler}
        />

        <input
          type="text"
          name="firstName"
          id="firstName"
          value={user.firstName}
          className="form-control"
          placeholder="Förnamn"
          onChange={userChangeHandler}
        />

        <input
          type="text"
          name="lastName"
          id="lastName"
          value={user.lastName}
          className="form-control"
          placeholder="Efternamn"
          onChange={userChangeHandler}
        />
        <input
          type="text"
          name="email"
          id="email"
          value={user.email}
          className="form-control"
          placeholder="E-post"
          onChange={userChangeHandler}
        />
      </form> */}

      <div className="row justify-content-center align-items-center g-2">
        {/* <input type="text" name="test" id="test" value={test} onChange={(e) => setTest(e.target.value)} /> */}
        <div className="col">
          <h3>Patient information</h3>
          <Patientform patientChangeHandler={patientChangeHandler}
           setPatient={setPatient} patient={patient} />
        </div>
      </div>

      <div className="row justify-content-center align-items-center g-2">
        <div className="col">
          <h3>Patient</h3>
          <p>Form</p>
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
  );
}

export default PatientRegister;
