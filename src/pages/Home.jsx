import { useState } from "react";
import products from "../data";
import ProductCard from "../components/ProductCard";
import ProductDetails from "./ProductDetails";

export default function Home({ addToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (selectedProduct) {
    return (
      <ProductDetails
        product={selectedProduct}
        goBack={() => setSelectedProduct(null)}
        addToCart={addToCart}
      />
    );
  }

  return (
    <main className="bg-gradient-to-b from-indigo-50 to-indigo-100 min-h-screen pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Discover Amazing Products
          </h1>
          <p className="text-gray-700 mb-6">
            Shop the best items with great deals and fast delivery.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 500, behavior: "smooth" })}
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
          >
            Shop Now
          </button>
        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=600&q=60"
            alt="Shop Hero"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} onClick={() => setSelectedProduct(product)}>
              <ProductCard product={product} addToCart={addToCart} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
