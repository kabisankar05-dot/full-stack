import { useReducer } from "react";

function Myreducer(){
    const counter=(state, action)=>{
        switch(action.type){
            case "increment":
                return state+1;
            case "decrement":
                return state-1;
            case "double":
                return state*state;
            default:
                return state;
        }

    }

    const [count, dispatch]=useReducer(counter, 0)
    return (
        <div>
            <h2>count is {count}</h2>
            <button onClick={()=> dispatch({type:"increment"})}>click</button>
            <button onClick={()=> dispatch({type:"decrement"})}>click</button>
            <button onClick={()=> dispatch({type:"double"})}>click</button>
        </div>
    )
}
export default Myreducer;