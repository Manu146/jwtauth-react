import { createContext, useEffect, useReducer, useCallback } from "react";
import { authReducer } from "./AuthReducer";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [authData, dispatch] = useReducer(authReducer, {});

  const loginUser = useCallback(async (credentials) => {
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      console.log(data);
      dispatch({ type: "LOGIN", data });
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    if (authData.user && authData.expire) {
      console.log("timer set", new Date().getTime());
      var timer = setTimeout(() => {
        console.log("timer done", new Date().getTime());
        dispatch({ type: "LOGOUT" });
      }, authData.expire * 1000);
    } else {
      clearTimeout(timer);
    }
    return () => clearTimeout(timer);
  }, [authData]);

  return (
    <AuthContext.Provider value={{ authData, dispatch, loginUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
