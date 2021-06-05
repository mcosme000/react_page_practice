import React from "react";
import Articulo from "./Articulo";
import Data from "./ArticuloData";

class Articulos extends React.Component {
  render() {
    const data = Data.map((article) => {
      return <Articulo article={article} />;
    });
    return (
      <React.Fragment>
        <h1 className="title">Our articles</h1>
        {data}
      </React.Fragment>
    );
  }
}

export default Articulos;
