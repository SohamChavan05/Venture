import React, { useState } from "react";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="navbar">
        <h1>Venture Dock</h1>
        <button onClick={() => setShowModal(true)}>Login</button>
      </nav>
      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Navbar;
