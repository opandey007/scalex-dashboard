import React from 'react';
import ReactDOM from 'react-dom';

import Dashboard from "./dashboard"
const axios = require('axios').default;
var  ele
const  getLoginDetails = (email,pas)=>{
    console.log(email,pas)
   if(email==="developer@uitest.com" && pas==="react2020"){
return  ReactDOM.render(
    <Dashboard />,
     document.getElementById('root')
   );
   }else{
     ele = document.getElementById('err');
    ele.innerHTML += 'Incorrect Email or Password';
   }
}

export default  getLoginDetails