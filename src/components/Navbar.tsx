import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Package, Search, ShoppingCart, User, ChevronDown } from "lucide-react";
import praanrootLogo from "@/assets/praanroot-logo.png";
import SearchOverlay from "./SearchOverlay";
import LoginModal from "./LoginModal";
import CartDrawer from "./CartDrawer";
import { useCart } from "@/contexts/CartContext";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop", hasDropdown: true },
  { label: "Consult", to: "/consult" },
  { label: "About Us", to: "/about" },
  { label: "Blog", to: "/blog" },
];

const shopCategories = [
  { label: "Men's Health", slug: "mens-health" },
  { label: "Women's Health", slug: "womens-health" },
  { label: "Weight Management", slug: "weight-management" },
  { label: "Digestive Health", slug: "digestive-health" },
  { label: "Sexual Health", slug: "sexual-health" },
  { label: "Lung Health", slug: "lung-health" },
  { label: "Diabetic Care", slug: "diabetic-care" },
  { label: "Skin Care", slug: "skin-care" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const { totalItems, setCartOpen } = useCart();
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="sticky top-0 z-50 bg-card shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={praanrootLogo} alt="Praanroot Logo" className="h-14 w-auto object-contain" />
            <span className="font-display text-2xl font-bold tracking-tight text-primary -ml-1">
              PRAANROOT
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setShopOpen(true)}
                  onMouseLeave={() => setShopOpen(false)}
                >
                  <Link
                    to={link.to}
                    className={`relative flex items-center gap-1 font-body text-sm font-medium transition-colors hover:text-primary ${
                      location.pathname === link.to || location.pathname.startsWith("/category")
                        ? "text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-primary"
                        : "text-foreground"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${shopOpen ? "rotate-180" : ""}`}
                    />
                  </Link>

                  {/* Dropdown */}
                  <div
                    className={`absolute left-1/2 top-full z-50 mt-3 w-56 -translate-x-1/2 rounded-xl border border-border bg-card p-3 shadow-lg transition-all duration-200 ${
                      shopOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0"
                    }`}
                  >
                    {/* Arrow */}
                    <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-border bg-card" />
                    <div className="relative flex flex-col">
                      {shopCategories.map((cat) => (
                        <Link
                          key={cat.slug}
                          to={`/category/${cat.slug}`}
                          onClick={() => setShopOpen(false)}
                          className="rounded-lg px-3 py-2.5 font-body text-sm text-foreground transition-colors hover:bg-secondary hover:text-primary"
                        >
                          {cat.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
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
              )
            )}
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
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.to}>
                    <button
                      onClick={() => setMobileShopOpen(!mobileShopOpen)}
                      className={`flex w-full items-center justify-between font-body text-base font-medium transition-colors ${
                        location.pathname === link.to ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${mobileShopOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileShopOpen && (
                      <div className="mt-2 flex flex-col gap-1 pl-4">
                        {shopCategories.map((cat) => (
                          <Link
                            key={cat.slug}
                            to={`/category/${cat.slug}`}
                            onClick={() => { setMobileOpen(false); setMobileShopOpen(false); }}
                            className="rounded-lg px-3 py-2 font-body text-sm text-muted-foreground transition-colors hover:text-primary"
                          >
                            {cat.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
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
                )
              )}
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
