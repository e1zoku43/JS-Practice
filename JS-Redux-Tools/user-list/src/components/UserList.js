import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions';
import './UserList.css'; // Импортируем CSS файл

const UserList = () => {
    const dispatch = useDispatch();
    const { loading, users, error } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div className="book">
            <div className="book-cover">
                <h1>USER LIST</h1>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.name} - {user.email}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UserList;