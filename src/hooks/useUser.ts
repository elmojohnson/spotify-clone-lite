import { useState, useEffect } from "react";
import { User } from "../../types";
import spotify from "../lib/spotify";
import {useNavigate} from "react-router-dom";

const useUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>();
  const [isLoading, setLoading] = useState<boolean>(false);

  // Get user data
  const getUser = async () => {
    try {
      setLoading(true);
      const result = await spotify.get("/me");
      setUser(result.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const logout = () => {
    localStorage.clear();
    navigate("/account/login")
  }

  useEffect(() => {
    getUser();
  }, []);

  return { user, isLoading, logout };
};

export default useUser;
