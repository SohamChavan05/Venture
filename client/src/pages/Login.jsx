import { useState } from "react";
import { loginUser, registerUser } from "../api/auth";
import { toast } from "react-toastify";

const Login = ({ setShowLogin, setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = async () => {
    try {
      const res = await loginUser(email, password);
      localStorage.setItem("token", res.data.token);
      toast.success("Login Successful!");
      setShowLogin(false);
      setIsLoggedIn(true);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  const handleRegister = async () => {
    try {
      await registerUser(name, email, password);
      toast.success("Registered Successfully !");
      setShowRegister(false);
      setEmail("");
      setPassword("");
      setName("");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Not Added!");
    }
  };

  return (
    <>
      <div className="fixed inset-0 backdrop-blur-sm bg-black/20 flex justify-center items-center">
        <div className="bg-white rounded-lg  px-8 py-10 relative">
          <div
            className="absolute top-4 right-6 text-black text-3xl cursor-pointer"
            onClick={() => setShowLogin(false)}
          >
            {" "}
            &times;
          </div>
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="border-gray-300 border w-full py-2 px-3 rounded-lg mt-10 text-md"
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="border-gray-300 border w-full py-2 px-3 rounded-lg mt-5 text-md"
          />
          <div className="w-full mt-8 flex justify-center">
            <button
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium shadow-sm w-[48%]"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
          <div className="mt-5 flex justify-center cursor-pointer">
            <p
              className="hover:underline"
              onClick={() => setShowRegister(true)}
            >
              Dont have an account!
            </p>
          </div>
        </div>
      </div>

      {showRegister && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/20 flex justify-center items-center">
          <div className="bg-white rounded-lg  px-8 py-10 relative">
            <div
              className="absolute top-4 right-6 text-black text-3xl cursor-pointer"
              onClick={() => setShowLogin(false)}
            >
              {" "}
              &times;
            </div>
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              className="border-gray-300 border w-full py-2 px-3 rounded-lg mt-10 text-md"
            />
            <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="border-gray-300 border w-full py-2 px-3 rounded-lg mt-5 text-md"
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="border-gray-300 border w-full py-2 px-3 rounded-lg mt-5 text-md"
            />
            <div className="w-full mt-8 flex justify-center">
              <button
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium shadow-sm w-[48%]"
                onClick={handleRegister}
              >
                Register
              </button>
            </div>
            <div className="mt-5 flex justify-center cursor-pointer">
              <p
                className="hover:underline"
                onClick={() => setShowRegister(false)}
              >
                Already have an Account! Login{" "}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Login;
