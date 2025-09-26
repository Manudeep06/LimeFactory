import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Weight } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: string;
  image: string;
  category: string;
  onClick?: () => void;
}

const ProductCard = ({ name, description, price, weight, image, category, onClick }: ProductCardProps) => {
  return (
    <Card 
      className="mobile-card-interactive group overflow-hidden"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 sm:h-56 md:h-60 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Badge className="absolute top-3 left-3 bg-lime-light text-lime-light-foreground px-3 py-1.5 text-xs font-semibold rounded-full shadow-lg">
          {category}
        </Badge>
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
            <Weight className="h-4 w-4 text-primary" />
          </div>
        </div>
      </div>
      <CardContent className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3 line-clamp-2">{name}</h3>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed line-clamp-3">{description}</p>
        
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Weight className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-xs sm:text-sm font-medium">{weight}</span>
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-price">
            ${price.toFixed(2)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;