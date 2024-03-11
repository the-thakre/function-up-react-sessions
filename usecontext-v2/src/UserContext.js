import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();
// creating the context;

const UserProvider = ({ children }) => {
    const [user, setUser] = useState('Vishal');

    const updateUser = (newUser) => {
        setUser(newUser);
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };
