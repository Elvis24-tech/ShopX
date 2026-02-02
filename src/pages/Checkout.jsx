import { useState } from "react";

export default function Checkout({ cart }) {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = async () => {
    if (loading) return;

    if (!phone) {
      setError("Please enter your phone number");
      return;
    }

    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:8000/mpesa/stkpush/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone_number: phone,
          amount: total,
        }),
      });

      const data = await response.json();
      console.log("MPESA RESPONSE:", data);

      if (data.ResponseCode === "0") {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      } else {
        setError(data.error || "Payment failed");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-linear-to-b from-indigo-50 via-purple-50 to-pink-50 px-6 py-12">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        Checkout
      </h2>

      <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-10 space-y-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-white/30 to-transparent pointer-events-none rounded-3xl" />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="text"
            placeholder="2547XXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-5 py-3 border border-white/50 rounded-2xl focus:ring-2 focus:ring-pink-300 outline-none bg-white/50 backdrop-blur-sm shadow-sm text-gray-800 placeholder-gray-400 transition"
          />
        </div>

        <div className="flex justify-between items-center text-xl font-extrabold text-gray-900">
          <span>Total Amount</span>
          <span>KSh {total.toLocaleString()}</span>
        </div>

        <button
          onClick={handlePayment}
          disabled={loading}
          className={`
            w-full py-4 rounded-2xl font-bold text-white
            bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500
            shadow-lg hover:shadow-xl transition-all duration-300
            flex justify-center items-center gap-3
            ${loading ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.02]"}
          `}
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
              Processing...
            </>
          ) : (
            "Pay with M-Pesa"
          )}
        </button>

        <p className="text-sm text-gray-600 text-center">
          You will receive an M-Pesa prompt on your phone
        </p>

        {error && (
          <p className="text-red-500 text-center font-medium">{error}</p>
        )}

        {success && (
          <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-2xl shadow-lg">
            Payment Request Sent Successfully 🎉
          </div>
        )}
      </div>
    </main>
  );
}
