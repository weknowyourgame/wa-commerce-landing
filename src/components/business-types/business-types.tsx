import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const businessTypes = [
  {
    name: "Restaurants",
    image: "/restaurant.jpg",
    description: "Perfect for cafes, restaurants, and food delivery"
  },
  {
    name: "Ecommerce",
    image: "/ecommerce.jpg", 
    description: "Ideal for online stores and retail businesses"
  },
  {
    name: "Rental",
    image: "/rental.jpg",
    description: "Great for equipment and vehicle rentals"
  },
  {
    name: "Home-Based Food Business",
    image: "/home-food.jpg",
    description: "Perfect for home kitchens and catering"
  },
  {
    name: "Grocer & Butcher",
    image: "/grocer.jpg",
    description: "Ideal for grocery stores and specialty food shops"
  },
  {
    name: "And more...",
    image: null,
    description: "Discover how we can help your business"
  }
];

export function BusinessTypes() {
  return (
    <div className="w-full px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Built for Local Business</h2>
          <p className="text-xl text-gray-600">
            From restaurants and retail to rentals, we help local businesses grow online.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {businessTypes.map((business, index) => (
            <Card key={business.name} className="relative overflow-hidden group">
              <CardContent className="p-0">
                {business.image ? (
                  <div className="relative h-48 bg-gray-200">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-900">
                        {business.name}
                      </Badge>
                    </div>
                  </div>
                ) : (
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <Badge variant="secondary" className="mb-2">
                        {business.name}
                      </Badge>
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mx-auto">
                        <ArrowRight className="w-4 h-4 text-gray-600" />
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 