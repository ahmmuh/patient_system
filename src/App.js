import { useEffect, useState } from 'react';
import './App.css';
import AllmäntillståndForm from './components/AllmantillstandForm';
import BehandlingsForm from './components/BehandlingsForm';
import DiagnosForm from './components/DiagnosForm';
import OperationskodForm from './components/OperationskodForm';
import PatientRegister from './components/PatientRegister';
import Patientform from './components/Patientform';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Canceranmalan from './Canceranmalan';


function App() {
return (
   <Router>
     <>
    <Navbar/>
    <div className="App container p-5">
      <Routes>
        <Route path='/' element={<PatientRegister/>}/>
        <Route path='/cancerAnmalan' element={<Canceranmalan/>}/>
      </Routes>
   
    </div>

    </>
   </Router>
  );
}

export default App;
