import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

const CapsuleNavbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="capsule-nav">
      {/* Green dot indicator */}
      <div className="w-3 h-3 rounded-full bg-success ml-2 animate-pulse" />
      
      <Link
        to="/"
        className={cn("nav-link", isActive("/") && "nav-link-active")}
      >
        Home
      </Link>
      <Link
        to="/catalog"
        className={cn("nav-link", isActive("/catalog") && "nav-link-active")}
      >
        Catalogs
      </Link>
      <Link
        to="/contact"
        className={cn("nav-link", isActive("/contact") && "nav-link-active")}
      >
        Contacts
      </Link>
      
      <Link
        to="/cart"
        className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
      >
        <ShoppingCart className="w-4 h-4" />
        Cart
      </Link>
    </nav>
  );
};

export default CapsuleNavbar;
