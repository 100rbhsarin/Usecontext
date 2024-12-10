import { act, useReducer } from "react"



export const UseReducer = () => {
const initialstate = {
    count:0,
    inc:1,
    dec:1
}


const reducer = (state, action)=>{
console.log( state, action)

// if(action.type == "INCREMENT"){
//    return state + 1
// }

// if(action.type == "DECREMENT"){
//     return state - 1
//  }

//  if(action.type == 'RESET'){
//     return state = 0
//  }

switch(action.type){
case 'INCREMENT':
return { ...state, count: state.count + state.inc}

case 'DECREMENT':
    return{...state, count: state.count - state.dec }

case 'RESET':
    return{state, count: 0 }
    
    case 'DEFAULT':
    return{state}
}}


 const [state, dispatch] = useReducer(reducer, initialstate)

    return (
        <>
        <div>

<h1>{state.count}</h1>


{/* //dispatch will send action to reduce function  */}

<button  onClick={()=>dispatch({type : 'INCREMENT'})}>Increment</button> 
<button onClick={()=>dispatch({type : 'DECREMENT'})}>Decrement</button>
<button onClick={()=>dispatch({type : 'RESET'})}>RESET</button>

        </div>
        </>
    )
}