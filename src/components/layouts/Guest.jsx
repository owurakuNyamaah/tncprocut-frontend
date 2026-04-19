import Navbar from "../Navbar";
import Footer from "../Footer";
import Home from "../Home";
import Quote from "../Quote";
import Portfolio from '../Portfolio'
import Services from '../ServicesSection'

export default function Guest() {
  return (
    <>
      <Navbar />
        <Home />
        <Services />
        <Portfolio />
        <Quote />
      <Footer/>
    </>
  );
}