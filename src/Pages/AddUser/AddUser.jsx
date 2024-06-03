import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './AddUser.css';

const AddUser = () => {
  const [userDetails, setUserDetails] = useState({
    id: uuidv4(),
    name: '',
    dateOfBirth: '',
    contactNumber: '',
    emailId: '',
    userDescription: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/create-user/',  userDetails)
      .then(() => {
        alert('User added successfully');
        setUserDetails({
          id: uuidv4(),  // Reset ID for a new user
          name: '',
          dateOfBirth: '',
          contactNumber: '',
          emailId: '',
          userDescription: ''
        });
      })
      .catch(error => {
        alert(`Error: ${error.message}`);
      });
  };

  return (
    <div className="container">
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input name="name" value={userDetails.name} onChange={handleChange} placeholder="Name" required />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input name="dateOfBirth" value={userDetails.dateOfBirth} onChange={handleChange} placeholder="Date of Birth" required />
        </div>
        <div className="form-group">
          <label>Contact Number</label>
          <input name="contactNumber" value={userDetails.contactNumber} onChange={handleChange} placeholder="Contact Number" required />
        </div>
        <div className="form-group">
          <label>Email ID</label>
          <input name="emailId" value={userDetails.emailId} onChange={handleChange} placeholder="Email ID" required />
        </div>
        <div className="form-group">
          <label>User Description</label>
          <input name="userDescription" value={userDetails.userDescription} onChange={handleChange} placeholder="User Description" required />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
