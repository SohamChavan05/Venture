import { useState } from "react";
import RegisterStartup from "./RegisterStartup";

const Herosection = () => {
  const [registerForm, setRegisterForm] = useState(false);

  return (
    <div className="mt-30 flex justify-center">
      {registerForm && <RegisterStartup setRegisterForm={setRegisterForm} />}
      <button
        className="text-white bg-blue-600 px-3 py-4 rounded-lg text-md hover:bg-blue-900 transition-all duration-300"
        onClick={() => setRegisterForm(true)}
      >
        Startup Register
      </button>
    </div>
  );
};
export default Herosection;
