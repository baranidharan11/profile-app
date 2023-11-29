// src/components/UpdateUserModal.js
import React, { useState } from "react";
import "./UpdateUserModal.css";

const UpdateUserModal = ({ currentUser, closeModal, onUpdateDetails }) => {
  const [name, setName] = useState(currentUser.name);
  const [password, setPassword] = useState(currentUser.password);
  const [age, setAge] = useState(currentUser.age);
  const [gender, setGender] = useState(currentUser.gender);
  const [dob, setDob] = useState(currentUser.dob);
  const [address, setAddress] = useState(currentUser.address);

  const handleUpdateDetails = () => {
    // Validate and update user details
    const updatedDetails = {
      ...currentUser,
      name,
      password,
      age,
      gender,
      dob,
      address,
    };

    // Call the parent component callback with the updated details
    onUpdateDetails(updatedDetails);
  };

  return (
    <div className="modal update-user-modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>Update User Details</h2>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Age:</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label>Gender:</label>
        <input
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <label>Date of Birth:</label>
        <input
          type="text"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button onClick={handleUpdateDetails}>Update</button>
      </div>
    </div>
  );
};

export default UpdateUserModal;
