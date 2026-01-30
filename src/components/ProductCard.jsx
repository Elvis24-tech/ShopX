export default function ProductCard({ product, addToCart }) {
    return (
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 group">
        
        <div className="overflow-hidden rounded-t-2xl">
          <img
            src={product.image}
            alt={product.name}
            className="h-48 w-full object-cover group-hover:scale-105 transition duration-300"
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
            onClick={() => addToCart(product)}
            className="mt-4 w-full py-2 rounded-lg bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
        </div>
  
      </div>
    );
  }
  