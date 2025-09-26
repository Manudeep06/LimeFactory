import { Factory, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className="bg-background shadow-professional border-b border-gray-200/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="bg-primary rounded-professional p-2 sm:p-3 shadow-sm">
              <Factory className="h-5 w-5 sm:h-7 sm:w-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">CO2 Lime Industries</h1>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium hidden sm:block">Industrial • Reliable • Sustainable</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 lg:space-x-10">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-body font-medium text-foreground hover:text-primary transition-colors duration-200 touch-target"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors touch-target"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="px-4 py-3 text-body font-medium text-foreground hover:text-primary hover:bg-gray-50 rounded-lg transition-colors touch-target"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;