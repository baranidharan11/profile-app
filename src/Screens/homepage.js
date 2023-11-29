// src/Screens/HomePage.js
import React, { useState } from "react";
import "./HomePage.css";

const HomePage = ({ currentUser, onLogout, setCurrentUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDetails, setEditedDetails] = useState({ ...currentUser });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedDetails({ ...currentUser });
  };

  const handleSaveEdit = () => {
    // Update local storage
    const updatedUser = { ...currentUser, ...editedDetails };
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));

    // Reflect the changes on the home page
    setCurrentUser(updatedUser);

    // Exit edit mode
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="home-container">
      <h1>Welcome, {currentUser.username}!</h1>
      {!isEditing ? (
        <div>
          <p>Name: {currentUser.name}</p>
          <p>Age: {currentUser.age}</p>
          <p>Gender: {currentUser.gender}</p>
          <p>Date of Birth: {currentUser.dob}</p>
          <p>Address: {currentUser.address}</p>
        </div>
      ) : (
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={editedDetails.name}
            onChange={handleInputChange}
          />
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={editedDetails.age}
            onChange={handleInputChange}
          />
          <label>Gender:</label>
          <input
            type="text"
            name="gender"
            value={editedDetails.gender}
            onChange={handleInputChange}
          />
          <label>Date of Birth:</label>
          <input
            type="text"
            name="dob"
            value={editedDetails.dob}
            onChange={handleInputChange}
          />
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={editedDetails.address}
            onChange={handleInputChange}
          />
        </div>
      )}

      <div>
        {!isEditing ? (
          <button onClick={handleEditClick}>Edit Profile</button>
        ) : (
          <>
            <button onClick={handleSaveEdit}>Save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </>
        )}
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default HomePage;
