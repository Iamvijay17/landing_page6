import React from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = async () => {
    Swal.fire({
      title: "Good job!",
      text: "Successfully Logout",
      icon: "success"
    });
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("login");
    } catch (error) {}
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary fw-semibold">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Travling!
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div class="collapse navbar-collapse justify-content-end " id="navbarNav">
          <ul class="navbar-nav gap-5">
              <li class="nav-item">
                <a class="nav-link" href="#" onClick={handleLogout}>
                Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
