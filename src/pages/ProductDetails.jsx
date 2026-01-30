export default function ProductDetails({ product, goBack, addToCart }) {
    return (
      <main className="min-h-screen bg-linear-to-b from-indigo-50 via-purple-50 to-pink-50 px-6 py-12">
        
        {/* Back button */}
        <button
          onClick={goBack}
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition"
        >
          ← Back to Products
        </button>
  
        {/* Glass container */}
        <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row gap-10 relative overflow-hidden">
          
          {/* Glow overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-white/30 to-transparent pointer-events-none" />
  
          {/* Product Image */}
          <div className="w-full md:w-1/2 overflow-hidden rounded-2xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
  
          {/* Product Info */}
          <div className="relative flex-1 flex flex-col justify-between">
            
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
                {product.name}
              </h2>
  
              <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                {product.description}
              </p>
  
              <p className="mt-6 text-3xl font-black text-indigo-700">
                KSh {product.price.toLocaleString()}
              </p>
            </div>
  
            {/* Action button */}
            <button
              onClick={() => addToCart(product)}
              className="
                mt-8 w-full md:w-fit px-8 py-4 rounded-2xl
                bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600
                text-white font-bold text-lg
                shadow-lg hover:shadow-xl
                hover:scale-[1.02]
                transition-all duration-300
              "
            >
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    );
  }
  