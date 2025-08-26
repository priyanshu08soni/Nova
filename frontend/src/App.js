import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import RefreshHandler from './RefrshHandler';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact'
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Start as null to indicate loading

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated === null 
      ? <div>Loading...</div> 
      : isAuthenticated 
        ? element 
        : <Navigate to="/login" />;
  };

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Prevent rendering routes until authentication is checked
  }

  return (
    <div className="App">
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<PrivateRoute element={<Home />} />} />
        <Route path='/about' element={<PrivateRoute element={<About />} />} />
        <Route path='/services' element={<PrivateRoute element={<Services />} />} />
        <Route path='/contact' element={<PrivateRoute element={<Contact />} />} />
        
        {/* <Route path= "*" element = {<NotFound/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
