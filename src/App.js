import "./App.css";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import Sidebar from "./Components/Sidebar";
import Articulos from "./Components/Articulos";

//ROUTER
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Prueba from "./Components/Prueba";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Slider />
        <div className="main container">
          <section className="article-container">
            <Switch>
              <Route exact path="/">
                <Articulos />
              </Route>
              <Route exact path="/ruta-prueba">
                <Prueba />
              </Route>
            </Switch>
          </section>
          <Sidebar />
        </div>
      </div>
    </Router>
  );
}
