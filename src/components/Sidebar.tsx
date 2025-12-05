import { User, Settings, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-6 p-3 bg-sidebar/50 backdrop-blur-sm border-r border-sidebar-border rounded-r-xl">
      <Link
        to="/profile"
        className="p-2 text-sidebar-foreground hover:text-foreground hover:bg-sidebar-accent rounded-lg transition-all"
        title="Profile"
      >
        <User className="w-5 h-5" />
      </Link>
      <Link
        to="/settings"
        className="p-2 text-sidebar-foreground hover:text-foreground hover:bg-sidebar-accent rounded-lg transition-all"
        title="Settings"
      >
        <Settings className="w-5 h-5" />
      </Link>
      <Link
        to="/social"
        className="p-2 text-sidebar-foreground hover:text-foreground hover:bg-sidebar-accent rounded-lg transition-all"
        title="Social Media"
      >
        <Share2 className="w-5 h-5" />
      </Link>
    </aside>
  );
};

export default Sidebar;
