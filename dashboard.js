import React from 'react';

import ReactDOM from 'react-dom';
import Login from './login';

export default function Dashboard() {

var  successResponse = {
    data: {
    activeUsers: 231,
    inactiveUsers: 454,
    userLogs: [
    {
    firstName: 'Mark',
    lastName: 'Otto',
    phoneNumber:'928-339-5901',
    Address: '1221 Clarksburg Park Road, JBPHH, Hawaii-96860'
    },
    {
    firstName: 'Job',
    lastName: 'Thornton',
    phoneNumber:'528-329-5924',
    Address: '3698 Charack Road, ELVASTON, Illinois-62334'
    },
    {
        firstName: 'Florence',
        lastName: 'freebies',
        phoneNumber:'343-123-5457',
        Address: '3816 Melody Lane, Midlothian, Virginia-23113'
        },
        ]
        },
}
// const handleSignOut =()=>{
//   return  ReactDOM.render(
//     <Login />,
//      document.getElementById('root')
//    );

// }
    return (
        <section className="container">
        <div className="left-nav">
        <h3>Users</h3>
        <span>Dashboard</span>
        <span>Logs</span>
        <span >Signout</span>
      </div>
      <div className="right-nav">
        <table className="userbox">
<tbody>
<tr>
<td> <div className="active"><b>Active Users</b>{successResponse.data.activeUsers}</div></td>
<td>  <div className="inactive"><b>In Active Users</b>{successResponse.data.inactiveUsers}</div></td>
</tr>

</tbody>

        </table>
       
        
          <table className="dashboartable">
                    <thead>
                      <tr>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>phoneNumber</th>
                        <th>Address</th>
                      </tr>
                    </thead>
                    <tbody>
                      {successResponse.data.userLogs.map((eachrow, i) => (
                        //console.log(eachrow.firstName)
                        <tr key={i}>
                          
                          <td className="queuer_name">
                              {eachrow.firstName}
                          </td>
                          <td className="queuer_name">
                              {eachrow.lastName}
                          </td>
                          <td className="queuer_name">
                              {eachrow.phoneNumber}
                          </td>
                          <td className="queuer_name">
                              {eachrow.Address}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
      </div>
    </section>
    )
}
