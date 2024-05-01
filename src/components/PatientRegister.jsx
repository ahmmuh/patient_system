import React, { useEffect, useState } from "react";
import { behandlingsLista, diagnosLista } from "../data/cancerData";
import DiagnosForm from "./DiagnosForm";
import BehandlingsForm from "./BehandlingsForm";
import Patientform from "./Patientform";
import AllmantillstandForm from "./AllmantillstandForm";
function PatientRegister() {
  const [patient, setPatient] = useState({
    firstName: "",
    lastName: "",
    age: "",
    phone: "",
    diagnos: { diagnosTyp: "", diagnosDatum: new Date() },
    behandlingar: [
      {
        behandlingsTyp: "",
        behandlingsDatum: new Date(),
        kirurgi: {
          operationskod: "Kirurgi is here",
        },
      },
    ],

    allmanTillstand: {
      ecog: 0,
      datum: new Date(),
    },
  });

  console.log(patient);

  // ta ut diagnos from patient objekt - skicka in det vidare till <DiagnosForm /> komponent
  let { diagnos, behandlingar, allmanTillstand } = patient;

  const patientChangeHandler = (e) => {
    e.preventDefault();
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  };

  const allmanTillstandChagneHandler = (e) => {
    setPatient({
      ...patient,
      allmanTillstand: {
        ...patient.allmanTillstand,
        [e.target.name]: e.target.value,
      },
    });
  };

  //behandlingar changeHandler
  const behandlingChangeHandler = (e) => {
    setPatient({
      ...patient,
      behandlingar: {
        ...patient.behandlingar,
        [e.target.name]: e.target.value,
      },
    });
  };
  const diagnosChangeHandler = (e) => {
    setPatient({
      ...patient,
      diagnos: {
        ...patient.diagnos,
        [e.target.name]: e.target.value,
      },
    });
  };

  //spara patien med nödvändiga information
  //spara flera patienter i LocalStorage DB
  let patients = []
  function sparaPatient(e) {
    e.preventDefault();
    setPatient(patient)
    patients = JSON.parse(localStorage.getItem("patients","[]"))
    patients.push(patient)
    localStorage.setItem("patients", JSON.stringify(patients));
    console.log(patient);
  }
  return (
    <>
      <form onSubmit={sparaPatient}>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Patient Information
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {/* Patient information */}
                <div className="row justify-content-center align-items-center g-2">
                  <div className="col">
                    <h3>Patient information</h3>
                    <Patientform
                      patientChangeHandler={patientChangeHandler}
                      setPatient={setPatient}
                      patient={patient}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Diagnos
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
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
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Behandling
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
              
            >
              <div className="accordion-body">
                {/* Behandlingar */}
                <div className="row justify-content-center align-items-center g-2">
                  <div className="col">
                    <h3>Behandlingar 
                   
                    <i className="fa fa-info-circle text-success" 
                    title="Operationskodsfältet visas endast när ‘kirurgi’ valts som behandlingstyp" style={{
                      fontSize: '1rem'
                    }}></i>

                   </h3>
                    <BehandlingsForm
                      behandlingar={behandlingar}
                      behandlingChangeHandler={behandlingChangeHandler}
                      setPatient={setPatient}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Allmäntillstånd */}

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Allmäntillstånd
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="row justify-content-center align-items-center g-2">
                  <div className="col">
                    <h3>Allmäntillstånd</h3>
                    <AllmantillstandForm
                      allmanTillstand={allmanTillstand}
                      allmanTillstandChagneHandler={
                        allmanTillstandChagneHandler
                      }
                      setPatient={setPatient}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-success mt-3">
            Spara
          </button>
        </div>
      </form>
    </>
  );
}

export default PatientRegister;
