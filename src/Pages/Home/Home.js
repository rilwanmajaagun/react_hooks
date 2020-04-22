import React, {useState, useEffect} from 'react';
import './Home.css';

const Home = () => {

    useEffect(() => {
      document.title = `You Clicked ${count} times`
      console.log("mounted and updated")
      return ()=>{
          console.log('unmounted')
      }
    })

const [count, setCount] = useState(0);
const [state, setState] = useState({
    name:'No One',
    income: '$0',
    job: 'jobless'
});

const update = () => {
    setState({
        ...state,
        name: 'Ade',
        income: '$9000',
        job: 'Janitor'
    })
}

  return (
    <div className="App">
     <button onClick ={(e) => setCount(count + 1)}>Increment</button>
     <button onClick ={(e) => setCount(count - 1)}>decrement</button>
     <button onClick ={(e) => setCount(count * 5)}>multiply</button>
    <p>Current state is {count}</p>
    <button onClick={update}> Click</button>
    <p> Hello {state.name}, you earn {state.income} as a {state.job}</p>
    </div>
  );
}

export default Home;