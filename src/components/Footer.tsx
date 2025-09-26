import { Factory, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-lime-light rounded-full p-2">
                <Factory className="h-6 w-6 text-lime-light-foreground" />
              </div>
              <h3 className="text-xl font-semibold">CO2 Lime Industries</h3>
            </div>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Leading industrial lime manufacturer specializing in CO2 capture solutions and chemical processing. 
              Serving industrial clients worldwide since 1985.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#home" className="hover:text-lime-light transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-lime-light transition-colors">Products</a></li>
              <li><a href="#about" className="hover:text-lime-light transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-lime-light transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-LIME</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>sales@co2lime.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>2500 Industrial Pkwy, Limestone City</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 CO2 Lime Industries. All rights reserved. Built for industrial excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;