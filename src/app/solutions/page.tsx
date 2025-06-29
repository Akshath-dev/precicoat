'use client';
import { useState } from 'react';

const solutionsData = [
  {
    id: 1,
    title: "Precicoat Pumptronix Line Solution",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    category: "Precicoat Pumptronix",
    description: "Complete surface mount technology solutions for high-precision electronic assembly",
    fullDescription: "Our Precicoat Pumptronix Line Solutions offer comprehensive surface mount technology systems designed for high-precision electronic assembly. These state-of-the-art production lines include automated component placement, precision soldering, and quality control systems. Perfect for manufacturers requiring consistent, high-quality electronic assembly with minimal manual intervention. Our solutions support various board sizes and component types, ensuring flexibility for different production requirements."
  },
  {
    id: 2,
    title: "Dispensing Solutions", 
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    category: "Precicoat Pumptronix",
    description: "Advanced dispensing systems for adhesives, conformal coatings, and encapsulants",
    fullDescription: "Precicoat Pumptronix dispensing solutions provide precise application of adhesives, conformal coatings, encapsulants, and other materials. Our systems feature programmable dispensing patterns, consistent flow control, and minimal waste generation. Ideal for applications requiring exact material placement, our dispensing equipment ensures uniform coverage and reduces material costs while maintaining high-quality standards."
  },
  {
    id: 3,
    title: "Programming Solutions",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80", 
    category: "Precicoat Pumptronix",
    description: "Automated programming solutions for microcontrollers and memory devices",
    fullDescription: "Our programming solutions offer automated programming for microcontrollers, memory devices, and other programmable components. Features include gang programming capabilities, verification systems, and support for multiple device types. These solutions integrate seamlessly into production lines, reducing programming time and ensuring consistent code deployment across all devices."
  },
  {
    id: 4,
    title: "Laser Marking",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    category: "Precicoat Pumptronix", 
    description: "High-precision laser marking systems for component identification and traceability",
    fullDescription: "Precicoat Pumptronix laser marking systems provide permanent, high-resolution marking for component identification, traceability, and branding. Our systems support various marking types including text, barcodes, QR codes, and logos. With precise beam control and automated positioning, these systems ensure consistent marking quality while maintaining component integrity."
  },
  {
    id: 5,
    title: "Screen Printer",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80",
    category: "Precicoat Pumptronix",
    description: "Professional screen printing equipment for solder paste application",
    fullDescription: "Our professional screen printing equipment delivers precise solder paste application for PCB assembly. Features include automatic stencil alignment, consistent paste deposition, and programmable print parameters. These systems ensure uniform solder paste coverage, reducing defects and improving assembly quality. Compatible with various paste types and board sizes."
  },
  {
    id: 6,
    title: "Solder Paste Inspection",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    category: "Precicoat Pumptronix", 
    description: "3D solder paste inspection systems ensuring optimal print quality",
    fullDescription: "Advanced 3D solder paste inspection systems from Precicoat Pumptronix ensure optimal print quality through precise measurement and analysis. Our systems detect volume, height, area, and position deviations, providing real-time feedback for print quality optimization. Statistical process control features help maintain consistent production quality and reduce downstream defects."
  },
  {
    id: 7,
    title: "Pick and Place",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    category: "Precicoat Pumptronix",
    description: "High-speed component placement systems for automated assembly",
    fullDescription: "Our high-speed pick and place systems provide efficient component placement for automated PCB assembly. With multiple placement heads, vision-guided placement, and flexible feeder configurations, these systems handle various component types from 0201 chips to large connectors. Advanced software ensures optimal placement sequence and reduces cycle times."
  },
  {
    id: 8,
    title: "Reflow Oven", 
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
    category: "Precicoat Pumptronix",
    description: "Advanced reflow soldering ovens with precise temperature control",
    fullDescription: "Precicoat Pumptronix reflow ovens feature advanced temperature control systems ensuring consistent solder joint quality. With multiple heating zones, precise profiling capabilities, and nitrogen atmosphere options, our ovens accommodate various assembly requirements. Real-time monitoring and data logging capabilities ensure process compliance and quality control."
  },
  {
    id: 9,
    title: "AOI",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    category: "Precicoat Pumptronix",
    description: "Automated optical inspection systems for quality assurance",
    fullDescription: "Our Automated Optical Inspection (AOI) systems provide comprehensive quality assurance through advanced image processing and analysis. Capable of detecting component presence, polarity, alignment, and solder joint quality, these systems ensure consistent product quality. Machine learning algorithms continuously improve detection accuracy and reduce false calls."
  },
  {
    id: 10,
    title: "Storage Solutions",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80", 
    category: "Storage",
    description: "Climate-controlled storage systems for sensitive electronic components",
    fullDescription: "Precicoat Pumptronix storage solutions provide optimal environmental conditions for sensitive electronic components. Our climate-controlled systems maintain precise temperature and humidity levels, preventing component degradation and ensuring reliable performance. Automated inventory management and traceability features help optimize component usage and reduce waste."
  },
  {
    id: 11,
    title: "Cleaning Solution",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    category: "Process",
    description: "Advanced cleaning systems for PCB and component preparation",
    fullDescription: "Our advanced cleaning systems ensure optimal PCB and component preparation through precision cleaning processes. Using environmentally friendly solvents and automated handling, these systems remove flux residues, contamination, and other impurities. Multiple cleaning stages and rinse cycles ensure thorough cleaning while protecting sensitive components."
  },
  {
    id: 12,
    title: "ESD Protection",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    category: "ESD", 
    description: "Comprehensive ESD protection solutions for sensitive electronic environments",
    fullDescription: "Comprehensive ESD protection solutions from Precicoat Pumptronix safeguard sensitive electronic components and assemblies. Our systems include ionization equipment, grounding systems, and monitoring devices that maintain safe electrostatic discharge levels. Complete workstation solutions ensure personnel and equipment protection throughout the manufacturing process."
  }
];

