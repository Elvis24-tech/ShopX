import { useState } from "react";

export default function Navbar({ cartCount, goHome, goCart, currentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-linear-to-r from-indigo-700 via-violet-600 to-fuchsia-500 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <button
          onClick={goHome}
          className="text-3xl font-extrabold text-white tracking-wide hover:scale-110 transition-transform duration-300"
        >
          ShopX
        </button>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl hover:scale-110 transition"
          >
            ☰
          </button>

          {/* Cart Button */}
          <button
            onClick={goCart}
            className={`relative flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition-all duration-300
              ${
                currentPage === "cart"
                  ? "bg-yellow-400 text-gray-900 scale-105"
                  : "bg-white text-gray-900 hover:bg-yellow-300 hover:scale-105"
              }`}
          >
            <span className="text-lg">🛒</span>
            <span className="hidden sm:inline">Cart</span>

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full px-2 py-0.5 animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-linear-to-r from-indigo-700 via-violet-600 to-fuchsia-500 text-white px-6 py-4 shadow-lg animate-fadeIn">
          <ul className="space-y-3 text-lg font-medium">
            <li className="hover:text-yellow-300 cursor-pointer">Electronics</li>
            <li className="hover:text-yellow-300 cursor-pointer">Fashion</li>
            <li className="hover:text-yellow-300 cursor-pointer">Sports</li>
            <li className="hover:text-yellow-300 cursor-pointer">Home</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
