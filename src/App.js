import './App.css';
import { useState } from 'react';

function App() {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const op = ['/', '*', '+', '-', '.' ];

  const updateCalc = value => {

    if (
      op.includes(value) && calc === '' ||
      op.includes(value) && op.includes(calc.slice(-1))
    ){
      return;
    }

    setCalc(calc + value);

    if (!op.includes(value)){
        setResult(eval(calc + value).toString());
    }

  }

  //Loop for create numbers 
  const createNumbers = () => {
      const numbers = [];
      
      for (let i = 1; i < 10; i++) {
           numbers.push(
             
            <button 
              onClick={() => updateCalc(i.toString())} 
              key={i}>
              {i}
            </button>
          )
      } 

      return numbers;
  } 

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const cancLast = () => {
    if (calc === '') {
        return;     
    }

    const value = calc.slice(0, -1);

    setCalc(value);
  }

  return (
      <div className="App">
        
          <div className="calculator">
          
            <div className="display">
              {result ? <span>({result})</span> : ''} 
              { calc || "0" }
            </div> 

            <div className="operators">
              <button onClick={() => updateCalc('/')}>÷</button>
              <button onClick={() => updateCalc('*')}>X</button>
              <button onClick={() => updateCalc('+')}>+</button>
              <button onClick={() => updateCalc('-')}>-</button>

              <button onClick={cancLast}>CANC</button>
            </div>
            
            <div className="digits">
                { createNumbers() }
                <button onClick={() => updateCalc('0')}>0</button>
                <button onClick={() => updateCalc('.')}>.</button>

                <button onClick={calculate}>=</button>
            </div>  
            
          </div>
      </div>
  );
}
export default App;
