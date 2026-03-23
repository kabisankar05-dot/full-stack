
 import { useRef,useState,} from "react";

 function UseRef(){
const [input,setInput]=useState("");
const inputRef=useRef();

console.log("getting rendered");
 
// useEffect(()=>{
//     inputRef.current.focus();
// },[input]);

const display=()=>{
    console.log(inputRef.current);
    inputRef.current.focus();
};


    return(
        <div>
            <h1>Input</h1>
            <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(event)=>setInput(event.target.value)}/>
            <p>My name is {input}</p>
            <button onClick={display}>Show Input</button>
        </div>
    );
 };

 export default UseRef;
