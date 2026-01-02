import { Menu, X, Mail, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-4 md:px-6">
      {/* Name - Left Corner with Signature Style */}
      <div className="flex items-center gap-2">
        <span className="text-3xl md:text-4xl signature-name">
          <span className="text-blue-600 dark:text-blue-500">Giri</span> <span className="text-black dark:text-white">Naik</span>
        </span>
      </div>

      {/* Navigation Links - Center (Desktop) */}
      <nav className="hidden md:flex items-center gap-6 bg-background rounded-full px-6 py-3 shadow-lg border border-border">
        <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
          Projects
        </a>
        <a href="#open-source" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
          Open Source
        </a>
        <a href="#blogs" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
          Blogs
        </a>
        <a href="#certifications" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
          Certifications
        </a>
      </nav>

      {/* Right Section - Email Button */}
      <div className="flex items-center gap-2">
        {/* Email Button */}
        <a
          href="mailto:yourgirinaik@gmail.com"
          className="hidden md:flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black rounded-full px-4 py-2 hover:opacity-90 transition-opacity text-sm font-medium"
        >
          <Mail className="w-4 h-4" />
          <span>Email</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-muted-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-muted-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="absolute top-full left-4 right-4 mt-2 flex flex-col items-center gap-4 bg-background rounded-2xl px-6 py-4 shadow-lg border border-border md:hidden animate-fade-in">
          <a 
            href="#projects" 
            className="text-muted-foreground hover:text-foreground transition-colors text-sm w-full text-center py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#open-source" 
            className="text-muted-foreground hover:text-foreground transition-colors text-sm w-full text-center py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Open Source
          </a>
          <a 
            href="#blogs" 
            className="text-muted-foreground hover:text-foreground transition-colors text-sm w-full text-center py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blogs
          </a>
          <a 
            href="#certifications" 
            className="text-muted-foreground hover:text-foreground transition-colors text-sm w-full text-center py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Certifications
          </a>
          <a 
            href="mailto:yourgirinaik@gmail.com" 
            className="flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black rounded-full px-4 py-2 hover:opacity-90 transition-opacity text-sm font-medium w-full mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
