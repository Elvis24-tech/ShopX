export default function Cart({ cart, removeFromCart, goCheckout }) {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
  
    if (!cart.length) {
      return (
        <main className="max-w-6xl mx-auto px-6 py-10">
          <p className="text-gray-500">Your cart is empty.</p>
        </main>
      );
    }
  
    return (
      <main className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-extrabold mb-8 text-gray-900">Your Cart</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-4 flex gap-4">
                <img src={item.image} alt={item.name} className="h-24 w-24 object-cover rounded-lg"/>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-900 font-bold mt-1">KSh {item.price.toLocaleString()}</p>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-sm text-pink-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
  
          <div className="bg-white rounded-xl shadow-md p-6 h-fit">
            <h3 className="text-lg font-bold mb-4">Order Summary</h3>
            <div className="flex justify-between text-gray-700 mb-4">
              <span>Total</span>
              <span className="font-bold text-gray-900">KSh {total.toLocaleString()}</span>
            </div>
            <button
              onClick={goCheckout}
              className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </main>
    );
  }
  