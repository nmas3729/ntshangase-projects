export default function Contact() {
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
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-xl text-gray-100 mt-2">We'd love to hear from you!</p>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="text-3xl">📱</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">WhatsApp</h3>
                    <a
                      href="https://wa.me/27760961850"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-700 font-semibold text-lg"
                    >
                      +27 76 096 1850
                    </a>
                    <p className="text-gray-600 mt-1">Quick chat & instant responses</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                    <a href="tel:0760961850" className="text-red-600 hover:text-red-700 font-semibold text-lg">
                      076 0961 850
                    </a>
                    <p className="text-gray-600 mt-1">Call us during business hours</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl">⏰</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Business Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-700">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl">🗺️</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Service Area</h3>
                    <p className="text-gray-700">South Africa - Throughout Urban & Rural Areas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Quick Inquiry</h2>
              <form className="space-y-6">
                <div>
                  <label className="block font-semibold text-gray-900 mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-900 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-900 mb-2">Service Interested In</label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600">
                    <option>Select a service</option>
                    <option>CCTV Installation</option>
                    <option>Auto Garage Doors</option>
                    <option>Gate Motor Installation</option>
                    <option>Electric Fencing</option>
                    <option>Solar Panels</option>
                    <option>Alarm Systems</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-gray-900 mb-2">Message</label>
                  <textarea
                    placeholder="Tell us about your needs..."
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
                  />
                </div>

                <a
                  href="https://wa.me/27760961850"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors text-center block"
                >
                  📱 Send via WhatsApp
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6 px-4 text-center">
        <p>&copy; 2026 Ntshangase Projects. All rights reserved.</p>
      </footer>
    </main>
  );
}
