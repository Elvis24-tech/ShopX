export default function Checkout({ cart }) {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
  
    return (
      <main className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Checkout
        </h2>
  
        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="07XXXXXXXX"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-300 outline-none"
            />
          </div>
  
          <div className="flex justify-between font-semibold text-gray-900">
            <span>Total Amount</span>
            <span>KSh {total.toLocaleString()}</span>
          </div>
  
          <button className="w-full py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition">
            Pay with M-Pesa
          </button>
  
          <p className="text-sm text-gray-500 text-center">
            You will receive an M-Pesa prompt on your phone
          </p>
        </div>
      </main>
    );
  }
  