import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [id])
    return (
        <div>
            <h2>Update: {user.name}</h2>
            <p>User id: {id}</p>
        </div>
    );
};

export default UpdateUser;