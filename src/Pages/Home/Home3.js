import React, { useContext } from 'react'
import {stateContext} from './Home2'

const Home3 =() => {

const state = useContext(stateContext) 
    return (
        <div>
        <div>Count = {state.buttonState}</div>
        <button onClick ={()=> state.buttonDispatch({type: "INCREMENT", value: 10})}>Increment</button>
        <button onClick ={()=> state.buttonDispatch({type: "DECREMENT",value: 10})}>Decrement</button>
        <button onClick ={()=> state.buttonDispatch({type: "RESET", value: 0})}>Reset</button>
    </div>
    )
}

export default Home3
