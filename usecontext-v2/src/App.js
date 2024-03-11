import React, { useState } from 'react';
import { UserProvider } from './UserContext';
import UserProfile from './UserProfile';
import ColorContext from './ColorContext';

const App = () => {
  const [color, setColor] = useState('red');
  let dummyColor = ['red', 'blue', 'green', 'orange', 'black']
  return (
    <ColorContext.Provider value={color}>
      <UserProvider>
        <div>
          <button onClick={() => {
            setColor(dummyColor[Math.ceil(Math.random(4))])
          }}>COLOR CHANGE</button>
          <h1>User Profile App</h1>
          <UserProfile />
        </div>
      </UserProvider>
    </ColorContext.Provider>
  );
};

export default App;