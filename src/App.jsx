import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";

export default function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home"); // "home", "cart", "checkout"

  // Add item to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Remove item from cart by index
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  // Navigation functions
  const goHome = () => setPage("home");
  const goCart = () => setPage("cart");
  const goCheckout = () => setPage("checkout");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar with navigation */}
      <Navbar cartCount={cart.length} goHome={goHome} goCart={goCart} />

      {/* Pages */}
      {page === "home" && <Home addToCart={addToCart} />}
      {page === "cart" && (
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          goCheckout={goCheckout} // pass checkout navigation
        />
      )}
      {page === "checkout" && <Checkout cart={cart} />}

      <Footer />
    </div>
  );
}
