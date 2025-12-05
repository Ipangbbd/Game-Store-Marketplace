import { useState } from "react";
import { Trash2, CreditCard, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

interface CartItem {
  product: typeof products[0];
  quantity: number;
  size: string;
}

const Cart = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [paymentStep, setPaymentStep] = useState(0);

  // Mock cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: products[0], quantity: 1, size: "M" },
    { product: products[2], quantity: 2, size: "L" },
  ]);

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const removeItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCheckout = () => {
    setShowPayment(true);
    // Simulate payment steps
    setTimeout(() => setPaymentStep(1), 1000);
    setTimeout(() => setPaymentStep(2), 2500);
    setTimeout(() => setPaymentStep(3), 4000);
  };

  if (showPayment) {
    return (
      <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 flex items-center justify-center">
        <div className="max-w-md w-full">
          {/* Mock Payment Screen */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="text-center mb-8">
              <CreditCard className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="font-display text-2xl font-bold text-foreground">
                Processing Payment
              </h2>
              <p className="text-muted-foreground text-sm mt-2">
                Demo payment - not functional
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    paymentStep >= 1 ? "bg-primary" : "bg-secondary"
                  }`}
                >
                  {paymentStep >= 1 ? (
                    <Check className="w-4 h-4 text-primary-foreground" />
                  ) : (
                    <span className="text-xs text-muted-foreground">1</span>
                  )}
                </div>
                <span
                  className={
                    paymentStep >= 1 ? "text-foreground" : "text-muted-foreground"
                  }
                >
                  Verifying details...
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    paymentStep >= 2 ? "bg-primary" : "bg-secondary"
                  }`}
                >
                  {paymentStep >= 2 ? (
                    <Check className="w-4 h-4 text-primary-foreground" />
                  ) : (
                    <span className="text-xs text-muted-foreground">2</span>
                  )}
                </div>
                <span
                  className={
                    paymentStep >= 2 ? "text-foreground" : "text-muted-foreground"
                  }
                >
                  Processing payment...
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    paymentStep >= 3 ? "bg-success" : "bg-secondary"
                  }`}
                >
                  {paymentStep >= 3 ? (
                    <Check className="w-4 h-4 text-success-foreground" />
                  ) : (
                    <span className="text-xs text-muted-foreground">3</span>
                  )}
                </div>
                <span
                  className={
                    paymentStep >= 3 ? "text-success" : "text-muted-foreground"
                  }
                >
                  Payment complete!
                </span>
              </div>
            </div>

            {paymentStep >= 3 && (
              <div className="mt-8 text-center">
                <p className="text-muted-foreground text-sm mb-4">
                  This is a visual demo only.
                </p>
                <Link
                  to="/"
                  className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-4xl font-bold text-foreground mb-8">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground mb-4">Your cart is empty</p>
            <Link
              to="/catalog"
              className="text-primary underline underline-offset-4 hover:text-primary/90"
            >
              Browse products
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-8">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 bg-card rounded-xl p-4 border border-border"
                >
                  <div className="w-24 h-24 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Size: {item.size} • Qty: {item.quantity}
                    </p>
                    <p className="text-primary font-medium mt-2">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(index)}
                    className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex justify-between items-center mb-6">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground font-medium">
                  ${total.toFixed(2)} USD
                </span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Proceed to Checkout
              </button>
              <p className="text-center text-xs text-muted-foreground mt-4">
                This is a demo - no real payment will be processed
              </p>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Cart;
