export default function Footer() {
  return (
    <footer className="mt-20 relative bg-black/80 backdrop-blur-xl border-t border-purple-600/40 shadow-inner text-white">
      
      {/* Neon Glow Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-40 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center text-sm">
        
        {/* Left */}
        <p className="mb-4 md:mb-0 text-gray-300">
          © {new Date().getFullYear()} <span className="font-bold text-white">ShopX</span>. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
          <p className="hidden md:block text-gray-400">Built with React & Tailwind</p>
          <div className="flex gap-4">
            <a 
              href="#" 
              className="hover:text-pink-500 hover:underline hover:drop-shadow-lg transition-all duration-300"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="hover:text-pink-500 hover:underline hover:drop-shadow-lg transition-all duration-300"
            >
              Terms
            </a>
            <a 
              href="#" 
              className="hover:text-pink-500 hover:underline hover:drop-shadow-lg transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Floating Neon Shadow */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-20 rounded-full blur-xl"></div>
    </footer>
  );
}
