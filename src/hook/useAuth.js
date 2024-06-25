// src/hooks/useAuth.js
import { useState, useEffect } from "react";
import * as LOCAL_STORAGE from "../utils/localStorage";
import * as AUTH from "../constants/auth";

const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = await LOCAL_STORAGE.getItem(AUTH.TOKEN);
      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false);
    };

    checkToken();
  }, []);

  return { loading, isAuthenticated };
};

export default useAuth;
