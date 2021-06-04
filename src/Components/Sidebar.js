import React from "react";

class Sidebar extends React.Component {
  render() {
    return (
      <aside className="sidebar">
        <div className="sidebar-item">
          <h3>Puedes hacer esto</h3>
          <a href="#" className="btn-green">
            Crear artículo
          </a>
        </div>

        <div className="sidebar-item">
          <h3>Buscador</h3>
          <p>Encuentra el artículo que buscas</p>
          <form>
            <input type="text" name="search" />
            <input type="submit" name="submit" value="Buscar" className="btn" />
          </form>
        </div>
      </aside>
    );
  }
}

export default Sidebar;