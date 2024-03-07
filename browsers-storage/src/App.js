import logo from './logo.svg';
import './App.css';
import LocalStorage from './LocalStorage';
import SessionStorage from './SessionStorage';
import Cookie from './Cookies';

function App() {
  return (
    <div className="App">
      <LocalStorage />
      <SessionStorage />
      <Cookie />
    </div>
  );
}

export default App;
