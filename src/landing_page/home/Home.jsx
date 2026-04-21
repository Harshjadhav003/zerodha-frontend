import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

// global config
axios.defaults.withCredentials = true;

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/verify`
        );

        if (data.success) {
          setUsername(data.user);
        } else {
          navigate("/login");
        }

      } catch (error) {
        console.error(error);
        navigate("/login");
      }
    };

    verifyUser();
  }, [navigate]);

  const Logout = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/logout`
      );

      navigate("/login");
      toast.success("Logged out successfully");

    } catch (error) {
      console.error(error);
      toast.error("Logout failed");
    }
  };

  return (
    <div className="home_page">
      <h4>
        Welcome <span>{username}</span>
      </h4>

      <button onClick={Logout}>LOGOUT</button>

      <ToastContainer />
    </div>
  );
};

export default Home;