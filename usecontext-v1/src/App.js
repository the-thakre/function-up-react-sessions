import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ThemeContext from './ThemeContext';
import Theme from './Theme';

function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <button onClick={() => {
          setTheme('light')
        }}>Click me</button>
        <Theme />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
