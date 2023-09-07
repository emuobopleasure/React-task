import React, { useReducer } from "react";
import MkdSDK from "./utils/MkdSDK";

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  role: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      //TODO
      const { token } = action.payload;

      localStorage.setItem("token", token); // Assuming i receive a token as payload
      return {
        ...state,
        isAuthenticated: true,
        token: token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

let sdk = new MkdSDK();

export const tokenExpireError = (dispatch, errorMessage) => {
  const role = localStorage.getItem("role");
  if (errorMessage === "TOKEN_EXPIRED") {
    dispatch({
      type: "Logout",
    });
    window.location.href = "/" + role + "/login";
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  React.useEffect(() => {
    //TODO
    const checkToken = async () => {
      try {
        const token = localStorage.getItem("token");
        
        if (!token) {
          // If the token is not present, the user is not authenticated and will be loged out
          dispatch({ type: "LOGOUT" });
          return;
        }
  
        const role = "admin";
  
        const header = {
          "Content-Type": "application/json",
          "x-project": "cmVhY3R0YXNrOmQ5aGVkeWN5djZwN3p3OHhpMzR0OWJtdHNqc2lneTV0Nw==",
          Authorization: `Bearer ${token}`,
        };
  
        const response = await fetch(
          "https://reacttask.mkdlabs.com/v2/api/lambda/check",
          {
            method: "POST",
            headers: header,
            body: JSON.stringify({ role }),
          }
        );
  
        if (response.status === 200) {
          // Token is valid
          dispatch({ type: "LOGIN", payload: { token } });
        } else {
          // Token is no longer valid, log the user out
          dispatch({ type: "LOGOUT" });
        }
      } catch (error) {
        console.error("Token check error:", error);
      }
    };
  
    // Check the token validity when the component mounts
    checkToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
