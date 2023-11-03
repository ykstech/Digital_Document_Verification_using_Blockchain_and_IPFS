import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles/Appc.css'; // Import the CSS file for styling

// Import your page components
import HomePage from './pages/HomePage';
import StudentPage from './pages/StudentPage';
import UniversityPage from './pages/UniversityPage';
import CompanyPage from './pages/CompanyPage';
import OwnerPage from './pages/OwnerPage';
import FirstPage from './pages/FirstPage'
import StudentSignup from './pages/StudentSignup';
import StudentLogin from './pages/StudentLogin';

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
        <Link to="/StudentLogin " className="nav-link ">
          Login
        </Link>
      </li>
      {/* <li className="nav-item">
        <Link to="/StudentPage" className="nav-link">
          Student Page
        </Link>
      </li> */}
      {/* <li className="nav-item">
        <Link to="/UniversityPage" className="nav-link">
          University Page
        </Link>
      </li> */}
      {/* <li className="nav-item">
        <Link to="/CompanyPage" className="nav-link">
          Company Page
        </Link>
      </li> */}
      {/* <li className="nav-item">
        <Link to="/OwnerPage" className="nav-link">
          Owner Page
        </Link>
      </li> */}
      {/* <li className="nav-item">
        <Link to="/StudentSignup" className="nav-link">
          StudentSignup
        </Link>
      </li> */}
     
     </ul>
  </nav>
</div>

        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/StudentPage" element={<StudentPage />} />
        <Route path="/UniversityPage" element={<UniversityPage />} />
        <Route path="/CompanyPage" element={<CompanyPage />} />
        <Route path="/OwnerPage" element={<OwnerPage />} />
        <Route path="/FirstPage" element={<FirstPage/>}/>
        <Route path="/StudentSignup" element={<StudentSignup/>}/>
        <Route path="/StudentLogin" element={<StudentLogin/>}/>
       
        </Routes>
      
    </Router>
  );
}

export default App;
