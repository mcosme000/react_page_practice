import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container header-content">
          <div className="logo">
            <h1>Learn React</h1>
          </div>
          <nav className="navbar">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/ruta-prueba">Prueba</NavLink>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
