import { Link, Routes, Route, Navigate, useNavigate } from 'react-router-dom' //react imports

import AboutUs from './components/AboutUs';
import Home from './components/Home';
import ContactUs from './components/Contacts';
import Products from './components/Products';

import logo from './logo.svg';
import './App.css';
import ContactUsByName from './components/ContactUsByName';
import Students from './components/Students';
import { useState } from 'react';
import Clothes from './components/Clothes';
import Electronics from './components/Electronics';

function App() {
  const [id, setId] = useState(0);
  const navigate = useNavigate();
  // 1. Basic example of react routing (use of LINK and ROUTE)
  // 2. Route Parameters (useParams) //pathParams
  // 3. Redirects (using Navigate)
  // 4. useHistory uses (push,replace,goBack,goForward) ====== < version 6
  // 5. useNavigate ====== > version 6
  // 5. Query Parameters (using useLocation):
  // 6. Nested Routes
  // 7. Dynamic routing

  // VS CODE SHORTCUTS
  // cmd/ctrl + click
  // cmd/ctrl + shift + p => commnd pallete
  // cmd/ctrl + p  => files

  // www.react.com/:id/:name/:course --> id path param
  // www.react.com?name=vishal&location=banglore&course=btech&subject=cse --> name query param

  return (
    <div className="App">
      <div>
        <button onClick={() => {
          setId(id + 1);
          navigate(`/contacts/${id + 1}`);
        }}>Increment the contact id</button>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contacts">Contacts</Link>
          <Link to="/products">Products</Link>
          <Link to="/dummy-products">dummy Products</Link>
          <div><a href='/about' target='_blank'>New about us page</a></div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contacts" element={<ContactUs />} />
          <Route path={`/contacts/:id`} element={<ContactUs />} />
          <Route path={`/contacts/:id/:studentName`} element={<ContactUs />} />
          <Route path="/contacts/company-name/xyz" element={<ContactUsByName />} />
          <Route path="/contacts/ceo-name" element={<ContactUsByName />} />
          <Route path="/dummy-products" element={<Products />} />
          <Route path="/*" element={<Navigate to='/' />} />
          <Route path="contacts/students/:studentId" element={<ContactUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/clothes" element={<Clothes />} />
          <Route path="/products/electronics" element={<Electronics />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

