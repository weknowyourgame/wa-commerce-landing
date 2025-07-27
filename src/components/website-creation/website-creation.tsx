import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Search, ShoppingBag, FileText, Calendar } from "lucide-react";

export function WebsiteCreation() {
  return (
    <div className="w-full px-6 py-16 md:px-10 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Create Your Website in Minutes</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Beautiful Product Catalogs */}
            <Card className="border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Beautiful product catalogs</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-white rounded-lg border border-blue-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded"></div>
                    <div>
                      <div className="font-medium">Cream</div>
                      <div className="text-green-600 font-bold">$40.00</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-white rounded-lg border border-blue-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded"></div>
                    <div>
                      <div className="font-medium">Cream set</div>
                      <div className="text-green-600 font-bold">$120.00</div>
                    </div>
                  </div>
                  <div className="border-t border-blue-200 pt-4">
                    <div className="font-medium mb-2">Laundry service</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Returned in 48 hours</span>
                        <span>Ironing SGD 1.00 per piece</span>
                      </div>
                      <div className="flex justify-between">
                        <span></span>
                        <span className="font-bold">$3.00 / 1 KG</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Returned in 24 hours</span>
                        <span>Ironing SGD 1.50 per piece</span>
                      </div>
                      <div className="flex justify-between">
                        <span></span>
                        <span className="font-bold">$4.00 / 1 KG</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Link-in-bio for Instagram */}
            <Card className="border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Link-in-bio for Instagram</h3>
                <div className="w-48 h-80 bg-gradient-to-b from-blue-400 to-blue-600 rounded-3xl border-2 border-blue-300 mx-auto p-4 shadow-lg">
                  <div className="flex justify-between items-center mb-4">
                    <Search className="w-5 h-5 text-white" />
                    <ShoppingBag className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full mx-auto mb-2"></div>
                    <div className="font-bold text-white">Bali Dining</div>
                    <div className="flex items-center justify-center gap-1 text-sm text-blue-100">
                      <span className="text-yellow-400">★</span>
                      <span>4.8</span>
                      <span className="text-blue-200">(1,291 reviews)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Custom Domain */}
            <Card className="border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Custom domain</h3>
                <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                  <Lock className="w-4 h-4 text-blue-500" />
                  <span className="text-gray-600">https://</span>
                  <span className="font-mono text-blue-600">balidining</span>
                  <span className="text-gray-600">|</span>
                </div>
              </CardContent>
            </Card>

            {/* Design your website */}
            <Card className="border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Design your website</h3>
                <div className="w-full h-48 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-medium">Image</span>
                </div>
              </CardContent>
            </Card>

            {/* SEO */}
            <Card className="border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Search Engine Optimization (SEO)</h3>
                <div className="space-y-3">
                  <Input placeholder="balidining" className="mb-3 border-blue-200" />
                  <div className="p-3 bg-white border border-blue-200 rounded-lg">
                    <div className="text-blue-600 text-sm">balidining.me</div>
                    <div className="text-green-600 text-sm">https://balidining.me</div>
                    <div className="font-medium">Bali Dining | </div>
                    <div className="text-gray-600 text-sm">Category. Main Dish; Italian; Beverages; Digital. Restaurant Website.</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2">Get the latest trends with our newsletter.</h3>
                  <div className="text-2xl font-mono mb-2 text-blue-600">00:00:00:00</div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Subscribe</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 