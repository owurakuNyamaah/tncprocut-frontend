import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          {/* <h2 className="text-lg font-bold mb-3">TnC ProCut</h2>
          <p className="text-gray-600">
            Custom CNC cutting and premium signage solutions in Ghana.
          </p> */}
          <img src={logo} alt='TnC ProCut logo' className='object-contain' />
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#quote">Get a Quote</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-gray-600">Afuaman - Accra, Ghana</p>
          <p className="text-gray-600">tncprocut@gmail.com</p>
          <p className="text-gray-600">+44 7459 731254</p>
          <a
            href="https://wa.me/447459731254"
            className="block mt-2 text-black font-medium underline"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center py-4 border-t text-gray-500 text-sm">
        © {new Date().getFullYear()} TnC ProCut. All rights reserved.
      </div>

      <a
  href="https://wa.me/447459731254"
  className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
  target="_blank"
  rel="noopener"
  aria-label="Chat on WhatsApp"
>
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.04 0C7.177 0 .002 7.174.002 16.028c0 2.825.74 5.582 2.144 8.02L0 32l8.13-2.126c2.363 1.3 5.02 1.984 7.912 1.984h.005c8.86 0 16.034-7.174 16.034-16.028C32.08 7.174 24.9 0 16.04 0zm0 29.406c-2.55 0-5.03-.678-7.195-1.96l-.515-.302-4.83 1.263 1.29-4.703-.335-.53c-1.33-2.108-2.035-4.54-2.035-7.046 0-7.327 5.964-13.287 13.32-13.287 3.56 0 6.906 1.38 9.415 3.89 2.51 2.51 3.89 5.857 3.89 9.414 0 7.327-5.96 13.286-13.316 13.286zm7.667-9.767c-.418-.21-2.472-1.22-2.857-1.36-.385-.143-.665-.21-.944.21s-1.085 1.36-1.33 1.64c-.242.278-.48.313-.898.104-.417-.21-1.76-.65-3.352-2.075-1.24-1.11-2.075-2.476-2.317-2.893-.24-.418-.026-.644.183-.854.187-.187.417-.49.625-.732.207-.243.276-.417.417-.696.138-.28.07-.522-.035-.732-.105-.21-.943-2.28-1.29-3.14-.34-.817-.688-.707-.944-.72l-.803-.014c-.28 0-.733.105-1.116.49-.383.386-1.465 1.43-1.465 3.49 0 2.06 1.5 4.05 1.708 4.33.21.28 2.952 4.504 7.16 6.313 1 .43 1.783.686 2.392.877 1.004.32 1.92.275 2.64.167.805-.12 2.472-1.01 2.82-1.986.347-.977.347-1.813.243-1.986-.104-.174-.38-.28-.8-.49z"/>
  </svg>
</a>

    </footer>
  );
}