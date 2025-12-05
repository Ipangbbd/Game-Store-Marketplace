import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { cn } from "@/lib/utils";

const sortOptions = [
  { label: "Relevance", value: "relevance" },
  { label: "Trending", value: "trending" },
  { label: "Latest arrivals", value: "latest" },
  { label: "Price: Low to high", value: "price-asc" },
  { label: "Price: High to low", value: "price-desc" },
];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("relevance");

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "All" || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Categories */}
          <aside className="lg:w-48 flex-shrink-0">
            <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Collections
            </h3>
            <nav className="flex flex-row lg:flex-col gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "text-sm text-left px-3 py-1 rounded-lg transition-colors",
                    selectedCategory === category
                      ? "text-primary underline underline-offset-4"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {category}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort Options - Right aligned */}
            <div className="flex justify-end mb-6">
              <div className="text-right">
                <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">
                  Sort by
                </span>
                <div className="flex flex-col items-end gap-1">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSortBy(option.value)}
                      className={cn(
                        "text-sm transition-colors",
                        sortBy === option.value
                          ? "text-foreground underline underline-offset-4"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Grid - 3 columns as in reference */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sortedProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                  />
                </div>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-20 text-muted-foreground">
                No products found in this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Catalog;
