// src/App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "./App.css";
import Login from "./Screens/Login";
import Register from "./Screens/Reggister";
import HomePage from "./Screens/homepage";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Check if there is a user in local storage on app load
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, []);

  const handleLogin = (user) => {
    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  const handleRegister = (user) => {
    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  const PublicRoute = ({ element }) =>
    !currentUser ? (
      element
    ) : (
      <Navigate
        to="/home
    "
      />
    );

  const PrivateRoute = ({ element }) =>
    currentUser ? (
      element
    ) : (
      <Navigate
        to="/Login
    "
      />
    );

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<PublicRoute element={<Login onLogin={handleLogin} />} />}
        />
        <Route
          path="/register"
          element={
            <PublicRoute element={<Register onRegister={handleRegister} />} />
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute
              element={
                <HomePage
                  currentUser={currentUser}
                  onLogout={handleLogout}
                  setCurrentUser={setCurrentUser}
                />
              }
            />
          }
        />
        <Route
          path="/"
          element={<Navigate to="/home" />} // Redirect to home if URL is not recognized
        />
      </Routes>
    </Router>
  );
};

export default App;
