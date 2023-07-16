import React from "react";
import Header from "./components/1_header/Header";
import Nav from "./components/navbar/Navbar";
import About from "./components/2_about/About";
import Experience from "./components/3_experience/Experience";
import Portfolio from "./components/4_portfolio/Portfolio";
import Services from "./components/5_services/Services";
import Testimonials from "./components/6_testimonials/Testimonials";
import Contact from "./components/7_contact/Contact";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
