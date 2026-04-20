export default function Services() {
  const serviceDetails = [
    {
      title: "CCTV Installation & Monitoring",
      icon: "📹",
      description: "Professional CCTV camera installation for homes and businesses. We provide HD quality cameras with 24/7 monitoring capabilities.",
      features: ["HD & 4K cameras", "Cloud storage", "Remote monitoring", "Professional installation"],
    },
    {
      title: "Automatic Garage Doors",
      icon: "🚪",
      description: "Modern automated garage door systems with remote control access. Convenient, secure, and reliable.",
      features: ["Remote control", "Safety sensors", "Battery backup", "Quiet operation"],
    },
    {
      title: "Gate Motor Installation",
      icon: "🏗️",
      description: "Automatic gate system installation for properties of all sizes. Improve security and convenience.",
      features: ["Sliding gates", "Swing gates", "Access control", "Emergency override"],
    },
    {
      title: "Electric Fencing",
      icon: "⚡",
      description: "High-security electric fencing systems designed to protect your property from intruders.",
      features: ["High voltage options", "Weather resistant", "Professional installation", "Low maintenance"],
    },
    {
      title: "Solar Panel Installation",
      icon: "☀️",
      description: "Renewable energy solutions for homes and businesses. Reduce electricity costs with our solar systems.",
      features: ["Cost savings", "Eco-friendly", "Warranty coverage", "Installation & maintenance"],
    },
    {
      title: "Alarm Systems",
      icon: "🔔",
      description: "Modern alarm systems with professional monitoring and mobile alerts.",
      features: ["24/7 monitoring", "Mobile alerts", "Professional installation", "Regular maintenance"],
    },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="bg-red-600 text-white py-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <a href="/" className="text-2xl font-bold hover:text-gray-200">Ntshangase Projects</a>
        </div>
      </header>

      {/* Page Title */}
      <section className="bg-red-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-xl text-gray-100 mt-2">Complete security and automation solutions</p>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {serviceDetails.map((service, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <h3 className="font-semibold text-gray-900 mb-3">Features:</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-red-600 mr-3 font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Interested in a Service?</h2>
        <a
          href="https://wa.me/27760961850"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
        >
          📱 Contact Us on WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6 px-4 text-center">
        <p>&copy; 2026 Ntshangase Projects. All rights reserved.</p>
      </footer>
    </main>
  );
}
