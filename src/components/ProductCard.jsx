import { useState } from "react";

export default function ProductCard({ product, addToCart }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="relative rounded-2xl bg-white/70 backdrop-blur-xl border border-white/30 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      
      {/* Glass highlight */}
      <div className="absolute inset-0 bg-linear-to-br from-white/25 to-transparent pointer-events-none" />

      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover"
      />

      {/* Content */}
      <div className="relative p-4">
        <h3 className="font-semibold text-gray-800 line-clamp-2">
          {product.name}
        </h3>

        <p className="mt-2 text-lg font-extrabold text-gray-900">
          KSh {product.price.toLocaleString()}
        </p>

        <button
          onClick={handleAdd}
          className={`mt-4 w-full py-2 rounded-xl font-semibold transition
            ${
              added
                ? "bg-pink-500 text-white"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }
          `}
        >
          {added ? "Added ✓" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
