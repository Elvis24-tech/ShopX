import { useState } from "react";

export default function ProductCard({ product, addToCart }) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);

    // reset button after 1.5s
    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition group">
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover group-hover:scale-105 transition"
        />
      </div>

      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-700 line-clamp-2">
          {product.name}
        </h3>

        <p className="mt-2 text-lg font-bold text-gray-900">
          KSh {product.price.toLocaleString()}
        </p>

        <button
          onClick={handleAddToCart}
          disabled={added}
          className={`mt-4 w-full py-2 rounded-lg text-sm font-semibold transition
            ${
              added
                ? "bg-green-500 text-white cursor-default"
                : "bg-gray-900 text-white hover:bg-gray-800"
            }`}
        >
          {added ? "Added ✓" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
