import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { products } from "@/data/products";

export interface CartItem {
    product: typeof products[0];
    quantity: number;
    size: string;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (productId: string, size: string, quantity?: number) => void;
    removeFromCart: (index: number) => void;
    clearCart: () => void;
    total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        // Load cart from localStorage on init
        const saved = localStorage.getItem("roblox-cart");
        return saved ? JSON.parse(saved) : [];
    });

    // Save to localStorage whenever cart changes
    useEffect(() => {
        localStorage.setItem("roblox-cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (productId: string, size: string, quantity: number = 1) => {
        const product = products.find((p) => p.id === productId);
        if (!product) return;

        setCartItems((prev) => {
            // Check if item with same product and size already exists
            const existingIndex = prev.findIndex(
                (item) => item.product.id === productId && item.size === size
            );

            if (existingIndex >= 0) {
                // Update quantity of existing item
                const updated = [...prev];
                updated[existingIndex].quantity += quantity;
                return updated;
            } else {
                // Add new item
                return [...prev, { product, quantity, size }];
            }
        });
    };

    const removeFromCart = (index: number) => {
        setCartItems((prev) => prev.filter((_, i) => i !== index));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const total = cartItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, clearCart, total }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within CartProvider");
    }
    return context;
};
