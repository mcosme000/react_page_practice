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
        <h1 className="title">Our articles</h1>
        <div className="article-container">{data}</div>
      </div>
    );
  }
}

export default Articulos;
