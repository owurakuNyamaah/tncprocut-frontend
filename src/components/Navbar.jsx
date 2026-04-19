import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-950 text-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        {/* <Link to="/" className="text-xl font-bold">
          TnC ProCut
        </Link> */}
        <div className="text-xl text-shadow-olive-700 font-bold italic">TnC ProCut</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="/" className="hover:text-gray-600">Home</a>
          <a href="#services" className="hover:text-gray-600">Services</a>
          <a href="#portfolio" className="hover:text-gray-600">Portfolio</a>

          <a
            href="#quote"
            className= "text-white px-4 py-2 rounded-lg underline"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3">
          <a href="/" onClick={() => setOpen(false)}>Home</a><br />
          <a href="#services" onClick={() => setOpen(false)}>Services</a><br />
          <a href="#portfolio" onClick={() => setOpen(false)}>Portfolio</a><br />
          <a href="#quote" onClick={() => setOpen(false)}>Get a Quote</a><br />
        </div>
      )}
    </nav>
  );
}