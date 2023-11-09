import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("data"));

  const handleClick = () => {
    localStorage.clear();
    navigate("/login")
  }

  return (
    <main>
      <div>
        <h1>Tus datos son:</h1>
        <div>
          <li>
            <span>Nombres:</span> {data.name}
          </li>
          <li>
            <span>Fecha de nacimiento:</span> {data.date}
          </li>
          <li>
            <span>Correo electronico:</span> {data.email}
          </li>
          <li>
            <span>Contraseña:</span> {data.password}
          </li>
        </div>
        <button onClick={handleClick}> Salir y borrar datos</button>
      </div>
    </main>
  );
};

export default Home;
