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
    <main className="relative bg-linear-to-b from-indigo-50 via-purple-50 to-pink-50 min-h-screen overflow-hidden pb-24">

      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl" />
      <div className="absolute top-40 -right-32 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl" />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-12 grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold">
              ✨ New Collection
            </span>

            <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
              Discover <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-pink-500">
                Amazing
              </span> Products
            </h1>

            <p className="text-gray-700 text-lg mb-8 max-w-md">
              Premium gadgets, fashion & lifestyle products curated just for you.
            </p>

            <button
              onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
              className="px-8 py-4 rounded-2xl font-bold text-white
              bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500
              shadow-xl hover:shadow-2xl hover:scale-[1.05] transition-all"
            >
              Shop Now 🚀
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-indigo-300/30 to-pink-300/30 blur-2xl rounded-3xl" />
            <img
              src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=900&q=60"
              alt="Shop Hero"
              className="relative rounded-3xl shadow-2xl hover:scale-[1.03] transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-linear-to-r from-transparent via-gray-300 to-transparent mb-16" />
      </div>

      {/* Products Section */}
      <section className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Featured Products
            </h2>
            <p className="text-gray-600 mt-2">
              Hand-picked best sellers you’ll love
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="cursor-pointer group"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-linear-to-r from-indigo-400 to-pink-400 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
                <div className="relative">
                  <ProductCard product={product} addToCart={addToCart} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
