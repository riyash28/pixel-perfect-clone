import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Package, Search, ShoppingCart, User } from "lucide-react";
import praanrootLogo from "@/assets/praanroot-logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Consult", to: "/consult" },
  { label: "About Us", to: "/about" },
  { label: "Blog", to: "/blog" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="text-primary">
              <path d="M16 2C10 2 6 8 6 14c0 4 2 8 6 10v4h8v-4c4-2 6-6 6-10C26 8 22 2 16 2z" fill="currentColor" opacity="0.2"/>
              <path d="M16 4c2 0 4 6 4 12s-2 12-4 12-4-6-4-12S14 4 16 4z" fill="currentColor"/>
              <line x1="16" y1="4" x2="16" y2="28" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M12 10c-2 1-4 3-4 6" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <path d="M20 10c2 1 4 3 4 6" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            </svg>
            <span className="font-display text-xl font-bold tracking-tight text-primary">
              PRAANROOT
            </span>
          </div>
          <span className="hidden text-[10px] font-body tracking-widest text-muted-foreground sm:block">
            SCIENCES
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative font-body text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to
                  ? "text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-primary"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link
            to="/track-order"
            className="hidden items-center gap-2 rounded-full border border-primary bg-primary px-5 py-2 font-body text-sm font-semibold text-primary-foreground transition-all hover:bg-zh-green-light sm:flex"
          >
            <Package size={16} />
            Track your order
          </Link>

          <button className="p-2 text-foreground transition-colors hover:text-primary" aria-label="Search">
            <Search size={20} />
          </button>
          <button className="p-2 text-foreground transition-colors hover:text-primary" aria-label="Account">
            <User size={20} />
          </button>
          <button className="relative p-2 text-foreground transition-colors hover:text-primary" aria-label="Cart">
            <ShoppingCart size={20} />
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
              0
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            className="p-2 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t bg-card px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`font-body text-base font-medium transition-colors ${
                  location.pathname === link.to ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/track-order"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-body text-sm font-semibold text-primary-foreground"
            >
              <Package size={16} />
              Track your order
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
