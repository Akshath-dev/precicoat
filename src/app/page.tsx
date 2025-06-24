import Image from "next/image";

export default function Home() {

  return (
 <div className="bg-white w-full">


      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] flex flex-col justify-center items-center text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.jpg" 
            alt="Advanced electronics manufacturing facility" 
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg max-w-4xl leading-tight">
            Supplier of production machinery for the electronics industry
            <span className="block text-2xl md:text-4xl mt-2">in Mexico and the United States</span>
          </h1>
          <button className="mt-6 px-8 py-3 bg-[#ff6700] text-white font-bold rounded-lg shadow-lg hover:bg-[#e65c00] transition transform hover:scale-105">
            Explore Our Solutions
          </button>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="relative w-full py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            {/* Left Side - Image */}
            <div className="lg:w-1/2">
              <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Precision electronics manufacturing equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="bg-white p-10 rounded-xl shadow-xl border-l-4 border-[#ff6700]">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Solutions for the optimization of processes in the 
                  <span className="text-[#ff6700]"> electronic sector</span>
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  We help the manufacturing industry, especially the electronics sector, 
                  with technological solutions of SMT, through hole, wave soldering, 
                  dispensers, conformal coating, process programming of peripheral and 
                  electrostatic devices, from world-renowned brands.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Our solutions enable the automation of processes and consulting to achieve 
                  improvement in productivity, as well as the reduction of operating costs.
                </p>
                <button className="mt-6 px-6 py-3 bg-[#ff6700] text-white font-semibold rounded-lg hover:bg-[#e65c00] transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalogue Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Catalogue of available products and technologies
            </h2>
            <div className="w-24 h-1 bg-[#ff6700] mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <div className="w-48 h-64 bg-gray-100 rounded-lg shadow-lg flex items-center justify-center border-2 border-gray-200">
                <span className="text-gray-500 font-medium">Product Catalogue</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="grid gap-6">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-[#ff6700] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Equipment for process automation</h3>
                    <p className="text-gray-600">We provide solutions for automation and optimization of your production processes, increasing efficiency and reducing costs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-[#ff6700] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Use of leading-edge technology</h3>
                    <p className="text-gray-600">Our solutions use the latest technology to guarantee the best results for your business.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-[#ff6700] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Expert consultation and support</h3>
                    <p className="text-gray-600">Our team of experts provides comprehensive consultation and ongoing support for all your manufacturing needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Partners</h2>
          <div className="w-24 h-1 bg-[#ff6700] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 mb-12">We introduce our trusted business partners in Mexico and the United States.</p>
          
          <div className="flex flex-wrap justify-center gap-16 items-center">
            <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center shadow-md">
              <span className="text-sm font-medium text-gray-600">South-Tek</span>
            </div>
            <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center shadow-md">
              <span className="text-sm font-medium text-gray-600">SAM</span>
            </div>
            <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center shadow-md">
              <span className="text-sm font-medium text-gray-600">Partner 3</span>
            </div>
            <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center shadow-md">
              <span className="text-sm font-medium text-gray-600">Partner 4</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-[#ff6700] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to optimize your production processes?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us today to learn how our solutions can improve your manufacturing efficiency.</p>
          <button className="px-8 py-3 bg-white text-[#ff6700] font-bold rounded-lg hover:bg-gray-100 transition transform hover:scale-105 shadow-lg">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="h-12 w-48 bg-gray-700 rounded flex items-center justify-center mb-4">
                <span className="text-sm font-bold text-gray-300">Precicoat Logo</span>
              </div>
              <p className="text-gray-300">Leading supplier of production machinery for the electronics industry in Mexico and the United States.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-[#ff6700]">Quick Links</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-300 hover:text-white transition">About Us</a>
                <a href="#solutions" className="block text-gray-300 hover:text-white transition">Solutions</a>
                <a href="#store" className="block text-gray-300 hover:text-white transition">Store</a>
                <a href="#contact" className="block text-gray-300 hover:text-white transition">Contact</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-[#ff6700]">Contact Info</h3>
              <div className="space-y-2 text-gray-300">
                <p>Mexico & United States</p>
                <p>info@precicoat.com</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-sm text-gray-400">© 2025 Precicoat Pumptronix. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
