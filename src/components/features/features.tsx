import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, FileText, Bell, CreditCard, ShoppingBag, FileText as FileTextIcon, Calendar, ChevronRight } from "lucide-react";

export const features = [
  {
    title: "Online Order Management",
    description: "Track and manage your orders efficiently",
    icon: <Search className="w-6 h-6" />,
    content: (
      <div className="space-y-4">
        <Button className="w-full justify-start" variant="outline">
          <Search className="w-4 h-4 mr-2" />
          Track order status
        </Button>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            Order summary
          </div>
          <div className="flex items-center gap-2 text-sm">
            <FileText className="w-4 h-4" />
            Invoice link
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Bell className="w-4 h-4" />
            Order notifications
          </div>
        </div>
        
        {/* Order examples */}
        <div className="space-y-3">
          <div className="p-3 bg-white rounded border">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="font-medium">RON's Order</div>
                <div className="text-sm text-gray-500">02 Feb 2025 17:01</div>
              </div>
              <div className="text-right">
                <div className="font-bold">$26.00</div>
              </div>
            </div>
            <div className="flex gap-1">
              <Badge variant="secondary" className="text-xs">PENDING</Badge>
              <Badge variant="secondary" className="text-xs">UNPAID</Badge>
              <Badge variant="secondary" className="text-xs">UNFULFILLED</Badge>
            </div>
          </div>
          
          <div className="p-3 bg-white rounded border">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="font-medium">TIFFANY's Order</div>
                <div className="text-sm text-gray-500">02 Feb 2025 17:01</div>
              </div>
              <div className="text-right">
                <div className="font-bold">$49.00</div>
              </div>
            </div>
            <div className="flex gap-1">
              <Badge className="bg-green-100 text-green-800 text-xs">COMPLETED</Badge>
              <Badge className="bg-green-100 text-green-800 text-xs">PAID</Badge>
              <Badge className="bg-green-100 text-green-800 text-xs">FULFILLED</Badge>
            </div>
          </div>
          
          <div className="p-3 bg-white rounded border">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="font-medium">BORA's Order</div>
                <div className="text-sm text-gray-500">02 Aug 2023 16:52</div>
                <div className="text-sm text-gray-500">#1204</div>
              </div>
              <div className="text-right">
                <div className="font-bold">$32.00</div>
                <div className="text-sm text-gray-500">$16.80</div>
              </div>
            </div>
            <div className="flex gap-1">
              <Badge className="bg-red-100 text-red-800 text-xs">CANCELLED</Badge>
              <Badge className="bg-red-100 text-red-800 text-xs">UNPAID</Badge>
            </div>
            <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
              <FileText className="w-3 h-3" />
              customer cancelled
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Local Payment Methods",
    description: "Accept QR payments and over 70 local methods, along with credit/debit cards and cash on delivery.",
    icon: <CreditCard className="w-6 h-6" />,
    content: (
      <div className="space-y-4">
        <p className="text-sm text-gray-600 mb-4">
          Accept QR payments and over 70 local methods, along with credit/debit cards and cash on delivery.
        </p>
        <Button variant="link" className="p-0 text-gray-800 hover:text-gray-900">
          Learn more <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
        
        {/* Payment method icons grid */}
        <div className="grid grid-cols-5 gap-2">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-xs text-gray-600">P</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    title: "Flexible Ordering for Any Business",
    description: "Support for various business types and ordering models",
    icon: <ShoppingBag className="w-6 h-6" />,
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 bg-white rounded border">
            <ShoppingBag className="w-5 h-5 text-blue-600" />
            <span className="font-medium">Ecommerce</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white rounded border">
            <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">↻</span>
            </div>
            <span className="font-medium">Subscriptions</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white rounded border">
            <FileTextIcon className="w-5 h-5 text-blue-600" />
            <span className="font-medium">Digital products</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white rounded border">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span className="font-medium">Booking</span>
          </div>
        </div>
        
        {/* Product examples */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-200 rounded mb-2 mx-auto"></div>
            <div className="font-medium">T-shirts</div>
            <div className="text-green-600 font-bold">$20.00</div>
            <div className="text-gray-500 line-through text-sm">$22.00</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-200 rounded mb-2 mx-auto"></div>
            <div className="font-medium">eBook</div>
            <div className="text-green-600 font-bold">$15.00</div>
          </div>
          <div className="text-center relative">
            <div className="w-16 h-16 bg-gray-200 rounded mb-2 mx-auto"></div>
            <Badge className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs">SUBSCRIPTION</Badge>
            <div className="font-medium">Bento Box</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-200 rounded mb-2 mx-auto"></div>
            <div className="font-medium">Hotel Room</div>
          </div>
        </div>
      </div>
    )
  }
];

export function Features() {
  return (
    <div id="features" className="flex w-full flex-col items-center gap-6 px-6 py-14 md:px-10 md:py-25">
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {features.map((feature, index) => (
          <Card key={feature.title}>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                {feature.icon}
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              {feature.content}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
