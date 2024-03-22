import {useState,useRef} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	 e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value));
  };
 
  function times(e) { 
     e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value));
  }; 
 
  function divide(e) { 
     e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value));
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = "";
  }; 
 
  function resetResult(e) { 
  	e.preventDefault();
    setResult(0); 
    resultRef.current.innerText = "0";
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        <button onClick={minus} >Subraction</button>
        <button onClick={times} >Multiply</button>
        <button onClick={divide} >Divide</button>
        <button onClick={resetInput} >Reset input</button>
        <button onClick={resetResult} >Reset result</button>
      </form> 
    </div> 
  ); 
} 
 
export default App; 
