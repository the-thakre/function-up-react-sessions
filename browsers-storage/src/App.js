import logo from './logo.svg';
import './App.css';
import LocalStorage from './LocalStorage';
import SessionStorage from './SessionStorage';
import Cookie from './Cookies';
import Demo from './Demo';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      {/* <LocalStorage />
      <SessionStorage />
      <Cookie /> */}
      <button onClick={() => {
        setCount(count + 1);
      }}>Click me</button>
      <Demo count={count} />
    </div>
  );
}

export default App;
