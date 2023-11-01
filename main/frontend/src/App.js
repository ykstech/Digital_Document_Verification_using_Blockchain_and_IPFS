import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles/Appc.css'; // Import the CSS file for styling

// Import your page components
import HomePage from './pages/HomePage';
// app.js
import StudentPage from './pages/StudentPage';
import UniversityPage from './pages/UniversityPage';
import CompanyPage from './pages/CompanyPage';
import OwnerPage from './pages/OwnerPage';

function App() {
  return (
    <Router>
      <div>
  <nav className="navbar">
    <ul className="nav-list">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Home
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

        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/StudentPage" element={<StudentPage />} />
        <Route path="/UniversityPage" element={<UniversityPage />} />
        <Route path="/CompanyPage" element={<CompanyPage />} />
        <Route path="/OwnerPage" element={<OwnerPage />} />
       
        </Routes>
      
    </Router>
  );
}

export default App;
