import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ThemeContext from './ThemeContext';
import Theme from './Theme';

function App() {
  const [theme, setTheme] = useState('dark');

  // createContext => to create context
  // Provider => used fro wrapping to provide context.
  // useContext => to use the context.

  return (
    // <ThemeContext.Provider value={count}>
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
