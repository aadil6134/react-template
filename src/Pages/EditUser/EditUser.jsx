import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './EditUser.css';

function EditUser() {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState({
    name: '',
    dateOfBirth: '',
    contactNumber: '',
    emailId: '',
    userDescription: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
      .then(response => {
        setUserDetails(response.data);
      })
      .catch(error => {
        alert(`Error: ${error.message}`);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/edit-user/${id}`, userDetails)
      .then(() => {
        alert('User updated successfully');
        window.location.href = '/';
      })
      .catch(error => {
        alert(`Error: ${error.message}`);
      });
  };

  return (
    <div className="container">
      <h1>Edit User</h1>
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
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}

export default EditUser;
