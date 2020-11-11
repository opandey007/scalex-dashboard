import React,{useState,useEffect} from 'react'
import Login from "./login"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Dashboard from './dashboard';
  
export default function Routers() {
const [islogin ,setlogin]=useState(true)
const[showLogin ,setShowLogin] = useState(false)


//   if (islogin) {
//     return  <Login />;
//   }
    return (
        <section>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </section>
    )
}
