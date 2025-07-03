import { useContext, useState } from "react";
import axios from "axios";
import { base_url } from "../../utils/constants";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const {user, setUser} = useContext(UserContext)
  const navigate = useNavigate()

  const login = async ({ email, password }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${base_url}/auth/login`,
        { email, password },
        { withCredentials: true }
      );
      
      navigate("/")
    } catch (err) {
     console.log(err?.response?.data?.message || err?.response?.data?.error || "An error occurred during login");
     

      
    } finally {
      setLoading(false);
    }
  };

  

  return { login, loading };
};

export default useLogin;
