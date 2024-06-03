import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from './components/User/User';
import './home.css'

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/users/')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(users)

  return (
    <div className="container">
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
