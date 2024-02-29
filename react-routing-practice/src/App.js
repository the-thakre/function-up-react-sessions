import logo from './logo.svg';
import './App.css';
import { Route, Link, Routes, useParams, Navigate, useLocation } from 'react-router-dom'

const Home = () => {
  const location = useLocation();
  console.log(location)
  const queryParams = new URLSearchParams(location.search);
  console.log(queryParams.get('height'))
  return <h2>Home</h2>
}

const About = () => {
  return <h2>
    <Link to="/about/us">About us</Link>
    <Routes>
      <Route exact path="/about/us" element={<AboutUs />} />
    </Routes>
  </h2>

}

const AboutUs = () => {
  return <h2>
    ABOUT US</h2>
}

const Contacts = () => {
  return <h2>Contacts</h2>
}

function App() {
  // 1. Basic example of react routing (use of LINK and ROUTE)
  // 2. Route Parameters (useParams)
  // 3. Redirects (using Navigate)
  // 4. useHistory uses (push,replace,goBack,goForward)
  // 5. Query Parameters (using useLocation):
  // 6. Nested Routes
  // 7. Dynamic routing

  return (
    <div className="App">
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about/3">About</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about/:id" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
