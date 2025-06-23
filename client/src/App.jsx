import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Home />
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};
export default App;
