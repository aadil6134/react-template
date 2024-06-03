import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './UserDetails.css'

const UserDetails = () => {
    const {id} = useParams()
    const [userDetails, setUserDetails] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEdit, setIsEdit] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`)
        .then(response => {
            setUserDetails(response.data);
            setLoading(false);
        })
        .catch(error => {
            setError(error.message);
            setLoading(false);
        });
    }, [])

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
    

    const onClickButton = () => {
        setIsEdit(!isEdit)
    }

    
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    console.log(userDetails)

    const userDetailsComponent = () => (
        <div className='user-container'>
            <div className='label-container'>
                <h1 className='label'>NAME</h1>
                <p className='element'>{userDetails.name}</p>
            </div>
            <div className='label-container'>
                <h1 className='label'>DATE OF BIRTH</h1>
                <p className='element'>{userDetails.date_of_birth}</p>
            </div>
            <div className='label-container'>
                <h1 className='label'>CONTACT NUMBER</h1>
                <p className='element'>{userDetails.contact_number}</p>
            </div>
            <div className='label-container'>
                <h1 className='label'>EMAIL ID</h1>
                <p className='element'>{userDetails.email_id}</p>
            </div>
            <div className='label-container'>
                <h1 className='label'>USER DESCRIPTION</h1>
                <p className='element'>{userDetails.user_description}</p>
            </div>
            <div>
                <button type='button' onClick={onClickButton} className='btn'>EDIT DETAILS</button>
            </div>
        </div>
    )

    const editUserComponent = () => (
        <div className="container">
            <h1>Edit User</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input name="name" value={userDetails.name} onChange={handleChange} placeholder="Name" required />
                </div>
                <div className="form-group">
                    <label>Date of Birth</label>
                    <input name="dateOfBirth" value={userDetails.date_of_birth} onChange={handleChange} placeholder="Date of Birth" required />
                </div>
                <div className="form-group">
                    <label>Contact Number</label>
                    <input name="contactNumber" value={userDetails.contact_number} onChange={handleChange} placeholder="Contact Number" required />
                </div>
                <div className="form-group">
                    <label>Email ID</label>
                    <input name="emailId" value={userDetails.email_id} onChange={handleChange} placeholder="Email ID" required />
                </div>
                <div className="form-group">
                    <label>User Description</label>
                    <input name="userDescription" value={userDetails.user_description} onChange={handleChange} placeholder="User Description" required />
                </div>
                <button type="submit">Update User</button>
                <button type='button' onClick={onClickButton} className='btn'>CANCEL</button>
            </form>
        </div>
    )

    return (
        <div>
            <h1>USER DETAILS</h1>
            {isEdit ? editUserComponent() : userDetailsComponent()}
        </div>
    )
}

export default UserDetails