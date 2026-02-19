import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-heading font-bold text-foreground text-lg">
              GMC<span className="text-muted-foreground">.</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              © {new Date().getFullYear()} Guardian Marx Christocent. All rights reserved.
            </p>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