const serviceCategories = [
  { name: "All", active: true },
  { name: "Precicoat Pumptronix", active: false },
  { name: "Storage", active: false },
  { name: "Process", active: false },
  { name: "ESD", active: false }
];

export default function SolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<typeof solutionsData[0] | null>(null);

  const filteredSolutions = selectedCategory === "All" 
    ? solutionsData 
    : solutionsData.filter(solution => solution.category === selectedCategory);

  const handleReadMore = (product: typeof solutionsData[0]) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="/electronics.jpg" 
          alt="Background electronics"
          className="w-full h-full object-cover opacity-20" 
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex flex-col justify-center items-center text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80" 
            alt="Mechanical gears background" 
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            PRECICOAT PUMPTRONIX
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 drop-shadow-lg text-orange-300">
            SOLUTIONS
          </h2>
          <p className="text-lg md:text-xl mb-2 drop-shadow-md max-w-2xl">
            Your trusted partner for precision coating and pumping solutions
          </p>
          <p className="text-lg md:text-xl drop-shadow-md font-medium">
            Excellence in Electronic Manufacturing Equipment
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Services Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden sticky top-24">
              <div className="bg-gradient-to-r from-[#ff6600] to-[#e55a00] text-white px-6 py-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  Product Categories
                </h2>
              </div>
              <div className="p-2">
                {serviceCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full text-left px-4 py-3 rounded-lg mb-1 transition-all duration-200 ${
                      selectedCategory === category.name
                        ? 'bg-[#ff6600] text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#ff6600]'
                    }`}
                  >
                    <span className="font-medium text-sm">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Solutions Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredSolutions.map((solution) => (
                <div
                  key={solution.id}
                  className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  onMouseEnter={() => setHoveredCard(solution.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-[#ff6600] text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {solution.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {solution.description}
                    </p>
                    <button 
                      onClick={() => handleReadMore(solution)}
                      className="w-full bg-[#ff6600] hover:bg-[#e55a00] text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredSolutions.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No solutions found</h3>
                <p className="text-gray-500">Try selecting a different category or check back later.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-800"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="bg-[#ff6600] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {selectedProduct.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {selectedProduct.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {selectedProduct.fullDescription}
              </p>
              
              <div className="flex gap-4">
                <button className="flex-1 bg-[#ff6600] hover:bg-[#e55a00] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                  Contact Us
                </button>
                <button className="flex-1 border-2 border-[#ff6600] text-[#ff6600] hover:bg-[#ff6600] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Manufacturing Process?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Partner with Precicoat Pumptronix to find the perfect precision coating and pumping solutions for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#ff6600] hover:bg-[#e55a00] text-white px-8 py-3 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
              Contact Our Experts
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-bold text-lg transition-all duration-200">
              Download Catalog
            </button>
          </div>
        </div>
      </section>
      
    </div>
  );
}