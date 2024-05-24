import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import Form from './components/Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setmode] = useState('white');
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const removecolor=()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-secondary')
    document.body.classList.remove('bg-white')
  }
  const toggle = (cls) => {
    removecolor()
    console.log(cls)
    document.body.classList.add('bg-'+cls)

    if (mode === 'white') {
      setmode('secondary');
      document.body.style.backgroundColor = 'secondary';
      showalert(cls+" mode Enabled", "success")
    }
    else {
      setmode('white');
      document.body.style.backgroundColor = 'white';
      showalert(cls+" mode Enabled", "success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title='textutils' home='blog' about='About' mode={mode} toggle={toggle} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
            <Route exact path='/' element={<TextForm title="Enter the Text to Analyze" showalert={showalert} />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            {/* <Route exact path="/contact" element={<Form title="Email" example="Message"/>}>/</Route> */}
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
