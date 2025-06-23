import { useState, useEffect } from "react";
import Login from "../pages/Login";
import { toast } from "react-toastify";


const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    toast.info("Logged out successfully!");
  };

  return (
    <>
      <div className="w-[100vw] top-0 fixed h-14 flex bg-gray-700 px-10 justify-between">
        <div className="font-bold text-2xl h-full flex justify-center items-center text-white">
          <h1>VentureDock</h1>
        </div>
        <div className="h-full flex justify-center items-center">
          {isLoggedIn ? (
            <button
              className="bg-red-500 font-semibold text-lg text-white px-5 py-2 rounded-lg"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <button
              className="bg-black font-semibold text-lg text-white px-5 py-2 rounded-lg"
              onClick={() => setShowLogin(true)}
            >
              LogIn
            </button>
          )}
        </div>
      </div>

      {showLogin && (
        <Login setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
};
export default Navbar;
