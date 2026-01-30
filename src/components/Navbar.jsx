export default function Navbar({ cartCount, goHome, goCart, currentPage }) {
    return (
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
  
          {/* Logo */}
          <button
            onClick={goHome}
            className={`text-2xl font-extrabold ${
              currentPage === "home"
                ? "text-gray-900 underline underline-offset-4"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            ShopX
          </button>
  
          {/* Cart */}
          <button
            onClick={goCart}
            className={`relative text-sm font-semibold px-3 py-1 rounded-md transition
              ${
                currentPage === "cart"
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
          >
            Cart
            {cartCount > 0 && (
              <span className="ml-2 inline-flex items-center justify-center text-xs font-bold bg-gray-900 text-white rounded-full px-2 py-0.5">
                {cartCount}
              </span>
            )}
          </button>
  
        </div>
      </nav>
    );
  }
  