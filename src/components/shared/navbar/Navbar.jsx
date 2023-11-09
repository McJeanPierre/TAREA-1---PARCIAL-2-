import React from "react";
import { NavLink, Navigate } from "react-router-dom";
import "./navbar.css"
const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          {/* <NavLink className={"li-nav"} to={"/"}>Home</NavLink> */}
          <NavLink className={"li-nav"} to={"/login"}>Iniciar sesion</NavLink>
          <NavLink className={"li-nav"} to={"/register"}>Registrarse</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;