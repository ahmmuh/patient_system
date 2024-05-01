import React, { useEffect, useState } from "react";
import { behandlingsLista, diagnosLista } from "../data/cancerData";
import DiagnosForm from "./DiagnosForm";
import BehandlingsForm from "./BehandlingsForm";
import Patientform from "./Patientform";
import AllmäntillståndForm from "./AllmäntillståndForm";
function PatientRegister() {

  const [patient, setPatient] = useState({
    firstName: "",
    lastName: "",
    age: "",
    phone: "",
    diagnos: {diagnosTyp: "", diagnosDatum: new Date},
    behandlingar: {behandlingsTyp: "",behandlingsDatum: new Date},

    allmänTillstånd: {
      Ecog: "",
      datum:""
    }
  });

  console.log(patient)
 
// ta ut diagnos from patient objekt - skicka in det vidare till <DiagnosForm /> komponent
let {diagnos} = patient; 
let {behandlingar} = patient;
let {allmänTillstånd} = patient;


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

    }

   })

  }


  const allmänTillståndChagneHandler =(e)=>{
    setPatient({
      ...patient,
      allmänTillstånd:{
        ...patient.allmänTillstånd,
        [e.target.name]: e.target.value
      }
    })
  }

const diagnosChangeHandler =(e) =>{
  setPatient({
    ...patient,
    diagnos:{
      ...patient.diagnos,
      [e.target.name]: e.target.value,

    }
  })
}
  return (
    <>
    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Patient Information
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
 {/* Patient information */}
 <div className="row justify-content-center align-items-center g-2">
      <div className="col">
        <h3>Patient information</h3>
        <Patientform patientChangeHandler={patientChangeHandler}
         setPatient={setPatient} patient={patient} />
      </div>
    </div>

        </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Diagnos
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
  {/* Diagnos */}
<div className="row justify-content-center align-items-center g-2">
      <div className="col">
        <h3>Diagnos</h3>
        <DiagnosForm 
        diagnosChangeHandler={diagnosChangeHandler}
        setPatient={setPatient}
        diagnos={diagnos}
        />
      </div>
    </div> 

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Behandling
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
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
    </div>
  </div>



  {/* Allmäntillstånd */}

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Allmäntillstånd
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
     <div className="row justify-content-center align-items-center g-2">
      <div className="col">
        <h3>Allmäntillstånd</h3>
        <AllmäntillståndForm 
        allmänTillstånd={allmänTillstånd}
        allmänTillståndChagneHandler={allmänTillståndChagneHandler}
        setPatient={setPatient}
        />
      </div>
    </div>
      </div>
    </div>
  </div>
</div>


    <div className="container">
     

    


{/* test form */}
{/* <form>
  <input type="text" value={patient.behandlingar.behandlingsTyp} onChange={changeHandler}/>
  <input type="date" value={patient.behandlingar.behandlingsDatum} onChange={changeHandler}/>
</form> */}
   
  </div>
  </>
  )
}

export default PatientRegister;
