import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// USECONTEXT : 
// ANIMATIONS : 
// REACT TOASTIFY

function App() {
  return (
    <div className="App">
      <div className='rotating-block' onClick={() => {
        toast('WOW IT IS EASY!!!!!');
      }}></div>
      <ToastContainer />
    </div>
  );
}

export default App;
