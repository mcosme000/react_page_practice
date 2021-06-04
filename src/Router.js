import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Prueba from "./Components/Prueba";
import Articulos from "./Components/Articulos";

import Error from "./Components/Error";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {/* CONFIGURAR RUTAS Y PÁGINAS*/}
        <Switch>
          <Route exact path="/" component={Articulos} />
          <Route exact path="/ruta-prueba" component={Prueba} />

          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
