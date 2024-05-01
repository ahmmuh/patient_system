import React, { useEffect, useState } from "react";
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
    behandlingar: {behandlingsTyp: "",behandlingsDatum: new Date}
  });

  console.log(patient)
 
// ta ut diagnos from patient objekt - skicka in det vidare till <DiagnosForm /> komponent
let {diagnos} = patient; 
let {behandlingar} = patient;
  const patientChangeHandler = (e) => {
    e.preventDefault();
    setPatient({
      ...patient,
      [e.target.name]: e.target.value
    })

  };

  //behandlingar changeHandler
  const behandlingHandlerChange =(e) =>{
   setPatient({
    ...patient,
    behandlingar:{
      ...patient.behandlingar,
      [e.target.name]:  e.target.value,
      [e.target.name]: e.target.value

    }

   })

  }

  // [nestedKey]: {
  //   ...patient[nestedKey],
  //   [key]: value
  // }
  return (
    <div className="container">
      {/* Patient information */}
    <div className="row justify-content-center align-items-center g-2">
      <div className="col">
        <h3>Patient information</h3>
        <Patientform patientChangeHandler={patientChangeHandler}
         setPatient={setPatient} patient={patient} />
      </div>
    </div>

    {/* Diagnos */}

    {/* <div className="row justify-content-center align-items-center g-2">
      <div className="col">
        <h3>Diagnos</h3>
        <DiagnosForm 
        changeHandler={changeHandler}
        setPatient={setPatient}
        diagnos={diagnos}
        />
      </div>
    </div> */}


{/* test form */}
{/* <form>
  <input type="text" value={patient.behandlingar.behandlingsTyp} onChange={changeHandler}/>
  <input type="date" value={patient.behandlingar.behandlingsDatum} onChange={changeHandler}/>
</form> */}
    {/* Behandlingar */}

    <div className="row justify-content-center align-items-center g-2">
      <div className="col">
        <h3>Behandlingar</h3>
        <BehandlingsForm 
        behandlingar={behandlingar}
        behandlingHandlerChange={behandlingHandlerChange}
        setPatient={setPatient}
        />
      </div>
    </div>
  </div>
  )
}

export default PatientRegister;
