import { useEffect, useState } from 'react';
import './App.css';
import AllmäntillståndForm from './components/AllmäntillståndForm';
import BehandlingsForm from './components/BehandlingsForm';
import DiagnosForm from './components/DiagnosForm';
import OperationskodForm from './components/OperationskodForm';
import PatientRegister from './components/PatientRegister';
import Patientform from './components/Patientform';


function App() {
  let behandlingsLista = [
    {behandlingID: 1, behandlingsTyp: "kirurgi"},
    {behandlingID: 2, behandlingsTyp: "strålbehandling"},
    {behandlingID: 3, behandlingsTyp: "cytostatikabehandling"}
  ]


  let diagnosLista = [
    {diagnosId:1, diagnosTyp: "PAD"},
    {diagnosId:2, diagnosTyp: "cytologi"},
    {diagnosId:3, diagnosTyp: "röntgen"},
    {diagnosId:4, diagnosTyp: "klinisk undersökning"},
  ]

  // const [diagnosDatum, setDiagnosDatum] = useState("")

  const [diagnos,setDiagnos] = useState({
    diagnosTyp: "",
    diagnosDatum: new Date
});
const [allmäntillStånd, setAllmäntillstånd] = useState({

})


  const [behandling,setBehandling] = useState({})


  const [selectedBehandling, setSelectedBehandling] = useState("")

  const [operationkod,setOperationkod] = useState([])
  const [ecog, setEcog] = useState(0)

  const [patient, setPatient] = useState()

  const handleChangeForDiagnos =(e) =>{
    const value = e.target.value
    setDiagnos({...diagnos, [e.target.name]: value});
    
  }
  // [event.target.name] : value



// useEffect(() =>{
//   setBehandling(behandling);
  // setSelectedBehandling(selectedBehandling)

  // console.log("Diagnos ", diagnos)
  // console.log("behandling ", behandling)
  // console.log("Operationkod ", operationkod)
  // console.log("ECOG ", ecog) 
  // console.log("Patient ", patient)
// console.log("Diagnos: ", diagnos)

// },[])
  return (
    <div className="App container mt-5">

      <PatientRegister/>

    
    
    <hr/>
    <div className="row justify-content-center align-items-center g-2"
    >
      <div className="col">
        <h3>Diagnos</h3>
        <p>Form</p>
      </div>
    </div>

    <hr/>
    <div className="row justify-content-center align-items-center g-2"
    >
      <div className="col">
        <h3>Behandling</h3>
      </div>
    </div>

    <hr/>


    <div className="row justify-content-center align-items-center g-2"
    >
      <div className="col">
        <h3>AllmäntillståndForm</h3>
      </div>
    </div>

    </div>
  );
}

export default App;
