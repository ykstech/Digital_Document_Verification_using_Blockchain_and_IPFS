import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles/Appc.css'; // Import the CSS file for styling

// Import your page components
import HomePage from './pages/HomePage';
import StudentPage from './pages/StudentPage';
import UniversityPage from './pages/UniversityPage';
import CompanyPage from './pages/CompanyPage';
import OwnerPage from './pages/OwnerPage';
import StudentSignup from './pages/StudentSignup';
import StudentLogin from './pages/StudentLogin';
import MetaMaskInfo from './pages/MetaMaskInfo';
import { MetaMaskProvider } from './context/MetaMaskContext';

function App() {
  return (
    <Router>
      <div>
  <nav className="navbar">
    <ul className="nav-list" style={{}}>
      <li className="nav-item">
        <Link to="/" className="nav-link">
          DoQfy
        </Link>
      </li>
    
      <li className="nav-item">
        <Link to="/StudentPage" className="nav-link">
          Student Page
        </Link>
      </li> 
       <li className="nav-item">
        <Link to="/UniversityPage" className="nav-link">
          University Page
        </Link>
      </li> 
       <li className="nav-item">
        <Link to="/CompanyPage" className="nav-link">
          Company Page
        </Link>
      </li> 
      <li className="nav-item">
        <Link to="/OwnerPage" className="nav-link">
          Owner Page
        </Link>
      </li>
      
     
     </ul>
  </nav>
</div>
<MetaMaskProvider>
  <MetaMaskInfo/>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/StudentPage" element={<StudentPage />} />
        <Route path="/UniversityPage" element={<UniversityPage />} />
        <Route path="/CompanyPage" element={<CompanyPage />} />
        <Route path="/OwnerPage" element={<OwnerPage />} />
         
        </Routes>
</MetaMaskProvider>      
    </Router>
  );
}

export default App;
