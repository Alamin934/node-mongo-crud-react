import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you want to delete the user?');
        if (proceed) {
            fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('user deleted successfully');
                        const remainingUsers = users.filter(user => user._id !== id);
                        setUsers(remainingUsers);
                    }
                })
        }
    }

    return (
        <div>
            <h2>This is Users: {users.length}</h2>
            <ul>
                {
                    users.map(user =>
                        <li key={user._id}>
                            Name={user.name} :: Email={user.email}
                            <Link to={`/users/update/${user._id}`}><button>Update</button></Link>
                            <button onClick={() => handleDeleteUser(user._id)}>X</button>
                        </li>)
                }
            </ul>
        </div>
    );
};

export default Users;