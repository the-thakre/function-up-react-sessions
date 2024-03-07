import React, { useState, useEffect } from 'react';

const LocalStorage = () => {
    // State to manage the data you want to store in localStorage
    const [myData, setMyData] = useState('');

    // Effect to load data from localStorage when the component mounts
    useEffect(() => {
        const storedData = localStorage.getItem('key');
        if (storedData) {
            setMyData(storedData);
        }
    }, []); // Empty dependency array ensures the effect runs only once on mount

    //localStorage.setItem(key,value)
    //localStorage.getItem(key)

    // Function to update the state and localStorage when data changes
    const updateData = (newData) => {
        setMyData(newData);
        localStorage.setItem('key', newData);
    };

    return (
        <div>
            <h1>React with localStorage</h1>
            <input
                type="text"
                value={myData}
                onChange={(e) => updateData(e.target.value)}
                placeholder="Enter data"
            />
            <p>Data from localStorage: {myData}</p>
        </div>
    );
};

export default LocalStorage;
