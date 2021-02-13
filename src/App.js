import React, { useState, useEffect } from "react";
import "./App.css";
import Cover from "./components/Cover/index";
import Navbar from "./components/Navbar/index";
import About from "./components/About/index";
import Slider from "./components/Slider/index";
import Info from "./components/Info/index";
import Footer from "./components/Footer/index";

function App() {
  const [scrollHeight, setscrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setscrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <Cover/>
      <About />
      <Slider />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
