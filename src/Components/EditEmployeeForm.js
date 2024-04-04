import React, { useState } from 'react';

const EditEmployeeForm = ({ employee, onCancel }) => {
  const [formData, setFormData] = useState(employee);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submit logic (e.g., update employee data)
    // For now, we'll just log the updated data
    console.log('Updated Employee Data:', formData);
    // Reset the form and hide it
    setFormData(employee);
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
      <input type="text" name="middleInitial" value={formData.middleInitial} onChange={handleChange} placeholder="Middle Initial" />
      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
      {/* Add input fields for other employee information */}
      <button type="submit">Save</button>
      <button onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditEmployeeForm;
