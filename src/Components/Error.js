import React from "react";

class Error extends React.Component {
  render() {
    return (
      <div className="error">
        <h1>Página no encontrada.</h1>
        <p>La página a la que intentas acceder no existe en la web</p>
      </div>
    );
  }
}

export default Error;
