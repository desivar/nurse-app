import React, { useEffect, useState } from 'react';
import { fetchUsers, createUser, updateUser, deleteUser } from '../api';
import UserForm from './UserForm';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await fetchUsers();
      setUsers(response.data);
    };
    loadUsers();
  }, []);

  const handleAddOrUpdate = async (user) => {
    if (editingUser) {
      await updateUser(editingUser._id, user);
    } else {
      await createUser(user);
    }
    setEditingUser(null);
    const response = await fetchUsers();
    setUsers(response.data);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    const response = await fetchUsers();
    setUsers(response.data);
  };

  return (
    <div>
      <h1>Users</h1>
      <UserForm user={editingUser} onSubmit={handleAddOrUpdate} />
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.username}
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;