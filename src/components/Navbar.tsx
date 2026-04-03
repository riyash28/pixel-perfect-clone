import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Package, Search, ShoppingCart, User } from "lucide-react";
import praanrootLogo from "@/assets/praanroot-logo.png";
import SearchOverlay from "./SearchOverlay";
import LoginModal from "./LoginModal";
import CartDrawer from "./CartDrawer";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Consult", to: "/consult" },
  { label: "About Us", to: "/about" },
  { label: "Blog", to: "/blog" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="sticky top-0 z-50 bg-card shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={praanrootLogo} alt="Praanroot Logo" className="h-14 w-auto object-contain" />
            <div className="flex items-baseline gap-1">
              <span className="font-display text-2xl font-bold tracking-tight text-primary">
                PRAANROOT
              </span>
              <span className="hidden text-[11px] font-body tracking-widest text-muted-foreground sm:block">
                SCIENCES
              </span>
            </div>
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
              className="hidden items-center gap-2 rounded-full border border-primary bg-primary px-5 py-2 font-body text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 sm:flex"
            >
              <Package size={16} />
              Track your order
            </Link>

            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-foreground transition-colors hover:text-primary"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => setLoginOpen(true)}
              className="p-2 text-foreground transition-colors hover:text-primary"
              aria-label="Account"
            >
              <User size={20} />
            </button>
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 text-foreground transition-colors hover:text-primary"
              aria-label="Cart"
            >
              <ShoppingCart size={20} />
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                2
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

      {/* Overlays */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Navbar;
