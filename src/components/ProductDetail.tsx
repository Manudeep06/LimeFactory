import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Weight, Package, CheckCircle, X, Star, Truck, Shield, Award } from "lucide-react";

interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    weight: string;
    image: string;
    category: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetail = ({ product, isOpen, onClose }: ProductDetailProps) => {
  // Extended product details
  const productDetails = {
    specifications: [
      "95% minimum CaO content",
      "Low magnesium and silica content",
      "Consistent particle size distribution",
      "High reactivity for CO2 capture",
      "ISO 9001:2015 certified production"
    ],
    applications: [
      "CO2 capture and sequestration",
      "Steel production and refining",
      "Chemical processing",
      "Water treatment",
      "Flue gas desulfurization",
      "Soil stabilization"
    ],
    packaging: [
      "25kg bags (40 bags per ton)",
      "1 ton bulk bags (FIBC)",
      "Bulk truck delivery (20-30 tons)",
      "Rail car delivery (60-100 tons)"
    ],
    shipping: {
      standard: "5-7 business days",
      express: "2-3 business days",
      bulk: "10-14 business days"
    },
    certifications: [
      "ISO 9001:2015 Quality Management",
      "ISO 14001 Environmental Management",
      "OHSAS 18001 Safety Management",
      "FDA Food Grade (select products)"
    ]
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="product-detail-popup overflow-y-auto mobile-safe modal-mobile">
        <DialogHeader className="product-detail-header">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <DialogTitle className="product-detail-title mb-3">
                {product.name}
              </DialogTitle>
              <Badge className="product-detail-badge">
                {product.category}
              </Badge>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="product-detail-close-button"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Product Image */}
          <div className="space-y-6">
            <div className="product-detail-image-container group">
              <img
                src={product.image}
                alt={product.name}
                className="product-detail-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-white/20">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <div className="absolute bottom-4 left-4 bg-gradient-to-r from-primary/90 to-secondary/90 text-white px-4 py-2 rounded-2xl backdrop-blur-sm">
                <span className="text-sm font-semibold">High Quality</span>
              </div>
            </div>
            
            {/* Price and Weight */}
            <div className="product-detail-price-card">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Weight className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-semibold text-gray-700">{product.weight}</span>
                </div>
                <div className="product-detail-price">
                  ${product.price.toFixed(2)}
                </div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50">
                <p className="text-sm text-gray-600 font-medium">
                  💰 Price includes packaging and standard delivery within 50 miles
                </p>
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            {/* Description */}
            <div className="product-detail-info-card">
              <h3 className="product-detail-info-title">
                <div className="product-detail-info-icon">
                  📋
                </div>
                Description
              </h3>
              <p className="text-gray-700 leading-relaxed text-base">
                {product.description}
              </p>
            </div>

            {/* Specifications */}
            <div className="product-detail-info-card">
              <h3 className="product-detail-info-title">
                <div className="product-detail-info-icon">
                  <Star className="h-4 w-4" />
                </div>
                Key Specifications
              </h3>
              <ul className="space-y-3">
                {productDetails.specifications.map((spec, index) => (
                  <li key={index} className="product-detail-spec-item group">
                    <div className="product-detail-spec-icon">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="product-detail-info-card">
              <h3 className="product-detail-info-title">
                <div className="product-detail-info-icon">
                  ⚡
                </div>
                Applications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {productDetails.applications.map((app, index) => (
                  <div key={index} className="product-detail-application-card">
                    <div className="product-detail-application-icon">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mt-12 auto-rows-fr">
          {/* Packaging Options */}
          <div className="product-detail-additional-card h-full">
            <h4 className="font-bold text-primary mb-4 flex items-center">
              <div className="product-detail-additional-icon bg-gradient-to-r from-blue-500 to-blue-600">
                <Package className="h-5 w-5 text-white" />
              </div>
              Packaging
            </h4>
            <ul className="space-y-3">
              {productDetails.packaging.map((pkg, index) => (
                <li key={index} className="text-gray-700 font-medium flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                  {pkg}
                </li>
              ))}
            </ul>
          </div>

          {/* Shipping */}
          <div className="product-detail-additional-card">
            <h4 className="font-bold text-primary mb-4 flex items-center">
              <div className="product-detail-additional-icon bg-gradient-to-r from-green-500 to-green-600">
                <Truck className="h-5 w-5 text-white" />
              </div>
              Shipping
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-white/60 backdrop-blur-sm rounded-xl p-3">
                <span className="text-gray-600 font-medium">Standard:</span>
                <span className="font-bold text-green-600">{productDetails.shipping.standard}</span>
              </div>
              <div className="flex justify-between items-center bg-white/60 backdrop-blur-sm rounded-xl p-3">
                <span className="text-gray-600 font-medium">Express:</span>
                <span className="font-bold text-green-600">{productDetails.shipping.express}</span>
              </div>
              <div className="flex justify-between items-center bg-white/60 backdrop-blur-sm rounded-xl p-3">
                <span className="text-gray-600 font-medium">Bulk:</span>
                <span className="font-bold text-green-600">{productDetails.shipping.bulk}</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="product-detail-additional-card">
            <h4 className="font-bold text-primary mb-4 flex items-center">
              <div className="product-detail-additional-icon bg-gradient-to-r from-purple-500 to-purple-600">
                <Shield className="h-5 w-5 text-white" />
              </div>
              Certifications
            </h4>
            <ul className="space-y-3">
              {productDetails.certifications.map((cert, index) => (
                <li key={index} className="text-gray-700 font-medium flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <Award className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="product-detail-action-buttons">
          <Button 
            className="product-detail-primary-button touch-target"
            onClick={() => {
              // Handle contact for quote
              window.location.href = '#contact';
              onClose();
            }}
          >
            <span className="mr-2">💰</span>
            Get Quote
          </Button>
          <Button 
            variant="outline" 
            className="product-detail-secondary-button touch-target"
            onClick={() => {
              // Handle sample request
              window.location.href = '#contact';
              onClose();
            }}
          >
            <span className="mr-2">📦</span>
            Request Sample
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetail;
