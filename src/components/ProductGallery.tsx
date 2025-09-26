import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";
import { useState } from "react";
import quicklimeImage from "@/assets/quicklime.jpg";
import slakedLimeImage from "@/assets/slaked-lime.jpg";
import limestoneImage from "@/assets/limestone.jpg";
import pccLimeImage from "@/assets/pcc-lime.jpg";

const products = [
  {
    id: "1",
    name: "Quicklime (CaO)",
    description: "High-purity calcium oxide for CO2 capture, steel production, and chemical processing. 95% minimum CaO content.",
    price: 145.00,
    weight: "1 metric ton",
    image: quicklimeImage,
    category: "Industrial Lime"
  },
  {
    id: "2", 
    name: "Slaked Lime (Ca(OH)2)",
    description: "Premium hydrated lime for flue gas treatment, water treatment, and chemical manufacturing. Food grade available.",
    price: 165.00,
    weight: "1 metric ton",
    image: slakedLimeImage,
    category: "Hydrated Lime"
  },
  {
    id: "3",
    name: "Limestone (CaCO3)",
    description: "High-grade limestone aggregate and powder for cement, glass, and chemical industries. Various mesh sizes available.",
    price: 85.00,
    weight: "1 metric ton",
    image: limestoneImage,
    category: "Raw Materials"
  },
  {
    id: "4",
    name: "PCC Lime",
    description: "Precipitated calcium carbonate for paper, plastics, and paint industries. Ultra-fine particle size distribution.",
    price: 285.00,
    weight: "1 metric ton",
    image: pccLimeImage, 
    category: "Specialty Products"
  }
];

const ProductGallery = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <section id="products" className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mobile-heading text-primary mb-4 sm:mb-6">
              Industrial Lime Products
            </h2>
            <p className="mobile-body text-muted-foreground max-w-2xl mx-auto px-4">
              Complete range of industrial lime products for CO2 capture, steel production, and chemical processing. 
              Consistent quality, reliable supply, and technical support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                {...product} 
                onClick={() => handleProductClick(product)}
              />
            ))}
          </div>
          
          <div className="text-center mt-12 sm:mt-16 px-4">
            <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
              Looking for bulk orders or custom products?
            </p>
            <a 
              href="#contact" 
              className="inline-block text-primary hover:text-secondary font-semibold underline decoration-lime-light touch-target py-2"
            >
              Contact us for wholesale pricing
            </a>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default ProductGallery;