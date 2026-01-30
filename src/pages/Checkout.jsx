export default function Checkout({ cart }) {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
  
    return (
      <main className="min-h-screen bg-linear-to-b from-indigo-50 via-purple-50 to-pink-50 px-6 py-12">
        
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Checkout
        </h2>
  
        <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-10 space-y-8 relative overflow-hidden">
  
          {/* Glow overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-white/30 to-transparent pointer-events-none rounded-3xl" />
  
          {/* Phone Number Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="07XXXXXXXX"
              className="w-full px-5 py-3 border border-white/50 rounded-2xl focus:ring-2 focus:ring-pink-300 outline-none bg-white/50 backdrop-blur-sm shadow-sm text-gray-800 placeholder-gray-400 transition"
            />
          </div>
  
          {/* Total */}
          <div className="flex justify-between items-center text-xl font-extrabold text-gray-900">
            <span>Total Amount</span>
            <span>KSh {total.toLocaleString()}</span>
          </div>
  
          {/* Pay Button */}
          <button className="
            w-full py-4 rounded-2xl font-bold text-white
            bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500
            shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300
          ">
            Pay with M-Pesa
          </button>
  
          {/* Info text */}
          <p className="text-sm text-gray-600 text-center mt-2">
            You will receive an M-Pesa prompt on your phone
          </p>
        </div>
      </main>
    );
  }
  