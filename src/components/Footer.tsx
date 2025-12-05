const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-border py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold leading-none tracking-tighter text-foreground/90">
          ROBLOX
        </h2>
        <h3 className="font-display text-[8vw] md:text-[6vw] lg:text-[5vw] font-bold leading-none tracking-tighter text-primary mt-2">
          MARKETPLACE
        </h3>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-12 pt-8 border-t border-border">
          <div className="flex flex-col gap-2 text-muted-foreground text-sm">
            <p>© 2024 Roblox Marketplace. All rights reserved.</p>
            <p>Premium Virtual Items & Accessories</p>
          </div>

          <div className="flex gap-6 mt-6 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
