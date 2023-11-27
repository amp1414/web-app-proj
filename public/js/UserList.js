import React, { useState, useEffect } from 'react';
import { fetchUsers } from './api'; // Adjust the path based on your project structure

const UserList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>User List</h2>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{${user.name} - ${user.email}}</li>
          ))}
        </ul>
      )}
    </div>
  );
};