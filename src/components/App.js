import Display from "./Display";
import Buttons from "./Buttons";
import { useState } from "react";
// let result = Function("return " + state)();

function App() {

  const [state, setState] = useState("");

  function handle(e){
   switch (e.target.value) {
    case "=":
    let result = Function("return " + state)();
     setState(result);
      break;
    case "C":
     setState("");
      break;
    case "+/-":
     let result1 = Function(state)();
     result1=result1*-1;
     setState(result1);
    default:
     setState(state+e.target.value);
      break;
   }
  }
    
  return (
    <div className="block">
         <Display value={state}/>
         <Buttons handle={handle}/>
    </div>
  );
}


export default App;