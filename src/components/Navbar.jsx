export default function Navbar({ cartCount, goHome, goCart }) {
    return (
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={goHome} className="text-2xl font-extrabold text-gray-900">
            ShopX
          </button>
  
          <div className="hidden md:block flex-1 mx-8">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-300 outline-none"
            />
          </div>
  
          <button
            onClick={goCart}
            className="text-sm font-semibold text-gray-700 hover:text-gray-900"
          >
            Cart ({cartCount})
          </button>
        </div>
      </nav>
    );
  }
  