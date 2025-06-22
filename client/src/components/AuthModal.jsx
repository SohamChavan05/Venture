// src/components/AuthModal.js
import React, { useState } from "react";


const AuthModal = ({ onClose }) => {
  const [mode, setMode] = useState("login"); // or 'register'
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "login") {
      console.log("Logging in:", form);
    } else {
      console.log("Registering:", form);
    }
    onClose(); // close after submit
  };

  return (
    <div className="overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>{mode === "login" ? "Login" : "Register"}</h2>
        <form onSubmit={handleSubmit}>
          {mode === "register" && (
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <button type="submit">
            {mode === "login" ? "Login" : "Register"}
          </button>
        </form>
        <p>
          {mode === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
          <button
            onClick={() => setMode(mode === "login" ? "register" : "login")}
          >
            {mode === "login" ? " Register" : " Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
