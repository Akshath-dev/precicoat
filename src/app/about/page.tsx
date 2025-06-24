import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white w-full">
      {/* About Us Banner */}
      <section className="relative w-full h-[220px] flex items-center justify-center bg-gradient-to-b from-blue-900 to-blue-700">
        <h1 className="text-3xl md:text-5xl font-bold text-white z-10">About Us</h1>
        <div className="absolute inset-0 bg-[url('/globe.svg')] bg-cover bg-center opacity-10" />
      </section>

      {/* About Us Content */}
      <section className="max-w-6xl mx-auto py-12 px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0 flex flex-col items-center md:items-start">
          <Image src="/precicoat-logo.png" alt="Company Logo" width={180} height={80} />
        </div>
        <div className="flex-1 text-gray-800">
          <p className="mb-6 text-lg">
            Precicoat Pumptronix was born out of the need for support and value for the manufacturing industry. Our leading professional group offers solutions ranging from industrial equipment, spare parts, technical support, consulting, world-renowned brands of industrial equipment, automation, peripheral devices, and discharge solutions. Our team has grown in colleagues, experience, technical knowledge, and training.
          </p>
          <button className="px-6 py-2 bg-blue-900 text-white font-bold rounded shadow hover:bg-blue-800 transition">
            Download About Us
          </button>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-blue-900 py-16 px-4 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="flex justify-center mb-4">
              <span className="inline-block bg-white/10 rounded-full p-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3" /></svg>
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Mission</h3>
            <p className="text-sm">Our goal is to deliver smart value solutions and innovation promptly to enable customers to become successful manufacturing companies.</p>
          </div>
          <div>
            <div className="flex justify-center mb-4">
              <span className="inline-block bg-white/10 rounded-full p-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Vision</h3>
            <p className="text-sm">Our vision is to provide the best solutions and innovations to companies. Providing service, support, advice, technology, and applications of excellent quality.</p>
          </div>
          <div>
            <div className="flex justify-center mb-4">
              <span className="inline-block bg-white/10 rounded-full p-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l2 7h7l-5.5 4 2 7-5.5-4-5.5 4 2-7L3 9h7z" /></svg>
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Values</h3>
            <p className="text-sm">Our mission is to bring innovative solutions to customers by providing a high level of knowledge in technology and manufacturing processes to achieve success.</p>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="bg-blue-800 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 text-white">
            <h2 className="text-2xl font-bold mb-4">Our Offices</h2>
            <ul className="text-sm space-y-2">
              <li><span className="font-bold">Warehouse:</span> San Diego, CA.</li>
              <li><span className="font-bold">Distribution Warehouse:</span> El Paso, TX.</li>
              <li><span className="font-bold">Distribution Warehouse:</span> Queretaro, Qro.</li>
              <li><span className="font-bold">USA Office HQ:</span> El Paso, TX</li>
              <li><span className="font-bold">Mexico Office HQ:</span> Ciudad Juárez, Chih.</li>
              <li><span className="font-bold">Office:</span> Guadalajara, Jal</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src="/globe.svg" alt="World Map" width={320} height={180} className="opacity-80" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start">
            <Image src="/precicoat-logo.png" alt="Precicoat Pumptronix Logo" width={160} height={48} className="mb-2" />
            <span className="text-sm">© {new Date().getFullYear()} Precicoat Pumptronix. All rights reserved.</span>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
} 