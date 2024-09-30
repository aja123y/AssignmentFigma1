import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import CarouselSection from "./Components/CarouselSection/CarouselSection";
import Product from "./Components/Product/Product";
import About from "./Components/About/About";

function App() {
  return (
    <div className="">
      <Navbar />
      <CarouselSection />
      <Product />
      <About/>
    </div>
  );
}

export default App;
