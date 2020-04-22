import React, {useReducer} from 'react'
import Home3 from './Home3'

export const stateContext = React.createContext();

const initialState = 0

const reducer = (state, action) =>{
    switch(action.type){
        case "INCREMENT":
            return state+action.value
        case "DECREMENT":
            return state-action.value
        case "RESET":
            return action.value
        default:
            return state
    }
}

const Home2 =() => {
    // const data =[1, 2, 3, 4]
    // const initialvalue = 0
    // const reducer = (accumulator,index) => accumulator+index;
    // const res = data.reduce(reducer, initialvalue)
    // console.log(res);

    const [state, dispatch] = useReducer(reducer, initialState)

            return (
                <div>
                    <div>Count = {state}</div>
                    <button onClick ={()=> dispatch({type: "INCREMENT", value: 5})}>Increment</button>
                    <button onClick ={()=> dispatch({type: "DECREMENT",value: 5})}>Decrement</button>
                    <button onClick ={()=> dispatch({type: "RESET", value: 0})}>Reset</button>
                    <stateContext.Provider value={{buttonState: state, buttonDispatch: dispatch}}>
                        <Home3 />
                    </stateContext.Provider>
                </div>
            )
}

export default Home2