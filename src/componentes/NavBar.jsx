import React from "react";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="nav navbar  mb-5">
      <div className="container navStyle">
        <a className="navbar-brand" href="/">
          GERENCIADOR DE GASTOS &#128176;
        </a>
        <a href="/home">home</a>
        <a href="/cadastro">cadastrar gasto</a>
        <a href="/gastos">ver todos os gastos</a>
      </div>
    </div>
  );
};

export default Navbar;
