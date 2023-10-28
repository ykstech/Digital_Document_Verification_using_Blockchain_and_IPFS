import React from 'react';

import '../styles/homePage.css'; // Import the CSS file for styling

const PUBLIC_URL = process.env.PUBLIC_URL;

function HomePage() {


  const updateContractAddress = async (newAddress) => {
     console.log("address: ",newAddress);
    const response = await fetch('http://localhost:5000/updateContractAddress', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ address: newAddress }),
    });
    // Handle response as needed
  };
  
  return (
    <div className="home-container">
      <h1>Digital Document Verification using Blockchain</h1>
      
      <div className="card-container">
        {/* Student Page Card */}
        <div className="card">
          <img
            src={PUBLIC_URL + '/images/student.webp'} // Replace with your student image URL
            alt="Student Page"
          />
          <h2>Student Login</h2>
          <p>Explore resources for students.</p><br></br>
          <a href="/StudentPage">Explore</a>
        </div>

        {/* University Page Card */}
        <div className="card">
          <img
            src={PUBLIC_URL + '/images/university.jpg'} // Replace with your university image URL
            alt="University Page"
          />
          <h2>University Login</h2>
          <p>Empower your university.</p><br></br>
          <a href="/UniversityPage">Empower</a>
        </div>
        {/* Company Page Card */}
        <div className="card">
          <img
            src={PUBLIC_URL + '/images/company.jpg'} // Replace with your university image URL
            alt="Company Page"
          />
          <h2>Company Login</h2>
          <p>Check Authenticity.</p><br></br>
          <a href="/CompanyPage">Check</a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
