import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-[var(--gradient-health)] bg-clip-text text-transparent mb-4">
              JGEO
            </h3>
            <p className="text-muted-foreground text-sm">
              გაძლიერება ჯანმრთელობის, ენერგიის და ფინანსური თავისუფლების
              მიღწევაში
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">სწრაფი ლინკები</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  მთავარი
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  პროდუქტები
                </Link>
              </li>
              <li>
                <Link
                  to="/affiliate"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  აფილიაცია
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  კონტაქტი
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">პროდუქტები</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products/gen3"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Gen3™ კოლაგენი
                </Link>
              </li>
              <li>
                <Link
                  to="/products/liv"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  LIV™ სუპერხილი
                </Link>
              </li>
              <li>
                <Link
                  to="/products/glo"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  GLO™ კანის მოვლა
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">კონტაქტი</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                info@JGEO.ge
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary" />
                +995 555 123 456
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="p-2 bg-accent hover:bg-primary hover:text-primary-foreground rounded-full transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-accent hover:bg-primary hover:text-primary-foreground rounded-full transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-accent hover:bg-primary hover:text-primary-foreground rounded-full transition-all"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 JGEO. ყველა უფლება დაცულია.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
