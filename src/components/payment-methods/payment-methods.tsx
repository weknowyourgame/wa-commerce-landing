import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Flag, CreditCard, Banknote, Gift, FileText } from "lucide-react";

const paymentMethods = [
  {
    name: "Razorpay India",
    description: "A comprehensive payment solution for Indian businesses, offering multiple payment modes and easy integration.",
    icon: <CreditCard className="w-6 h-6" />,
    type: "Automated"
  },
  {
    name: "UPI",
    description: "India's Unified Payments Interface, enabling instant money transfers between bank accounts.",
    icon: <Banknote className="w-6 h-6" />,
    type: "UPI"
  },
  {
    name: "Bank transfer",
    description: "A traditional and secure method for transferring funds directly between bank accounts.",
    icon: <Banknote className="w-6 h-6" />,
    type: "Bank transfer"
  },
  {
    name: "Cash on Delivery",
    description: "A payment method where customers pay for goods upon delivery, ensuring trust in transactions.",
    icon: <Banknote className="w-6 h-6" />,
    type: "Cash on Delivery"
  },
  {
    name: "Store Credit",
    description: "A payment option allowing customers to use credit stored in their account for purchases.",
    icon: <Gift className="w-6 h-6" />,
    type: "Store Credit"
  },
  {
    name: "Pay with instructions",
    description: "A flexible payment method where you can customize instructions, including images, for a personalized transaction process.",
    icon: <FileText className="w-6 h-6" />,
    type: "Pay with instructions"
  }
];

export function PaymentMethods() {
  return (
    <div className="w-full px-6 py-16 md:px-10 md:py-24 bg-gray-50">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flag className="w-6 h-6" />
            <span className="text-lg font-medium">Available in India 🇮🇳</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paymentMethods.map((method, index) => (
            <Card key={method.name}>
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  {method.icon}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold">{method.name}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {method.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 