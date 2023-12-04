import React, { Component } from 'react';


class EmployeePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
    }


    render() {
        return (
            <div>
                <h1>Employee List</h1>
                <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
    
            <tr >
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button onClick></button>
              </td>
            </tr>
          
        </tbody>
      </table>
            </div>
        );
    }
}

export default EmployeePage;
