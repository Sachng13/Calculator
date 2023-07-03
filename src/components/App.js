import Display from "./Display";
import Buttons from "./Buttons";
import { useState } from "react";
import Nav from "./Nav";


function App() {

  const [state, setState] = useState("0");

  function handle(e) {
   if (state.charAt(state.length-1)=="+"
   || state.charAt(state.length-1)=="-"
   || state.charAt(state.length-1)=="*"
   || state.charAt(state.length-1)=="/"){
    if (e.target.value=="+"
   || e.target.value=="-"
   || e.target.value=="*"
   || e.target.value=="/"){
        setState(state.replace(state.charAt(state.length-1),e.target.value));
        return;
    }
    else if (e.target.value=="="){
      setState(state.substring(0,state.length-1));
      return ; 
    }
    else if (e.target.value=="%" || e.target.value=="+/-"){
      return ; 
    }
   }
    switch (e.target.value) {
      case "=":
        let result = Function("return " + state)();
        setState(result.toString());
        break;
      case "C":
        setState("");
        break;
      case "+/-":
        let result1 = Function("return " + state)();
        result1 = -result1;
        setState(result1.toString());
        break;
      case "%":
        let result2 = Function("return " + state)();
        result2=result2/100;
        setState(result2.toString());
        break;
      default:
        setState(state + e.target.value);
        break;
    }
  }

  return (
    <>
      <Nav></Nav>
     <div className="block">
      <Display value={state} />
      <Buttons handle={handle} />
    </div>
    </>
   
  );
}


export default App;