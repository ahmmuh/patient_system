import './App.css';
import CancerAnmalan from './components/CancerAnmalan';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Start from './Start';


function App() {
return (
   <Router>
     <>
    <Navbar/>
    <div className="App container p-5">
      <Routes>
        <Route path='/cancerAnmalan' element={<CancerAnmalan/>}/>
        <Route path='/' element={<Start/>}/>
      </Routes>
   
    </div>

    </>
   </Router>
  );
}

export default App;
