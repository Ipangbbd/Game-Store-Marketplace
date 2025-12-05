import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Index = () => {
  const heroProduct = products[2]; // Galaxy Sword as hero
  const sideProducts = [products[0], products[4]];

  return (
    <main className="min-h-screen pt-24 pb-0">
      {/* Hero Section - Exactly like reference */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-auto lg:h-[500px]">
          {/* Large Hero Product */}
          <Link
            to={`/product/${heroProduct.id}`}
            className="lg:col-span-2 relative rounded-xl overflow-hidden bg-card h-[400px] lg:h-full block transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <img
              src={heroProduct.image}
              alt={heroProduct.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <span className="text-sm font-medium text-foreground bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full">
                {heroProduct.name}
              </span>
              <span className="price-tag">${heroProduct.price.toFixed(2)} USD</span>
            </div>
          </Link>

          {/* Side Products */}
          <div className="flex flex-col gap-4 h-[550px] lg:h-550px">
            {sideProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="relative flex-1 rounded-xl overflow-hidden bg-card border border-border block transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="text-xs font-medium text-foreground bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    {product.name}
                  </span>
                  <span className="price-tag text-xs">${product.price.toFixed(2)} USD</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Scrolling Products - Marquee Style */}
      <section className="mt-16 overflow-hidden">
        <div className="marquee-container px-8 pb-4">
          <div className="marquee-content">
            {/* First set of products */}
            {products.map((product) => (
              <ProductCard
                key={`first-${product.id}`}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                className="flex-shrink-0 w-[280px] md:w-[320px]"
              />
            ))}
            {/* Duplicate set for seamless loop */}
            {products.map((product) => (
              <ProductCard
                key={`second-${product.id}`}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                className="flex-shrink-0 w-[280px] md:w-[320px]"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
