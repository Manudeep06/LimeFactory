import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-factory.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative gradient-subtle py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="mobile-heading text-primary mb-6 sm:mb-8">
              Industrial
              <span className="text-secondary"> Lime Solutions</span>
              <br />
              <span className="text-lime-light">CO2 Capture Ready</span>
            </h1>
            <p className="mobile-body text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0">
              Leading manufacturer of high-quality industrial lime products for CO2 capture, steel production, 
              and chemical processing. Reliable supply, consistent quality, sustainable operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <Button asChild size="lg" className="mobile-button mobile-button-primary touch-target">
                <a href="#products">
                  Shop Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="mobile-button mobile-button-secondary touch-target border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="#contact">
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden mobile-shadow-lg">
              <img 
                src={heroImage} 
                alt="CO2 lime factory industrial facility" 
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 bg-price text-price-foreground px-4 py-2 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-semibold mobile-shadow text-sm sm:text-base">
              ISO Certified
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;