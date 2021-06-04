import React from "react";
import Articulo from "./Articulo";
import Data from "./ArticuloData";

class Articulos extends React.Component {
  render() {
    const data = Data.map((article) => {
      return <Articulo article={article} />;
    });
    return (
      <div>
        <h1>Our articles</h1>
        {data}
      </div>
    );
  }
}

export default Articulos;
