import logo from './logo.svg';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './components/Home';
import Products from './components/Products';
import Navigation from './components/Navigation';
import AboutUs from './components/AboutUs';
import OurStory from './components/OurStory';
import ContactUs from './components/ContactUs';
import Post from './components/Post';
import { useState } from 'react';

function App() {
  const [id, setId] = useState(1);
  const navigate = useNavigate();
  return (
    <div className="App">
      {/* <div className='navigation'>
        <Navigation />
      </div> */}
      <button onClick={() => {
        setId(id + 1);
        navigate('/post/' + (id + 1)) //  /post/3

      }}>INCREASE THE ID</button>
      <div className='main-content'>
        <Routes>
          <Route exact path="/post/:id" element={<Post />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
