import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedComp() {
  const { authData } = useContext(AuthContext);
  return (
    <div>
      {authData.user ? (
        <div>Welcome {authData.user}!</div>
      ) : (
        <div>Please login to continue</div>
      )}
    </div>
  );
}
