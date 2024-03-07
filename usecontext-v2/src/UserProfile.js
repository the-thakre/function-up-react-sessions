import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserProfile = () => {
    const { user, updateUser } = useContext(UserContext);

    const handleLogout = () => {
        updateUser(null);
    };

    return (
        <div>
            {user ? (
                <div>
                    <p>Welcome, {user}!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <p>You are not logged in.</p>
            )}
        </div>
    );
};

export default UserProfile;
