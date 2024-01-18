import React from "react";
import "./PagesStyle.css";
import { auth, googleAuthProvider } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const googleAuthProvider = new GoogleAuthProvider();
      localStorage.setItem("token", result.user.accessToken);
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="loginParent" >
      <button
        class="btn btn-lg shadow-lg btnClr"
        onClick={handleSignInWithGoogle}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
