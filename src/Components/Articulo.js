import React from "react";

class Articulo extends React.Component {
  render() {
    const { title, img } = this.props.article;
    return (
      <div className="article">
        <h2 className="article-title">{title}</h2>
        <img src={img} alt="programming" />
        <button className="article-btn">Read more </button>
      </div>
    );
  }
}

export default Articulo;
