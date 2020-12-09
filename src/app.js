import React, { Component } from 'react';
import Employees from './compnonents/employeeTable/Employees';
import Header from './compnonents/Header';
import SearchBar from './compnonents/SearchBar';


class App extends Component {

    constructor() {
        super();

        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(res => {
                console.log(res)
                this.setState({
                    employees: res
                });
            })
            .catch(err => console.log("Error fetching employees: " + err))
    };

    render() {
        return (
            <div>
                <Header
                    title="Employee Directory!"
                />

                <SearchBar />

                <Employees/>

                <ul>
                    {this.state.employees.map(employee => (
                        <li key={employee.id}>
                            {employee.name} ----- {employee.name} ----- {employee.email} ----- {employee.phone}
                        </li>
                    ))}
                </ul>

            </div>
        );
    }
}

export default App;
