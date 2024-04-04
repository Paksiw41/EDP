import React, { useState } from 'react';
import EditEmployeeForm from './EditEmployeeForm';
import './employeeList.css';


const EmployeeList = ({ employees, onDelete }) => {
  const [editEmployeeId, setEditEmployeeId] = useState(null);

  const handleEditClick = (id) => {
    setEditEmployeeId(id);
  };

  const handleEditCancel = () => {
    setEditEmployeeId(null);
  };

  // Function to sort employees by a specific field
  const sortEmployees = (field) => {
    return employees.slice().sort((a, b) => {
      if (a[field] < b[field]) return -1;
      if (a[field] > b[field]) return 1;
      return 0;
    });
  };

  // Sort employees by name
  const sortedEmployees = sortEmployees('lastName');

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Email</th>
          <th>Contact Number</th>
          <th>Department</th>
          <th>Job Title</th>
          <th>Employment Type</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {sortedEmployees.map((employee) => (
          <tr key={employee.id}>
            <td>{`${employee.firstName} ${employee.middleInitial} ${employee.lastName}`}</td>
            <td>{`${employee.address.province}, ${employee.address.city}, ${employee.address.baranggay}, ${employee.address.zipCode}`}</td>
            <td>{employee.email}</td>
            <td>{employee.contactNumber}</td>
            <td>{employee.department}</td>
            <td>{employee.jobTitle}</td>
            <td>{employee.employmentType}</td>
            <td>
              <button onClick={() => handleEditClick(employee.id)}>Edit</button>
              <button onClick={() => onDelete(employee.id)}>Delete</button>
              {editEmployeeId === employee.id && <EditEmployeeForm employee={employee} onCancel={handleEditCancel} />}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;
