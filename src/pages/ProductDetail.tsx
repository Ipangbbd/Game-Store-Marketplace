import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("M");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <p className="text-muted-foreground">Product not found</p>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== id && p.category === product.category)
    .slice(0, 5);

  const handleAddToCart = () => {
    addToCart(product.id, selectedSize);
    toast({
      title: "Added to cart",
      description: `${product.name} (Size: ${selectedSize}) has been added to your cart.`,
    });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <main className="min-h-screen pt-24 pb-12">
      {/* Main Product Section */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left - Product Image */}
          <div className="relative bg-card rounded-xl overflow-hidden aspect-square">
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
            />

            {/* Navigation arrows */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              <button
                onClick={prevImage}
                className="p-2 rounded-full bg-secondary/80 backdrop-blur-sm text-foreground hover:bg-secondary transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextImage}
                className="p-2 rounded-full bg-secondary/80 backdrop-blur-sm text-foreground hover:bg-secondary transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Thumbnail previews */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={cn(
                    "w-16 h-16 rounded-lg overflow-hidden border-2 transition-all",
                    currentImageIndex === idx
                      ? "border-primary"
                      : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="flex flex-col justify-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              {product.name}
            </h1>

            <span className="inline-block price-tag w-fit mb-8">
              ${product.price.toFixed(2)} USD
            </span>

            <div className="border-t border-border pt-6">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                SIZE
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "px-4 py-2 rounded-lg border text-sm font-medium transition-all",
                      selectedSize === size
                        ? "border-foreground bg-foreground text-background"
                        : "border-border text-foreground hover:border-foreground"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <p className="text-muted-foreground text-sm mb-8">
                {product.description}
              </p>

              <button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center gap-3 bg-primary text-primary-foreground py-4 rounded-lg font-medium transition-all hover:bg-primary/90"
              >
                <Plus className="w-5 h-5" />
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-20 px-4 md:px-8 max-w-7xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">
            Related Products
          </h2>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                id={relatedProduct.id}
                name={relatedProduct.name}
                price={relatedProduct.price}
                image={relatedProduct.image}
                className="flex-shrink-0 w-[220px]"
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductDetail;
