import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container header-content">
          <div className="logo">
            <h1>Learn React</h1>
          </div>
          <nav className="navbar">
            <a href="#">Inicio</a>
            <a href="#">Blog</a>
            <a href="#">Formulario</a>
            <a href="#">Pagina1</a>
            <a href="#">Pagina2</a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
