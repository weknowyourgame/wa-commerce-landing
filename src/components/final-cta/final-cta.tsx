import { Button } from "@/components/ui/button";
import { MessageCircle, ExternalLink } from "lucide-react";

export function FinalCTA() {
  return (
    <div className="h-[450px] px-6 py-16 md:px-10 md:py-24 bg-gray-900">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">
          WhatsApp-first and<br />
          Commissions-free Ecommerce
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
            Start free
          </Button>
          <Button variant="ghost" className="text-white hover:bg-gray-800">
            Follow WhatsApp Channel
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
} 