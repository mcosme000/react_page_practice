import React from "react";

class Contacto extends React.Component {
  render() {
    return (
      <div className="contact">
        <h1 className="title">Página de contacto</h1>
        <div className="article-container">
          <form>
            <label for="name">Your name</label>
            <input type="text" class="name" />
            <label for="email">Your email</label>
            <input type="text" class="email" />
            <textarea max="150" />
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    );
  }
}

export default Contacto;
