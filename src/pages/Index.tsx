import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Index = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const heroProduct = products[2]; // Galaxy Sword as hero
  const sideProducts = [products[0], products[4]];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-0">
      {/* Hero Section - Exactly like reference */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-auto lg:h-[500px]">
          {/* Large Hero Product */}
          <div className="lg:col-span-2 relative rounded-xl overflow-hidden bg-card h-[400px] lg:h-full">
            <img
              src={heroProduct.image}
              alt={heroProduct.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <span className="text-sm font-medium text-foreground bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full">
                {heroProduct.name}
              </span>
              <span className="price-tag">${heroProduct.price.toFixed(2)} USD</span>
            </div>
          </div>

          {/* Side Products */}
          <div className="flex flex-col gap-4 h-[400px] lg:h-full">
            {sideProducts.map((product) => (
              <div
                key={product.id}
                className="relative flex-1 rounded-xl overflow-hidden bg-card border border-border"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="text-xs font-medium text-foreground bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    {product.name}
                  </span>
                  <span className="price-tag text-xs">${product.price.toFixed(2)} USD</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Scrolling Products - Marquee Style */}
      <section className="mt-16 relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-secondary/80 backdrop-blur-sm text-foreground hover:bg-secondary transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-secondary/80 backdrop-blur-sm text-foreground hover:bg-secondary transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-8 pb-4"
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              className="flex-shrink-0 w-[280px] md:w-[320px]"
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-4 gap-1">
          <div className="h-1 w-32 bg-primary/30 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-primary rounded-full" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
