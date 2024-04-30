import { useEffect, useState } from 'react';
import './App.css';
import AllmäntillståndForm from './components/AllmäntillståndForm';
import BehandlingsForm from './components/BehandlingsForm';
import DiagnosForm from './components/DiagnosForm';
import OperationskodForm from './components/OperationskodForm';
import PatientRegister from './components/PatientRegister';


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
    diagnosDatum: ""
});
const [allmäntillStånd, setAllmäntillstånd] = useState({

})


  const [behandling,setBehandling] = useState({})


  const [selectedBehandling, setSelectedBehandling] = useState("")

  const [operationkod,setOperationkod] = useState([])
  const [ecog, setEcog] = useState(0)

  const [patient, setPatient] = useState()


useEffect(() =>{
  setBehandling(behandling);
  setDiagnos(diagnos)
  setSelectedBehandling(selectedBehandling)

  // console.log("Diagnos ", diagnos)
  console.log("behandling ", behandling)
  // console.log("Operationkod ", operationkod)
  console.log("ECOG ", ecog) 
  // console.log("Patient ", patient)
console.log("Diagnos: ", diagnos)

},[])
  return (
    <div className="App container mt-5">
      <PatientRegister 
      patient={patient} 
      setPatient={setPatient}
      />
    <DiagnosForm 
    diagnosLista={diagnosLista}
    diagnos={diagnos}
    setDiagnos={setDiagnos}
    />

    <BehandlingsForm behandling={behandling}
    setBehandling={setBehandling}
    behandlingsLista={behandlingsLista}
    selectedBehandling={selectedBehandling}
    setSelectedBehandling={selectedBehandling}
    />

    {selectedBehandling === "kirurgi"? "Ahmed":null}

    <div className='row'>
     {
      behandling === "kirurgi"? <OperationskodForm 
      operationkod={operationkod}
      setOperationkod={setOperationkod}
      
      /> : null
     }
    </div>

    <AllmäntillståndForm
    ecog={ecog}
    setEcog={setEcog}
    />

    <hr/>

    

<div className='mt-5'>
<button type='submit' className='btn btn-primary'>Spara</button>

  </div>   
    </div>
  );
}

export default App;
