import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Products from './components/Products';
import Navigation from './components/Navigation';
import AboutUs from './components/AboutUs';
import OurStory from './components/OurStory';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <div className='navigation'>
        <Navigation />
      </div>
      <div className='main-content'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/our-story" element={<OurStory />} />
        </Routes></div>
    </div>
  );
}

export default App;
