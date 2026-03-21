import React from "react";
 import { useRef,useEffect,useState } from "react";

 function UseRef(){
const [input,setInput]=useState("");
const inputRef=useRef();

console.log("getting rendered");


    return(
        <div>
            <h1>Input</h1>
            <input
            ref={inputRef}
            te
        </div>
    );
 }
