import React, { useState } from "react";
import DiagnosForm from "./DiagnosForm";
import BehandlingsForm from "./BehandlingsForm";
import Patientform from "./Patientform";
import AllmantillstandForm from "./AllmantillstandForm";
import { useNavigate } from "react-router-dom";
import FormButton from "../customComponents/FormButton";
import { formValidationSchema } from "../validation/validateForm";

function CancerAnmalan() {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const [patient, setPatient] = useState({
    firstName: "",
    lastName: "",
    age: "",
    phone: "",
    diagnos: { diagnosTyp: "", diagnosDatum: "" },
    behandlingar: [
      {
        behandlingsTyp: "",
        behandlingsDatum: "",
        kirurgi: {
          operationskod: "",
        },
      },
    ],

    allmanTillstand: {
      ecog: 0,
      datum: "",
    },
  });

  // const formValidationSchema = Yup.object({

  //   firstName: Yup.string().required(),
  //     lastName: Yup.string().required(),
  //     age: Yup.number().required(),
  //     phone: Yup.number().required(),

  //     diagnos: { 
  //       diagnosTyp: Yup.string().required(),
  //     diagnosDatum: Yup.date().required()
  //    },
      
  //     behandlingar: Yup.array(
  //       Yup.object({
  //           behandlingsTyp: Yup.string().required(),
  //           behandlingsDatum: Yup.date().required(),
  //           kirurgi: {
  //             operationskod: Yup.string().required(),
  //         },
  //       })
  //     ),
  
    
  
  //     allmanTillstand: {
  //       ecog: Yup.number().required(),
  //       datum: Yup.date().required(),
  //     },
  // })
  

  // ta ut diagnos from patient objekt - skicka in det vidare till <DiagnosForm /> komponent
  let { allmanTillstand, behandlingar, diagnos } = patient;

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


  // function validatePatirntForm(patientData){
  //   formValidationSchema.isValid(patientData)
  //   .then((valid => console.log(valid)))
  //   .catch((error ) => console.log(error))

  // }

  //spara patien med nödvändiga information
  //spara flera patienter i LocalStorage DB
  let patients = [];
  const sparaPatient = async (e)  =>{
    e.preventDefault();

   try {
  
  await formValidationSchema.validate(patient,{abortEarly: false})
  console.log("form submitted", patient);
  } 
  catch (errors) {
    console.log("Form errors", errors)
    
  }
    // patients.push(patient);
    // patients = JSON.parse(localStorage.getItem("patients", "[]"));
    //   localStorage.setItem("patients", JSON.stringify(patients));
    //   setPatient(patient);
    //   console.log("Patient lista ", patients)
    //   navigate("/");

    
  }

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-10 ">
        <form onSubmit={sparaPatient}>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button bg-light"
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
                <div className="row justify-content-center align-items-center g-2">
                  <div className="col">
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
                    <i
                      className="fa fa-info-circle text-success"
                      title="Operationskodfältet visas endast när ‘kirurgi’ skrivs in som behandlingstyp"
                      style={{
                        fontSize: "1rem",
                      }}
                    ></i>
                    <small style={{ paddingLeft: ".4rem", fontSize: ".7rem" }}>
                      Operationskodfältet visas endast när ‘kirurgi’ skrivs som
                      behandlingstyp
                    </small>

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

            <FormButton
            type={"submit"}
            title={"Spara"}
            btnClass={"btn btn-lg "}
            style={{
              backgroundColor: "#b6a795",
              color: "white",
              width: "100%",
            }}
          />
          </div>

       
        </div>
      </form>
        </div>
      </div>
    </>
  );
}

export default CancerAnmalan;
