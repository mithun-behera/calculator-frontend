import Header from "./components/Header";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";
import { useState,useEffect } from "react";

function App() {

  const [display, setDisplay] = useState("");
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
    
  useEffect(() => {
    const saveHistory = localStorage.getItem(history);

    if(saveHistory){
      setHistory(JSON.parse(saveHistory));
    }
  },[]);
  useEffect(() => {
    localStorage.setItem(
      "history",
      JSON.stringify(history)

    );
  },[history]);
  return (
    <>
     <div className={darkMode ? "bg-dark text-white min-vh-100" : "bg-light min-vh-100"}>  
      <Header 
         darkMode={darkMode}
         setDarkMode={setDarkMode}/>

      <Calculator
        display={display}
        setDisplay={setDisplay}
        history={history}
        setHistory={setHistory}
        darkMode = {darkMode}
      />

      <Footer />

      </div>
       </>
    );
   
}

export default App;