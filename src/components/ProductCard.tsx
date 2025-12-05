import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  className?: string;
}

const ProductCard = ({ id, name, price, image, className = "" }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className={`product-card block ${className}`}>
      <div className="aspect-square w-full overflow-hidden bg-card">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="product-label">
        <span className="text-sm font-medium text-foreground bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
          {name}
        </span>
        <span className="price-tag">${price.toFixed(2)} USD</span>
      </div>
    </Link>
  );
};

export default ProductCard;
