export default function ProductDetails({ product, goBack, addToCart }) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-10 bg-gray-50">
        
        {/* Back button */}
        <button
          onClick={goBack}
          className="text-gray-700 hover:text-gray-900 mb-6"
        >
          ← Back to Products
        </button>
  
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-8">
          
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-1/2 h-auto object-cover rounded-xl"
          />
  
          {/* Product Info */}
          <div className="flex-1 flex flex-col justify-between">
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
              <p className="mt-2 text-gray-700">{product.description}</p>
              <p className="mt-4 text-2xl font-extrabold text-gray-900">
                KSh {product.price.toLocaleString()}
              </p>
            </div>
  
            <button
              onClick={() => addToCart(product)}
              className="mt-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    );
  }
  