import { createContext, useReducer, useEffect } from "react";

// Define the context
export const AdminAuthContext = createContext();

// Define the reducer function to manage state changes
export const AdminAuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { admin: action.payload }; // Set user data upon login
    case "LOGOUT":
      return { admin: null }; // Clear user data upon logout
    default:
      return state;
  }
};

// AdminAuthContextProvider component to provide the context to its children
export const AdminAuthContextProvider = ({ children }) => {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(AdminAuthReducer, {
    admin: null, // Initial state with no authenticated user
  });

  // Effect to check for existing logged-in user in localStorage
  useEffect(() => {
    // Retrieve admin data from localStorage
    const admin = JSON.parse(localStorage.getItem("admin"));
    if (admin) {
      // If admin data exists, dispatch a LOGIN action to update state
      dispatch({ type: "LOGIN", payload: admin });
    }
  }, []); // Empty dependency array ensures effect runs only once on component mount

  // Log state for debugging
  console.log("Admin AuthContext State:", state);

  // Provide the state and dispatch function to its children via context
  return (
    <AdminAuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AdminAuthContext.Provider>
  );
};
