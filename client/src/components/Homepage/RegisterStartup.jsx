import { useState } from "react";
import { registerStartup } from "../../api/auth";
import { toast } from "react-toastify";

const RegisterStartup = ({ setRegisterForm }) => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [founderName, setFounderName] = useState("");
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const [pitchDeckLink, setPitchDeckLink] = useState("");

  const handleRegisterStartup = async () => {
    try {
      await registerStartup(
        name,
        tagline,
        description,
        founderName,
        industry,
        location,
        website,
        pitchDeckLink
      );

      setRegisterForm(false);
      setName("");
      setTagline("");
      setDescription("");
      setFounderName("");
      setIndustry("");
      setLocation("");
      setWebsite("");
      setPitchDeckLink("");
      toast.success("Registered Startup Successfully!");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Not Added!");
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/20 flex justify-center items-center">
      <div className="bg-white rounded-lg  px-8 py-10 relative">
        <div
          className="absolute top-4 right-6 text-black text-3xl cursor-pointer"
          onClick={() => setRegisterForm(false)}
        >
          {" "}
          &times;
        </div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-gray-300 border w-full py-2 px-3 rounded-lg mt-5 text-md"
        />
        <input
          type="text"
          placeholder="Tagline"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
          className="border-gray-300 border w-full py-2 px-3 rounded-lg mt-5 text-md"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border-gray-300 border w-full py-2 px-3 rounded-lg mt-5 text-md"
        />
        <input
          type="text"
          placeholder="Founder Name"
          value={founderName}
          onChange={(e) => setFounderName(e.target.value)}
          className="border-gray-300 border w-full py-2 px-3 rounded-lg mt-5 text-md"
        />
        <input
          type="text"
          placeholder="Industry"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="border-gray-300 border w-full py-2 px-3 rounded-lg mt-5 text-md"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border-gray-300 border w-full py-2 px-3 rounded-lg mt-5 text-md"
        />
        <input
          type="text"
          placeholder="Website Link"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="border-gray-300 border w-full py-2 px-3 rounded-lg mt-5 text-md"
        />
        <input
          type="text"
          placeholder="PicthDeck Link"
          value={pitchDeckLink}
          onChange={(e) => setPitchDeckLink(e.target.value)}
          className="border-gray-300 border w-full py-2 px-3 rounded-lg mt-5 text-md"
        />
        <div className="w-full mt-8 flex justify-center">
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium shadow-sm w-[48%]"
            onClick={handleRegisterStartup}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
export default RegisterStartup;
