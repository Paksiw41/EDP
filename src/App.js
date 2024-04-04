// src/App.js
import React, { useState } from 'react';
import EmployeeForm from './Components/EmployeeForm';
import EmployeeList from './Components/EmployeeList';
import LeaveTable from './Components/LeaveTable'; // Import the LeaveTable component

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    // Generate a unique ID for the new employee
    const id = Math.floor(Math.random() * 10000) + 1;
    const newEmployee = { id, ...employee };
    setEmployees([...employees, newEmployee]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  return (
    <div className="App">
      <h1>Employee Management</h1>
      <EmployeeForm onSubmit={addEmployee} />
      <EmployeeList employees={employees} onDelete={deleteEmployee} />
      <LeaveTable /> {/* Render the LeaveTable component */}
    </div>
  );
}

export default App;
