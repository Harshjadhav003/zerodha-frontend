import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, , removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) return navigate("/login");

      try {
        const { data } = await axios.post(
              "https://docker-setup-backend-latest.onrender.com/verify",
               {},
            { withCredentials: true }
            );

        if (data.success) {
          setUsername(data.user);
          toast.info(`Hello ${data.user}`, { position: "top-right" });
        } else {
          removeCookie("token");
          navigate("/login");
        }
      } catch (error) {
        console.error(error);
        removeCookie("token");
        navigate("/login");
      }
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = async () => {
    try {
      await axios.post("https://docker-setup-backend-latest.onrender.com/logout", {}, { withCredentials: true });
      removeCookie("token"); // remove cookie client-side
      navigate("/login"); // redirect to login
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