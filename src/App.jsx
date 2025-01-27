import React, { useState, useEffect } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import ErrorBoundary from './components/ErrorBoundary';
import { fetchUsers, updateUser, addUser, deleteUser } from './server/index'
import Navbar from '../src/components/Navbar/Navbar';


const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then(response => setUsers(response.data))
      .catch(() => alert('Failed to fetch users.'));
  }, []);

  const handleSave = (user) => {
    if (user.id) {
      // Update existing user
      updateUser(user.id, user)
        .then(response => {
          setUsers(users.map(u => (u.id === user.id ? response.data : u)));
          setEditingUser(null);
        })
        .catch(() => alert('Failed to update user.'));
    } else {
      // Add new user
      addUser(user)
        .then((response) => {
          setUsers([...users, response.data]);
          setEditingUser(null);
        })
        .catch(() => alert('Failed to add user.'));
    }
  };

  const handleDelete = (id) => {
    deleteUser(id)
      .then(() => setUsers(users.filter(user => user.id !== id)))
      .catch(() => alert('Failed to delete user.'));
  };

  return (
    <>
      <Navbar />
      <ErrorBoundary>
        <UserList users={users} onEdit={setEditingUser} onDelete={handleDelete} />
        <UserForm initialData={editingUser} onSave={handleSave} />
      </ErrorBoundary>
    </>

  );
};

export default App;
