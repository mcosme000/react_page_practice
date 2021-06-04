import "./App.css";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import Sidebar from "./Components/Sidebar";
import Articulos from "./Components/Articulos";
import Footer from "./Components/Footer";

//ROUTER
import Router from "./Router";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Slider />

      <div className="main container">
        <section className="article-container">
          <Router />
        </section>
        <Sidebar />
      </div>
    </div>
  );
}
