function Buttons(props) {
    
    return (
     <div className="btn-structure">
      <button className="btn operations" onClick={props.handle} value={"C"}>c</button>
      <button className="btn operations" onClick={props.handle} value={"+/-"}>	&plusmn;</button>
      <button className="btn operations" onClick={props.handle} value={"%"}> &#x25;</button>
      <button className="btn operations" onClick={props.handle} value={"/"}>&divide;</button>
      <button className="btn" onClick={props.handle} value={7}>7</button>
      <button className="btn" onClick={props.handle} value={8}>8</button>
      <button className="btn" onClick={props.handle} value={9}>9</button>
      <button className="btn operations" onClick={props.handle} value={"*"}>&times;</button>
      <button className="btn" onClick={props.handle} value={4}>4</button>
      <button className="btn" onClick={props.handle} value={5}>5</button>
      <button className="btn" onClick={props.handle} value={6}>6</button>
      <button className="btn operations" onClick={props.handle} value={"-"}>&#8722;</button>
      <button className="btn" onClick={props.handle} value={1}>1</button>
      <button className="btn" onClick={props.handle} value={2}>2</button>
      <button className="btn" onClick={props.handle} value={3}>3</button>
      <button className="btn operations" onClick={props.handle} value={"+"}>&#65291;</button>
      <button className="btn zero" onClick={props.handle} value={0}>0</button>
      <button className="btn" onClick={props.handle} value={"."}>.</button>
      <button className="btn operations" onClick={props.handle} value={"="}>=</button>

     </div>
    );
  }
  
  export default Buttons;