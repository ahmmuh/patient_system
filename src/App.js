import { useEffect, useState } from 'react';
import './App.css';
import AllmäntillståndForm from './components/AllmantillstandForm';
import CancerAnmalan from './components/CancerAnmalan';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Canceranmalan from './Start';


function App() {
return (
   <Router>
     <>
    <Navbar/>
    <div className="App container p-5">
      <Routes>
        <Route path='/cancerAnmalan' element={<CancerAnmalan/>}/>
        <Route path='/' element={<Canceranmalan/>}/>
      </Routes>
   
    </div>

    </>
   </Router>
  );
}

export default App;
