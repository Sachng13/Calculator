import Display from "./Display";  // importing display component;
import Buttons from "./Buttons";  // importing buttons component;
import { useState } from "react"; // importing use state;
import Nav from "./Nav";     //importing navigation component


function App() {

  const [state, setState] = useState("0");
   // using state;

  function handle(e) {
    // handling of boundry cases .......... like when user will type * after * what should happen;
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

   //Using switch to handle buttons ;
    switch (e.target.value) {
      // = and we will get our answer;
      case "=":
        let result = Function("return " + state)();
        setState(result.toString());
        break;
      case "C":
        // C will clear the display
        setState("0");
        break;
      case "+/-":
        // to change the sign
        let result1 = Function("return " + state)();
        result1 = -result1;
        setState(result1.toString());
        break;
      case "%":
        // to get percentaged 
        let result2 = Function("return " + state)();
        result2=result2/100;
        setState(result2.toString());
        break;
      default:
        setState(state + e.target.value);
        break;
    }
  }
    // main ;
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