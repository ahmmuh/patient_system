import { useEffect, useState } from 'react';
import './App.css';
import AllmäntillståndForm from './components/AllmantillstandForm';
import BehandlingsForm from './components/BehandlingsForm';
import DiagnosForm from './components/DiagnosForm';
import OperationskodForm from './components/OperationskodForm';
import PatientRegister from './components/PatientRegister';
import Patientform from './components/Patientform';


function App() {

// const [allmäntillStånd, setAllmäntillstånd] = useState({

// })
//   const [behandling,setBehandling] = useState({})


//   const [selectedBehandling, setSelectedBehandling] = useState("")

//   const [operationkod,setOperationkod] = useState([])
//   const [ecog, setEcog] = useState(0)

//   const [patient, setPatient] = useState()

 
  return (
    <div className="App container mt-5">
      <PatientRegister/>
    </div>
  );
}

export default App;
