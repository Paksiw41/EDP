import React, { useState, useEffect } from 'react';
import './leaveTable.css'; 

const LeaveTable = () => {
  // Define state variables for leave data, form inputs, and employee list
  const [leaveData, setLeaveData] = useState([]);
  const [employee, setEmployee] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [approved, setApproved] = useState(false);
  const [employeeList, setEmployeeList] = useState([]);

  // Simulate fetching employee data from an API
  useEffect(() => {
    // Example employee data fetched from an API
    const fetchedEmployeeData = [
      { id: 1, name: 'Employee 1' },
      { id: 2, name: 'Employee 2' },
      { id: 3, name: 'Employee 3' }
    ];
    // Set the employee list in state
    setEmployeeList(fetchedEmployeeData);
  }, []);

  // Function to handle leave submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new leave request to leaveData state
    setLeaveData([...leaveData, { employee, startDate, endDate, approved }]);
    // Clear form inputs
    setEmployee('');
    setStartDate('');
    setEndDate('');
    setApproved(false);
  };

  return (
    <div>
      <h2>Leave Management</h2>
      <form onSubmit={handleSubmit}>
        {/* Employee dropdown */}
        <div>
          <label htmlFor="employee">Employee:</label>
          <select id="employee" value={employee} onChange={(e) => setEmployee(e.target.value)}>
            {/* Populate options from employee list */}
            {employeeList.map((emp) => (
              <option key={emp.id} value={emp.id}>{emp.name}</option>
            ))}
          </select>
        </div>
        {/* Start date input */}
        <div>
          <label htmlFor="startDate">Start Date:</label>
          <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>
        {/* End date input */}
        <div>
          <label htmlFor="endDate">End Date:</label>
          <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>
        {/* Approval checkbox */}
        <div>
          <label htmlFor="approved">Approved:</label>
          <input type="checkbox" id="approved" checked={approved} onChange={(e) => setApproved(e.target.checked)} />
        </div>
        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
      {/* Display leave table */}
      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Approved</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through leaveData and display leave requests */}
          {leaveData.map((leave, index) => (
            <tr key={index}>
              <td>{employeeList.find(emp => emp.id === leave.employee)?.name}</td>
              <td>{leave.startDate}</td>
              <td>{leave.endDate}</td>
              <td>{leave.approved ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveTable;
