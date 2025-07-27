import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, MessageCircle } from "lucide-react";

export function WhatsAppOrdering() {
  return (
    <div className="w-full px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold mb-12 text-gray-800">
          Simplify WhatsApp Ordering
        </h2>
        
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">WhatsApp Order Form</h3>
                <p className="text-gray-600 mb-6">
                  Customers independently place orders through WhatsApp, specifying their choices and scheduling, which minimizes repetitive inquiries
                </p>
                <Button variant="link" className="p-0 text-blue-600 hover:text-blue-700">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              
              <div className="flex justify-center">
                <div className="relative">
                  {/* Smartphone mockup with bluish theme */}
                  <div className="w-64 h-96 bg-gradient-to-b from-blue-400 to-blue-600 rounded-3xl p-2 shadow-xl">
                    <div className="w-full h-full bg-green-50 rounded-2xl overflow-hidden">
                      {/* WhatsApp header */}
                      <div className="bg-green-600 p-3 flex items-center gap-3">
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                          <ChevronRight className="w-4 h-4 text-green-600 rotate-180" />
                        </div>
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <MessageCircle className="w-4 h-4 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-medium">Bali Dining</div>
                          <div className="text-green-100 text-xs">✓ verified</div>
                        </div>
                      </div>
                      
                      {/* Chat content */}
                      <div className="p-4 space-y-3">
                        <div className="bg-green-100 rounded-lg p-3 max-w-xs">
                          <div className="text-sm">
                            <div><strong>Service:</strong> Delivery</div>
                            <div><strong>Delivery address:</strong> 123 Orchard Road, Singapore 238888</div>
                            <div><strong>Delivery time:</strong> 12PM - 14PM</div>
                            <div><strong>Payment:</strong> Paypal</div>
                            <div className="text-gray-500 text-xs">(Confirming Payment)</div>
                            <div className="text-blue-600 text-xs underline">See invoice</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 