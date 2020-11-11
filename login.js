import React from 'react'
import "./main.css"
import getLoginDetails from './apicall'
export default function Login() {
//send login details
   const handleLogin =()=>{
        var emailId =document.getElementById("email").value;
        var password = document.getElementById("paswrd").value;
        getLoginDetails(emailId,password)    }
    return (
    <section className="container">
    <div className="left-half">
  </div>
  <div className="right-half">
      <h2>Login Page</h2>
   <input type="text" id="email" placeholder="Enter user name" className="login_cre"/>
   <input type="password" id="paswrd" placeholder="Enter password" className="login_cre"/>
   <span id="err"></span>
   <button className="btn-grad" onClick={handleLogin}>SIGN IN</button>
  </div>
</section>

    )
}
