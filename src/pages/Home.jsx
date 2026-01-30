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
    <main className="max-w-7xl mx-auto px-6 py-10">
      <section className="mb-10">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Discover Products
        </h2>
        <p className="mt-2 text-gray-500">
          Quality items curated just for you
        </p>
      </section>

      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} onClick={() => setSelectedProduct(product)}>
            <ProductCard product={product} addToCart={addToCart} />
          </div>
        ))}
      </section>
    </main>
  );
}
