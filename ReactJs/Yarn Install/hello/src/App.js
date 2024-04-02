import './App.css';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React, {useState} from 'react';

function App() {

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled" , "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled" , "success"); 
    }
  }
  
  return (
    <>
      <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} />
      <Alert alert = {alert} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
