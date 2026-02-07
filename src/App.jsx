import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Services from "./components/Services/Services.jsx";
import WhereToBuy from "./components/WhereToBuy/WhereToBuy.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <div className="overflow-x-hidden bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <WhereToBuy />
      <Footer />
    </div>
  );
};

export default App;
