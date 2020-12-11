import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function AuthComponent() {
  const { loginUser, dispatch } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        id="username"
        value={credentials.username}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="">Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        value={credentials.password}
        onChange={(e) => handleChange(e)}
      />
      <button
        onClick={() => {
          loginUser(credentials);
          setCredentials({ username: "", password: "" });
        }}
      >
        Login
      </button>
      <button onClick={() => dispatch({ type: "LOGOUT", credentials: {} })}>
        Logout
      </button>
    </div>
  );
}
