import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css'; // Import the CSS file for the Home component

const Home = () => {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = () => {
      axios
        .get('http://localhost:3000/profile') // Update the URL here
        .then((response) => {
          setProfileData(response.data);
        })
        .catch((error) => {
          setError(error.message);
        });
    };

    fetchProfileData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="home-container">
      <h1 className="name">{profileData?.name}</h1>
      <img src={profileData?.imageURL} alt="Profile" className="profile-image" />
      <p className="description">{profileData?.description}</p>
      <p className="contact">Email: {profileData?.contact.email}</p>
      <p className="contact">
        Github: <a href={profileData?.contact.github} target="_blank" rel="noopener noreferrer">Profile</a>
      </p>
      <p className="contact">
        LinkedIn: <a href={profileData?.contact.linkedin} target="_blank" rel="noopener noreferrer">Profile</a>
      </p>
    </div>
  );
};

export default Home;
