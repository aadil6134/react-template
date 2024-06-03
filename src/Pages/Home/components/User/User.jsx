import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './User.css';

function User({ user }) {
  const handleDelete = () => {
    axios.delete(`http://localhost:3000/delete-user/${user.id}`)
      .then(() => {
        alert('User deleted successfully');
        window.location.reload(); // Refresh to show updated list
      })
      .catch(error => {
        alert(`Error: ${error.message}`);
      });
  };

  return (
    <li>
      <Link to={`/user/${user.id}`}>
        <div>
          <h1 className='name'>{user.name}</h1>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={() => window.location.href = `/edit-user/${user.id}`}>Edit</button>
        </div>
      </Link>
    </li>
  );
}

export default User;
