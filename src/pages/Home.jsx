import products from "../data";
import ProductCard from "../components/ProductCard";

export default function Home({ addToCart }) {
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
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </section>

    </main>
  );
}
