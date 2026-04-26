import cncWorkshopImage from "../assets/cncWorkshop.png"

export default function Home() {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero */}
        <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-stretch gap-10">
            
            {/* LEFT CONTENT */}
            <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Precise CNC Cutting & Custom Signage
            </h1>

            <p className="mb-6 text-gray-600 text-lg">
                We design, cut, and install premium signage for businesses, schools and organizations.
            </p>

            <div className="flex justify-center md:justify-start gap-4">
                <a
                href="#quote"
                className="bg-blue-950 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
                >
                Get a Quote
                </a>

                <a
                href="https://wa.me/447459731254"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500 transition"
                target="_blank"
                >
                Chat on WhatsApp
                </a>
            </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
            <img
                src={cncWorkshopImage}
                alt="TnC ProCut Logo"
                className="w-full h-full object-cover rounded-xl"
            />
            </div>

        </div>
        </section>
    </div>
  );
}