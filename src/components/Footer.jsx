export default function Footer() {
    return (
      <footer className="mt-20 bg-white/70 backdrop-blur-xl border-t border-white/30 shadow-inner">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-700">
          
          {/* Left */}
          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()} <span className="font-semibold">ShopX</span>. All rights reserved.
          </p>
  
          {/* Right */}
          <div className="flex gap-6 items-center">
            <p className="hidden md:block">Built with React & Tailwind</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-pink-500 transition">Privacy</a>
              <a href="#" className="hover:text-pink-500 transition">Terms</a>
              <a href="#" className="hover:text-pink-500 transition">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  