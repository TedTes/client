import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect }
from "react-router-dom";
import Page from './Page'
import Connector from './Connector';
import BugList from './BugList'
export default function App() {


const[state,setState]=useState();
   
  return(<div className="App">
    <Router>
    <Switch>
    <Route path="/" component={Page}/>
   <Redirect to="/"/>
   </Switch>
    </Router>
  </div>)
 }

