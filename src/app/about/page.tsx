import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white w-full">
      {/* Navigation placeholder - would typically be a separate component */}
      {/* About Us Hero Banner */}
      <section className="relative w-full h-[200px] flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-700 overflow-hidden">
        <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20`} />
        <h1 className="text-4xl md:text-5xl font-bold text-white z-10 tracking-wide">About Us</h1>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff6600] to-[#e65c00]"></div>
      </section>

      {/* Company Introduction */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3 flex justify-center">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <Image src="/precicoat-logo.png" alt="Company Logo" width={240} height={120} className="mx-auto" />
            </div>
          </div>
          <div className="lg:w-2/3 text-gray-700">
            <p className="text-lg leading-relaxed mb-6">
              SMTVYS born out of the need for support and value for the manufacturing industry
              back in 2014. Our leading professional group offers solutions ranging from industrial
              equipment, spare parts, technical support, consulting, world-renowned brands of
              industrial equipment, automation, peripheral devices, electrostatic and discharge
              solutions (ESD). Our team has grown in colleagues, experience, technical
              knowledge, and training.
            </p>
            <button className="px-8 py-3 bg-[#ff6600] text-white font-semibold rounded-lg shadow-lg hover:bg-[#e65c00] transition transform hover:scale-105">
              Download About Us
            </button>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Foundation</h2>
            <div className="w-24 h-1 bg-[#ff6600] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="bg-[#ff6600]/10 rounded-full p-4">
                  <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Our goal is to deliver smart value solutions and innovation promptly to enable customers
                to become successful Electronic Manufacturing Services (EMS) companies.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="bg-[#ff6600]/10 rounded-full p-4">
                  <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Our vision is to provide the best solutions and innovations to EMS companies. Providing
                service, support, advice, technology and applications of excellent quality.
              </p>
            </div>

            {/* Values */}
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="bg-[#ff6600]/10 rounded-full p-4">
                  <svg className="w-8 h-8 text-[#ff6600]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to bring innovative solutions to customers by providing a high level of
                knowledge in technology and manufacturing processes to achieve success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Trajectory Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Trajectory</h2>
          <div className="w-24 h-1 bg-[#ff6600] mb-8"></div>
          
          {/* Timeline placeholder - you can add actual timeline content here */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-gray-600 text-lg">
              Our journey in the electronics manufacturing industry spans over a decade of innovation,
              growth, and excellence. From our humble beginnings to becoming a trusted partner for
              EMS companies across Mexico and the United States, we continue to evolve and adapt
              to meet the changing needs of our industry.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Global Presence</h2>
              <div className="w-24 h-1 bg-[#ff6600] mb-8"></div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="font-bold mb-6 text-xl text-gray-800">Office Locations</h3>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-[#ff6600] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-gray-800">Warehouse:</span> San Diego, CA
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-[#ff6600] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-gray-800">Distribution Warehouse:</span> El Paso, TX
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-[#ff6600] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-gray-800">Distribution Warehouse:</span> Queretaro, Qro
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-[#ff6600] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-gray-800">USA Office HQ:</span> El Paso, TX
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-[#ff6600] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-gray-800">Mexico Office HQ:</span> Ciudad Juárez, Chih
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-[#ff6600] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-gray-800">Office:</span> Guadalajara, Jal
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-96 h-64 bg-white rounded-xl shadow-lg flex items-center justify-center border border-gray-200">
                  <svg className="w-80 h-48 text-gray-400" viewBox="0 0 400 200" fill="currentColor">
                    {/* Simplified world map silhouette */}
                    <path d="M50 100 Q100 80 150 100 Q200 120 250 100 Q300 80 350 100 L350 150 Q300 130 250 150 Q200 170 150 150 Q100 130 50 150 Z" opacity="0.3"/>
                    <circle cx="120" cy="90" r="4" className="text-[#ff6600]"/>
                    <circle cx="180" cy="110" r="4" className="text-[#ff6600]"/>
                    <circle cx="280" cy="95" r="4" className="text-[#ff6600]"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-2">
            <div className="h-12 w-48 flex items-center justify-center mb-4">
                <img
                  src="/precicoat-logo.png"
                  alt="Precicoat Pumptronix Logo"
                  className="h-10 w-auto object-contain rounded-lg"
                  style={{ maxWidth: "100%" }}
                />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Leading supplier of production machinery for the electronics industry in Mexico and the United States.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold mb-4 text-[#ff6600]">Quick Links</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white transition">About Us</a>
                <a href="#" className="block text-gray-300 hover:text-white transition">Solutions</a>
                <a href="#" className="block text-gray-300 hover:text-white transition">Store</a>
                <a href="#" className="block text-gray-300 hover:text-white transition">Contact</a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold mb-4 text-[#ff6600]">Contact Info</h3>
              <div className="space-y-2 text-gray-300">
                <p>Mexico & United States</p>
                <p>info@precicoat.com</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-sm text-gray-400">
              © {new Date().getFullYear()} Precicoat Pumptronix. All rights reserved.
            </span>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}