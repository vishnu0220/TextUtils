import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type,
    })
    
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{

    // changing the title of page frequently

    // setInterval(() => {
    //   document.title = "Vishnu";
    // }, 500);

    // setInterval(() => {
    //   document.title = "Hey";
    // }, 1000);

    
    if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = "#042743";
        document.body.style.color = "white";
        showAlert("Dark mode has been enabled", "success");
        // document.title = "Dark mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
        // document.title = "Light mode"
    }
  }
  
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter Text Here to Analyze below"  mode={mode} alert={showAlert}  />
      </div>
    </>
  );
}

export default App;
