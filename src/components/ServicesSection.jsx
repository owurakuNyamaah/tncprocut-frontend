
export default function ServiceSection() {
  const services = [
    {
      icon: '#',
      title: "CNC Cutting",
      desc: "We provide precision CNC cutting for wood, acrylic, PVC, and other materials. Whether you need custom shapes, lettering, panels, or detailed designs, our machines deliver clean, accurate results every time. Ideal for signage, furniture components, and creative projects.",
    },
    {
      icon: '#',
      title: "Custom Signage & Business Branding",
      desc: "We design, fabricate, and install custom signage that helps your business stand out. From 3D acrylic letters to complete shopfront branding, we handle everything from concept to installation. Built for visibility, durability, and a professional finish.",
    },
    {
      icon: '#',
      title: "Engraving Services",
      desc: "Our engraving service adds a refined touch to your products and projects. We engrave logos, text, and designs on wood, acrylic, metal, and more—perfect for plaques, nameplates, gifts, and branded materials.",
    },
  ];

  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 border rounded-2xl hover:shadow-lg transition"
          >
            {/* <div className="mb-4 text-black">{service.icon}</div> */}

            <h3 className="text-lg font-semibold mb-3">
              {service.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}