import React, { useState, useEffect } from 'react';

const SessionStorage = () => {
    // State to manage the data you want to store in sessionStorage
    const [myData, setMyData] = useState('');

    // Effect to load data from sessionStorage when the component mounts
    useEffect(() => {
        const storedData = sessionStorage.getItem('myData');
        if (storedData) {
            setMyData(storedData);
        }
    }, []); // Empty dependency array ensures the effect runs only once on mount

    // Function to update the state and sessionStorage when data changes
    const updateData = (newData) => {
        setMyData(newData);
        sessionStorage.setItem('myData', newData);
    };

    return (
        <div>
            <h1>React with sessionStorage</h1>
            <input
                type="text"
                value={myData}
                onChange={(e) => updateData(e.target.value)}
                placeholder="Enter data"
            />
            <p>Data from sessionStorage: {myData}</p>
        </div>
    );
};

export default SessionStorage;
