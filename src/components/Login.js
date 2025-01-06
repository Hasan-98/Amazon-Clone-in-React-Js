import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signInUser = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password) // Fixed method name
      .then((auth) => {
        if (auth) {
          navigate("/"); // Removed extra space in path
        }
      })
      .catch((error) => {
        console.error("Error signing in:", error.message); // Updated error message
        alert(error.message);
      });
  };
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User created:", userCredential.user);
        if (auth) {
          navigate("/ ");
        }
      })
      .catch((error) => {
        console.error("Error creating user:", error.message);
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="/images.jpeg" alt="Logo" />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="login__signInButton"
            onClick={signInUser}
          >
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice, and our
          Interest-Based Ads Notice.
        </p>
        <button className="login__register" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}
