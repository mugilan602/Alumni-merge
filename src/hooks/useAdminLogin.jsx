import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminAuthContext } from "./useAdminAuthContext";
export const useAdminLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useAdminAuthContext();


  const login = async ({ userName, password }) => {
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }),
      });

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.error || "Login failed");
      }

      console.log("Admin logged in:", json);
      localStorage.setItem("admin", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      navigate("/adminpage");

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
