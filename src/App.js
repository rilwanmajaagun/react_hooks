import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import { Switch, Route } from 'react-router-dom';
import Home2, { initialState } from './Pages/Home/Home2';
import About from './Pages/About/About';
import Services from './Pages/Services/Services'
import Home3 from './Pages/Home/Home3';


export const UserContext = React.createContext();
export const IncomeContext = React.createContext();
export const ServicesContext = React.createContext();




function App() {
  return (
    <div className="App">
      <UserContext.Provider value = {"Ade"}>
        <IncomeContext.Provider value = {"200"}>
      <Header/>
      </IncomeContext.Provider>
      </UserContext.Provider>
      <Switch>
        <Route exact path="/" component = {Home2}/>
        <Route exact path="/about" component={About}/>

        <ServicesContext.Provider value={"We provide great services"}>
        <Route exact path="/service" component = {Services}/>
        </ServicesContext.Provider>
        
        
      </Switch>
      {/* <Home2/>
      <Home3/> */}
    </div>
  );
}

export default App;
