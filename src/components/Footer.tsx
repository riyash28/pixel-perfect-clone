import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold">ZEROHARM</h3>
            <p className="mt-3 font-body text-sm text-card/70 leading-relaxed">
              Safeguarding humanity from harm through advanced nanotechnology and plant-based science.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
            <nav className="mt-4 flex flex-col gap-2">
              {["Home", "Shop", "About Us", "Blog", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                  className="font-body text-sm text-card/70 transition-colors hover:text-card"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider">Categories</h4>
            <nav className="mt-4 flex flex-col gap-2">
              {["Women's Health", "Weight Management", "Digestive Health", "Sexual Health", "Lung Health"].map((cat) => (
                <Link
                  key={cat}
                  to={`/category/${cat.toLowerCase().replace(/['\s]/g, "-").replace("--", "-")}`}
                  className="font-body text-sm text-card/70 transition-colors hover:text-card"
                >
                  {cat}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider">Contact Us</h4>
            <div className="mt-4 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-card/50" />
                <span className="font-body text-sm text-card/70">+91 73828 38383</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-card/50" />
                <span className="font-body text-sm text-card/70">support@zeroharm.in</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-card/50" />
                <span className="font-body text-sm text-card/70">Hyderabad, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-card/10 pt-6 text-center">
          <p className="font-body text-xs text-card/50">
            © {new Date().getFullYear()} ZeroHarm Sciences. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
