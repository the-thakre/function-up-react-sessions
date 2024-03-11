import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import ShowProfile from './ShowProfile';

const UserProfile = () => {
    const { user, updateUser } = useContext(UserContext);

    const handleLogout = () => {
        updateUser('NEW USER');
    };

    return (
        <div>
            <ShowProfile />
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
