import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect }
from "react-router-dom";
import Page from './Page'
import BugList from './BugList'
export default function App() {


const[state,setState]=useState();
   
  return(<div className="app">
    <Router>
    <Switch>
    <Route path="/" render={(routeProps)=><Page {...routeProps}/>}/>
   <Redirect to="/"/>
   </Switch>
    </Router>
  </div>)
 }

