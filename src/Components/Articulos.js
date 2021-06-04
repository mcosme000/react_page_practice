import React from "react";

class Articulos extends React.Component {
  constructor() {
    super();
    this.state = {
      contador: 0,
    };
  }

  render() {
    return (
      <div className="article">
        <h2 className="article-title">{this.props.title}</h2>
        <img src={this.props.img} alt="programming" />
        <a href="#" className="article-btn">
          Read more
        </a>
      </div>
    );
  }
}

export default Articulos;
