import React from 'react';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import './App.css';
import Login from '../Authentication/Login';
import Home from '../Home/Home';
import Registration from '../Authentication/Registration';
import FlightList from '../Component/FlightList';
import Search from '../Component/Search';



function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Registration} />
      <Route path="/Flightlist" component={FlightList} />
      <Route path="/Search" component={Search}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
