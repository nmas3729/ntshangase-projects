"use client";

import { useState } from "react";

export default function Home() {
  const phone = "2760961850"; // the actual business line string is kept here.
  const [logoFailed, setLogoFailed] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState<string | null>(null);
  const [modalVideoSrc, setModalVideoSrc] = useState<string | null>(null);

  return (
    <div className="bg-white text-[#1A1A1A] font-sans antialiased min-h-screen flex flex-col">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-[#CC0000] pt-[14px] pb-3 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
        <div className="max-w-[560px] sm:max-w-[620px] mx-auto px-5 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            {!logoFailed ? (
              <img
                src="/images/ntshangaselogo.png"
                alt="Ntshangase Projects Logo"
                className="h-[52px] w-auto block filter brightness-105"
                onError={() => setLogoFailed(true)}
              />
            ) : (
              <div className="flex flex-col">
                <span className="text-[1.35rem] font-extrabold tracking-[-0.2px] text-white leading-[1.2]">
                  NTSHANGASE
                </span>
                <span className="text-[0.65rem] text-[#FFE5E5] font-medium tracking-[0.3px]">
                  PROJECTS
                </span>
              </div>
            )}
            {logoFailed ? null : (
              <div className="flex flex-col hidden sm:flex">
                <span className="text-[1.35rem] font-extrabold tracking-[-0.2px] text-white leading-[1.2]">
                  Ntshangase
                </span>
                <span className="text-[0.65rem] text-[#FFE5E5] font-medium tracking-[0.3px]">
                  Security & Automation
                </span>
              </div>
            )}
          </div>
          <div className="flex gap-[10px]">
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(
                "Hello Ntshangase Projects I need a quote"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-[2px] px-[14px] py-2 rounded-full font-semibold text-[0.8rem] text-white inline-flex items-center gap-[6px] border border-white/30 transition-all active:scale-96 active:bg-white active:text-[#CC0000]"
            >
              <i className="fab fa-whatsapp text-[0.9rem]"></i> WhatsApp
            </a>
            <a
              href={`tel:+${phone}`}
              className="bg-white/20 backdrop-blur-[2px] px-[14px] py-2 rounded-full font-semibold text-[0.8rem] text-white inline-flex items-center gap-[6px] border border-white/30 transition-all active:scale-96 active:bg-white active:text-[#CC0000]"
            >
              <i className="fas fa-phone-alt text-[0.9rem]"></i> Call
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#CC0000] to-[#990000] pt-9 pb-11 rounded-b-[36px] mb-6 text-center">
          <div className="max-w-[560px] sm:max-w-[620px] mx-auto px-5">
            <div className="inline-flex items-center gap-[6px] bg-white/20 px-3 py-1.5 rounded-full text-[0.7rem] font-semibold text-white mb-3">
              <i className="fas fa-flag-checkered"></i> Proudly Serving South Africa
            </div>
            <h2 className="text-[1.9rem] font-extrabold text-white leading-[1.2] mb-2">
              Secure & Automate<br />With Excellence
            </h2>
            <div className="text-base font-medium text-[#FFE5E5] mb-7">
              Electric Fence • CCTV • Gate Motors • Solar • Alarms
            </div>
            <div className="flex flex-col sm:flex-row gap-3 max-w-[280px] sm:max-w-[360px] mx-auto">
              <a
                href={`https://wa.me/${phone}?text=${encodeURIComponent(
                  "I'd like a free quote for security"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-[10px] py-[14px] sm:py-[12px] rounded-full font-bold text-base bg-[#25D366] text-white shadow-[0_5px_12px_rgba(0,0,0,0.15)] active:scale-[0.98] transition-transform"
              >
                <i className="fab fa-whatsapp text-[1.2rem]"></i> WhatsApp Us
              </a>
              <a
                href={`tel:+${phone}`}
                className="w-full flex items-center justify-center gap-[10px] py-[14px] sm:py-[12px] rounded-full font-bold text-base bg-white text-[#CC0000] border-2 border-[#CC0000] shadow-[0_5px_12px_rgba(0,0,0,0.15)] active:scale-[0.98] transition-transform"
              >
                <i className="fas fa-phone-alt text-[1.2rem]"></i> Call Now
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-[560px] sm:max-w-[620px] mx-auto px-5">
          {/* Premium Services */}
          <div>
            <h2 className="text-[1.7rem] font-bold mt-8 mb-5 tracking-[-0.3px] text-[#CC0000] relative inline-block after:content-[''] after:block after:w-[60%] after:h-[3px] after:bg-[#CC0000] after:rounded after:mt-[6px]">
              Our Premium Services
            </h2>
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 mt-2">
              {[
                { name: "CCTV", icon: "📹", desc: "Reliable & Professional" },
                { name: "Garage Doors", icon: "🚪", desc: "Reliable & Professional" },
                { name: "Gate Motors", icon: "⚙️", desc: "Reliable & Professional" },
                { name: "Electric Fence", icon: "⚡", desc: "Reliable & Professional" },
                { name: "Solar", icon: "☀️", desc: "Reliable & Professional" },
                { name: "Alarms", icon: "🔔", desc: "Reliable & Professional" },
              ].map((s) => (
                <div
                  key={s.name}
                  className="bg-white rounded-[28px] p-[18px_20px] flex items-center gap-[18px] shadow-[0_8px_18px_rgba(0,0,0,0.05)] border border-[#FFCCCC] active:scale-[0.99] transition-transform"
                >
                  <div className="text-[2.5rem] w-[58px] text-center">{s.icon}</div>
                  <div>
                    <h3 className="text-[1.3rem] font-bold mb-1 text-[#CC0000]">{s.name}</h3>
                    <p className="text-[#666666] font-medium text-[0.8rem]">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-[1.7rem] font-bold mt-8 mb-4 tracking-[-0.3px] text-[#CC0000] relative inline-block after:content-[''] after:block after:w-[60%] after:h-[3px] after:bg-[#CC0000] after:rounded after:mt-[6px]">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-2 gap-[14px] my-5">
              {[
                { text: "10+ Years Experience", icon: "fa-trophy" },
                { text: "Fast Installation", icon: "fa-bolt" },
                { text: "Affordable Pricing", icon: "fa-wallet" },
                { text: "Trusted Experts", icon: "fa-user-tie" },
                { text: "After Support", icon: "fa-headset" },
                { text: "Certified Installers", icon: "fa-id-card" },
                { text: "24/7 Support", icon: "fa-clock" },
                { text: "Warranty Included", icon: "fa-file-contract" },
                { text: "Fast Response", icon: "fa-gauge-high" },
              ].map((f) => (
                <div
                  key={f.text}
                  className="bg-white rounded-[20px] p-[12px_10px] flex items-center gap-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.02)] border border-[#FFCCCC]"
                >
                  <i
                    className={`fas ${f.icon} text-[1.4rem] text-[#CC0000] w-[28px] text-center`}
                  ></i>
                  <span className="font-semibold text-[0.85rem] leading-tight">
                    {f.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-white rounded-[28px] p-[24px_22px] my-5 shadow-[0_8px_20px_rgba(0,0,0,0.02)] border-l-[6px] border-[#CC0000]">
            <p className="text-base font-medium italic text-[#2D2D2D] mb-3">
              <i className="fas fa-quote-left mr-[6px] opacity-70"></i>{" "}
              Professional, fast, and reliable. Highly recommended!
            </p>
            <div className="font-extrabold flex items-center gap-[6px] text-[#CC0000]">
              <i className="fas fa-star"></i> — Happy Client
            </div>
          </div>

          {/* Installation Videos - showing actual video content looping thumbnails */}
          <div>
            <h2 className="text-[1.7rem] font-bold mt-8 mb-5 tracking-[-0.3px] text-[#CC0000] relative inline-block after:content-[''] after:block after:w-[60%] after:h-[3px] after:bg-[#CC0000] after:rounded after:mt-[6px]">
              Installation Videos
            </h2>
            <div className="flex flex-col gap-6 my-5">
              
              {/* Alarm Installation Video */}
              <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_5px_12px_rgba(0,0,0,0.08)] border border-[#FFE5E5]">
                <div 
                  className="relative w-full bg-black cursor-pointer group" 
                  onClick={() => setModalVideoSrc("/images/arlarminstallation.mp4")}
                >
                  <video 
                    className="w-full h-auto block max-h-[280px] object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                    autoPlay muted loop playsInline
                  >
                    <source src="/images/arlarminstallation.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-[rgba(204,0,0,0.85)] rounded-full flex items-center justify-center text-white text-[1.8rem] transition-all duration-200 pointer-events-none group-active:scale-90 shadow-lg">
                    <i className="fas fa-play ml-1"></i>
                  </div>
                </div>
                <div className="p-4 text-center bg-white">
                  <div className="inline-flex items-center gap-2 bg-[#FFF5F5] px-3 py-1.5 rounded-[20px] text-[0.7rem] font-semibold text-[#CC0000] mb-2">
                    <i className="fas fa-shield-alt"></i> STAFIX | NEMTEK
                  </div>
                  <h3 className="text-[1.2rem] font-bold mb-1.5 text-[#CC0000]">
                    Alarm Installation
                  </h3>
                  <p className="text-[0.85rem] text-[#666666] mb-3">
                    Professional security system installation
                  </p>
                </div>
              </div>

              {/* Garage Door Motor Video */}
              <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_5px_12px_rgba(0,0,0,0.08)] border border-[#FFE5E5]">
                <div 
                  className="relative w-full bg-black cursor-pointer group" 
                  onClick={() => setModalVideoSrc("/images/garagemotor.mp4")}
                >
                  <video 
                    className="w-full h-auto block max-h-[280px] object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                    autoPlay muted loop playsInline
                  >
                    <source src="/images/garagemotor.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-[rgba(204,0,0,0.85)] rounded-full flex items-center justify-center text-white text-[1.8rem] transition-all duration-200 pointer-events-none group-active:scale-90 shadow-lg">
                    <i className="fas fa-play ml-1"></i>
                  </div>
                </div>
                <div className="p-4 text-center bg-white">
                  <div className="inline-flex items-center gap-2 bg-[#FFF5F5] px-3 py-1.5 rounded-[20px] text-[0.7rem] font-semibold text-[#CC0000] mb-2">
                    <i className="fas fa-car"></i> Professional Fencing Systems
                  </div>
                  <h3 className="text-[1.2rem] font-bold mb-1.5 text-[#CC0000]">
                    Garage Door Motor
                  </h3>
                  <p className="text-[0.85rem] text-[#666666] mb-3">
                    Reliable & quiet operation
                  </p>
                </div>
              </div>

              {/* Gate Motor Installation Video */}
              <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_5px_12px_rgba(0,0,0,0.08)] border border-[#FFE5E5]">
                <div 
                  className="relative w-full bg-black cursor-pointer group" 
                  onClick={() => setModalVideoSrc("/images/gatemotor.mp4")}
                >
                  <video 
                    className="w-full h-auto block max-h-[280px] object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                    autoPlay muted loop playsInline
                  >
                    <source src="/images/gatemotor.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-[rgba(204,0,0,0.85)] rounded-full flex items-center justify-center text-white text-[1.8rem] transition-all duration-200 pointer-events-none group-active:scale-90 shadow-lg">
                    <i className="fas fa-play ml-1"></i>
                  </div>
                </div>
                <div className="p-4 text-center bg-white">
                  <div className="inline-flex items-center gap-2 bg-[#FFF5F5] px-3 py-1.5 rounded-[20px] text-[0.7rem] font-semibold text-[#CC0000] mb-2">
                    <i className="fas fa-torii-gate"></i> Automatic Gate Systems
                  </div>
                  <h3 className="text-[1.2rem] font-bold mb-1.5 text-[#CC0000]">
                    Gate Motor Installation
                  </h3>
                  <p className="text-[0.85rem] text-[#666666] mb-3">
                    Smooth automatic gate operation
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Project Gallery */}
          <div>
            <h2 className="text-[1.7rem] font-bold mt-8 mb-5 tracking-[-0.3px] text-[#CC0000] relative inline-block after:content-[''] after:block after:w-[60%] after:h-[3px] after:bg-[#CC0000] after:rounded after:mt-[6px]">
              Our Projects
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-[12px] my-5">
              {[
                { src: "/images/work1.jpg", alt: "Installation Project 1" },
                { src: "/images/work2.jpg", alt: "Installation Project 2" },
                { src: "/images/work3.jpg", alt: "Installation Project 3" },
                { src: "/images/work4.jpeg", alt: "Installation Project 4" },
                { src: "/images/work5.jpeg", alt: "Installation Project 5" },
                { src: "/images/work6.jpeg", alt: "Installation Project 6" },
                { src: "/images/work7.jpeg", alt: "Installation Project 7" },
                { src: "/images/work8.jpeg", alt: "Installation Project 8" },
                { src: "/images/work9.jpeg", alt: "Installation Project 9" },
              ].map((img, i) => (
                <div 
                  key={i} 
                  className="rounded-2xl overflow-hidden aspect-square bg-[#F5F5F5] shadow-[0_2px_8px_rgba(0,0,0,0.05)] cursor-pointer"
                  onClick={() => setModalImageSrc(img.src)}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover block transition-transform duration-200 active:scale-105" 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Before & After */}
          <div className="bg-white rounded-[28px] p-5 my-5 border border-[#FFCCCC]">
            <h3 className="text-[1.4rem] font-bold mb-1 text-[#CC0000]">
              Before & After Installation
            </h3>
            <div className="flex gap-3 mt-3">
              <div className="flex-1 bg-[#FFF5F5] rounded-[20px] p-[18px_8px] text-center">
                <i className="fas fa-image text-[2rem] text-[#CC0000] mb-2 block"></i>
                <h4 className="font-extrabold mb-[6px] text-[#CC0000]">Before</h4>
                <p className="text-[0.75rem] text-gray-500">
                  Before installation
                </p>
              </div>
              <div className="flex-1 bg-[#FFF5F5] rounded-[20px] p-[18px_8px] text-center">
                <i className="fas fa-check-double text-[2rem] text-[#CC0000] mb-2 block"></i>
                <h4 className="font-extrabold mb-[6px] text-[#CC0000]">After</h4>
                <p className="text-[0.75rem] text-gray-500">
                  After installation
                </p>
              </div>
            </div>
            <p className="text-[0.8rem] text-center mt-3 text-gray-700">
              Real transformations by Ntshangase Projects
            </p>
          </div>

          {/* CTA Banner */}
          <div className="bg-[#CC0000] rounded-[32px] p-[28px_20px] text-center my-9 text-white">
            <h3 className="text-[1.6rem] font-extrabold mb-2 text-white">
              Ready to Secure Your Property?
            </h3>
            <p className="mb-5 opacity-90">
              Get a fast quote directly on WhatsApp
            </p>
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(
                "I'm ready to secure my property - please quote"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-7 py-3 rounded-full font-bold flex items-center justify-center gap-[10px] mx-auto w-fit active:scale-95 transition-transform"
            >
              <i className="fab fa-whatsapp text-[1.1rem]"></i> Get Quote Now
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-white rounded-[28px] p-5 my-4 flex items-center gap-[18px] flex-wrap border border-[#FFCCCC]">
            <i className="fas fa-map-marker-alt text-[2rem] text-[#CC0000]"></i>
            <div>
              <h4 className="text-[1.2rem] font-bold mb-1 text-[#CC0000]">
                📍 Serving South Africa
              </h4>
              <p className="text-sm text-gray-600">
                Based in Midrand • Covering Gauteng & Surrounding Areas
              </p>
              <a
                href={`https://wa.me/${phone}?text=${encodeURIComponent(
                  "Hi I'd like to chat about services"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-[6px] font-semibold text-[#CC0000] items-center gap-1 hover:underline active:opacity-70 transition-opacity"
              >
                <i className="fab fa-whatsapp"></i> 💬 Chat with us
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center pt-7 pb-8 px-4 text-[0.75rem] text-[#888888] border-t border-[#FFCCCC] mt-4">
        <div className="max-w-[560px] sm:max-w-[620px] mx-auto flex flex-col gap-[8px]">
          <p className="text-[#1A1A1A] font-semibold">
            <i className="fas fa-heart text-[#CC0000]"></i> Proudly Serving South Africa
          </p>
          <p>
            © 2026 Ntshangase Projects — Security & Automation Experts. All rights reserved.
          </p>
          <p>
            Powered By{" "}
            <a 
              href="https://webcraft.nmas.co.za/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-semibold text-[#CC0000] hover:underline"
            >
              NMAS WebCraft
            </a>
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${phone}?text=${encodeURIComponent(
          "Hello Ntshangase Projects I need assistance"
        )}`}
        className="fixed bottom-6 right-5 bg-[#25D366] w-[54px] h-[54px] rounded-full flex items-center justify-center shadow-[0_6px_16px_rgba(37,211,102,0.35)] z-50 text-white text-[1.8rem] active:scale-95 transition-transform"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* React Image Modal */}
      {modalImageSrc && (
        <div 
          className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.95)] z-[2000] flex justify-center items-center p-5 cursor-pointer"
          onClick={() => setModalImageSrc(null)}
        >
          <span 
            className="absolute top-5 right-5 text-white text-[2rem] bg-[rgba(0,0,0,0.6)] w-[44px] h-[44px] rounded-full flex items-center justify-center cursor-pointer hover:bg-black transition-colors z-[2001] active:scale-95"
          >
            &times;
          </span>
          <img 
            src={modalImageSrc} 
            alt="Enlarged Project View" 
            className="max-w-[90%] max-h-[80vh] rounded-xl object-contain shadow-2xl" 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}

      {/* React Video Modal */}
      {modalVideoSrc && (
        <div 
          className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.95)] z-[2000] flex justify-center items-center p-5 cursor-pointer"
          onClick={() => setModalVideoSrc(null)}
        >
          <span 
            className="absolute top-5 right-5 text-white text-[2rem] bg-[rgba(0,0,0,0.6)] w-[44px] h-[44px] rounded-full flex items-center justify-center cursor-pointer hover:bg-black transition-colors z-[2001] active:scale-95"
          >
            &times;
          </span>
          <video 
            src={modalVideoSrc} 
            controls 
            autoPlay 
            className="max-w-[90%] max-h-[80vh] rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.3)]" 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}

    </div>
  );
}
