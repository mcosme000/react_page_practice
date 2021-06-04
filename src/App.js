import "./App.css";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import Sidebar from "./Components/Sidebar";
import Articulos from "./Components/Articulos";
import Footer from "./Components/Footer";

import ArticuloData from "./Components/ArticuloData";
export default function App() {
  const articleData = ArticuloData.map((article) => {
    return <Articulos title={article.title} img={article.img} />;
  });
  return (
    <div className="App">
      <Header />
      <Slider />

      <div className="main container">
        <section className="article-container">{articleData}</section>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}
