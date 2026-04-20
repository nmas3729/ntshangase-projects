export default function About() {
  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "500+", label: "Happy Customers" },
    { number: "100%", label: "Professional Team" },
    { number: "24/7", label: "Customer Support" },
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
        <h1 className="text-4xl font-bold">About Ntshangase Projects</h1>
        <p className="text-xl text-gray-100 mt-2">Your trusted security partner since 2016</p>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-700 text-lg mb-4">
              Ntshangase Projects was founded with a simple mission: to provide South Africa with world-class security and automation solutions. What started as a small installation team has grown into a trusted name in the industry.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Over the years, we've installed thousands of security systems, automated gates, and renewable energy solutions across the country. Our commitment to quality and customer satisfaction has made us the preferred choice for homeowners and businesses alike.
            </p>
            <p className="text-gray-700 text-lg">
              Today, we continue to innovate and adapt to new technologies, ensuring our customers always get the best solutions for their needs.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-red-600 text-white rounded-lg p-6 text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm text-gray-100">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="text-3xl">🏆</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Professional Experience</h3>
                  <p className="text-gray-700">Experienced technicians with certifications and years of industry expertise.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">🔒</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Quality & Reliability</h3>
                  <p className="text-gray-700">We use premium equipment and guarantee long-lasting installations.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">💰</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Competitive Pricing</h3>
                  <p className="text-gray-700">Best value for money without compromising on quality.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">🤝</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Customer First</h3>
                  <p className="text-gray-700">Dedicated support team available 24/7 for all your queries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
        <a
          href="https://wa.me/27760961850"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
        >
          📱 Get in Touch
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6 px-4 text-center">
        <p>&copy; 2026 Ntshangase Projects. All rights reserved.</p>
      </footer>
    </main>
  );
}
