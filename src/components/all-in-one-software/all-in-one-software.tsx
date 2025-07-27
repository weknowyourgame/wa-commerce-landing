import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, BarChart3, Users, CreditCard, Gift, TrendingUp, ShoppingBag } from "lucide-react";

const features = [
  {
    title: "CRM",
    description: "Boost sales with better customer relationship management",
    icon: <Users className="w-6 h-6 text-blue-600" />,
    content: (
      <div className="w-48 h-64 bg-gradient-to-b from-blue-500 to-blue-600 rounded-2xl p-3 shadow-lg">
        <div className="bg-white rounded-lg p-3 h-full">
          <div className="text-sm mb-2">Bali Dining</div>
          <div className="bg-green-100 rounded p-2 mb-2">
            <div className="text-xs">Happy birthday Ron! Here's the discount code you can use today 🎉</div>
          </div>
          <Button size="sm" className="w-full mb-2 bg-blue-600 hover:bg-blue-700">
            <Gift className="w-3 h-3 mr-1" />
            Redeem
          </Button>
          <div className="bg-blue-100 rounded p-2">
            <div className="text-xs">Thank you 👋</div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Inventory",
    description: "Manage inventory online and prevent overselling/shortages",
    icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
    content: (
      <div className="bg-white rounded-lg p-4 border border-blue-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-blue-200">
              <th className="text-left pb-2">Product</th>
              <th className="text-left pb-2">Inventory</th>
              <th className="text-left pb-2">Price</th>
              <th className="text-left pb-2">Original price</th>
            </tr>
          </thead>
          <tbody className="space-y-2">
            <tr>
              <td>Perfume</td>
              <td>
                <div className="w-6 h-3 bg-green-500 rounded-full"></div>
              </td>
              <td>8</td>
              <td>$69.99</td>
              <td className="line-through text-gray-500">$75.99</td>
            </tr>
            <tr>
              <td>Journal</td>
              <td>
                <div className="w-6 h-3 bg-green-500 rounded-full"></div>
              </td>
              <td>16</td>
              <td>$7.99</td>
              <td className="line-through text-gray-500">$10.99</td>
            </tr>
            <tr>
              <td>Lipstick</td>
              <td>
                <div className="w-6 h-3 bg-green-500 rounded-full"></div>
              </td>
              <td>2</td>
              <td>$9.99</td>
              <td className="line-through text-gray-500">$12.99</td>
            </tr>
            <tr>
              <td>T-shirts</td>
              <td>
                <div className="w-6 h-3 bg-gray-300 rounded-full"></div>
              </td>
              <td></td>
              <td>$10.99</td>
              <td className="line-through text-gray-500">$12.99</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  {
    title: "Wholesale",
    description: "Boost sales with personalized pricing for customers",
    icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
    content: (
      <div className="flex gap-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-300 rounded mb-2"></div>
          <div className="font-medium">Handcream</div>
          <div className="text-green-600 font-bold">$15.00</div>
          <div className="text-xs text-gray-500">Regular user</div>
        </div>
        <div className="flex items-center">
          <div className="w-8 h-4 bg-blue-500 rounded-full"></div>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-300 rounded mb-2"></div>
          <div className="font-medium">Handcream</div>
          <div className="text-green-600 font-bold">$10.00</div>
          <div className="text-xs text-gray-500 line-through">$15.00</div>
          <div className="text-xs text-gray-500">VIP user</div>
        </div>
      </div>
    )
  },
  {
    title: "Analytics",
    description: "Visitors and business insights",
    icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
    content: (
      <div className="bg-white rounded-lg p-4 border border-blue-200">
        <div className="h-32 bg-gradient-to-br from-blue-50 to-blue-100 rounded flex items-end justify-between p-2">
          <div className="w-4 bg-blue-500 rounded-t" style={{height: '60%'}}></div>
          <div className="w-4 bg-blue-500 rounded-t" style={{height: '40%'}}></div>
          <div className="w-4 bg-blue-500 rounded-t" style={{height: '80%'}}></div>
          <div className="w-4 bg-blue-500 rounded-t" style={{height: '30%'}}></div>
          <div className="w-4 bg-blue-500 rounded-t" style={{height: '90%'}}></div>
          <div className="w-4 bg-blue-500 rounded-t" style={{height: '70%'}}></div>
          <div className="w-4 bg-blue-500 rounded-t" style={{height: '50%'}}></div>
        </div>
        <div className="mt-2 text-center">
          <div className="flex items-center justify-center gap-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium">1500 visitors</span>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Payment Link",
    description: "Get paid faster for Accounts Receivable",
    icon: <CreditCard className="w-6 h-6 text-blue-600" />,
    content: (
      <div className="w-48 h-64 bg-gradient-to-b from-blue-500 to-blue-600 rounded-2xl p-3 shadow-lg">
        <div className="bg-white rounded-lg p-3 h-full">
          <div className="text-sm mb-2">Bali Dining</div>
          <div className="bg-green-100 rounded p-2 mb-2">
            <div className="text-xs">Your payment of $42.00 is pending. Complete your payment at balidining.me/pay</div>
          </div>
          <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
            <CreditCard className="w-3 h-3 mr-1" />
            Pay
          </Button>
        </div>
      </div>
    )
  },
  {
    title: "Membership",
    description: "Incentivize repeat purchases with reward credit",
    icon: <Gift className="w-6 h-6 text-blue-600" />,
    content: (
      <div className="w-48 h-64 bg-gradient-to-b from-blue-500 to-blue-600 rounded-2xl p-3 shadow-lg">
        <div className="bg-white rounded-lg p-3 h-full">
          <div className="text-sm mb-2">Bali Dining</div>
          <div className="bg-green-100 rounded p-2 mb-2">
            <div className="text-xs">Hi Ron, You've received $6.00 in store credit from Bali Dining. Your store credit balance is now $24.00.</div>
          </div>
          <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
            <ShoppingBag className="w-3 h-3 mr-1" />
            Order again
          </Button>
        </div>
      </div>
    )
  }
];

export function AllInOneSoftware() {
  return (
    <div className="w-full px-6 py-16 md:px-10 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">All-In-One Business Software</h2>
          <p className="text-xl text-gray-600">
            Boost productivity using our WhatsApp-first ERP software for small businesses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={feature.title} className="border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="flex justify-center">
                  {feature.content}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 