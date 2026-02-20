import { ArrowUp, Github, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-3">
            <p className="font-heading font-bold text-foreground text-xl">
              GMC<span className="text-muted-foreground">.</span>
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Beginner developer yang bersemangat membangun pengalaman web yang menarik dan fungsional.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-foreground text-sm uppercase tracking-wider">Navigasi</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Skills", to: "/skills" },
                { label: "Projects", to: "/projects" },
              ].map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-foreground text-sm uppercase tracking-wider">Kontak</h4>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <Mail size={14} /> guardianmarx@gmail.com
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <Github size={14} /> github.com/PainMods
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Guardian Marx Christocent. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
