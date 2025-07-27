import { Nav } from "@/components/hero/nav";
import { BackgroundBlur } from "@/components/ui/background-blur";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Star, Facebook, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <div className="z-1 grid w-full place-items-center p-8">
      <BackgroundBlur className="-top-40 md:-top-0" />
      <Nav />
      <div className="mt-16 flex flex-col items-center gap-6">
        <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
          <MessageCircle className="w-4 h-4 mr-2" />
          Launch Offer 50% off 🎉
        </Badge>
        <h1 className="text-center text-4xl leading-[1.1] font-bold tracking-tight sm:text-7xl">
          Create Ecommerce for WhatsApp
        </h1>
        <p className="max-w-lg text-center leading-6 tracking-tight sm:text-xl text-gray-600">
          Simplify WhatsApp ordering. Boost sales with better customer service.
        </p>
        <Button className="mb-10 w-fit" size="lg" asChild>
          <Link href="/pricing">Start free</Link>
        </Button>
        
        {/* Phone Mockup */}
        <div className="relative mb-8">
          <div className="w-80 h-96 bg-gradient-to-b from-blue-400 to-blue-600 rounded-3xl p-3 shadow-2xl">
            <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
              {/* Phone screen content */}
              <div className="h-full flex flex-col">
                {/* Header */}
                <div className="bg-green-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium">Bali Dining</div>
                      <div className="text-green-100 text-xs">✓ verified</div>
                    </div>
                  </div>
                </div>
                
                {/* Menu content */}
                <div className="flex-1 p-4 bg-gray-50">
                  <div className="space-y-4">
                    {/* Bread section */}
                    <div>
                      <h3 className="font-bold mb-3">Bread</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white rounded-lg p-3">
                          <div className="w-full h-20 bg-gray-200 rounded mb-2"></div>
                          <div className="font-medium">Baguette</div>
                          <div className="text-green-600 font-bold">$6.00</div>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <div className="w-full h-20 bg-gray-200 rounded mb-2"></div>
                          <div className="font-medium">Campagne</div>
                          <div className="text-green-600 font-bold">$8.00</div>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <div className="w-full h-20 bg-gray-200 rounded mb-2"></div>
                          <div className="font-medium">Plain bread</div>
                          <div className="text-green-600 font-bold">$5.00</div>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <div className="w-full h-20 bg-gray-200 rounded mb-2"></div>
                          <div className="font-medium">Croissant</div>
                          <div className="text-green-600 font-bold">$4.00</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Cake section */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                        <h3 className="font-bold">Cake</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-3 flex gap-3">
                          <div className="flex-1">
                            <div className="font-medium">Chocolate cheese cake</div>
                            <div className="text-sm text-gray-600">A cake with a cheesecake and chocolate coating</div>
                            <div className="text-green-600 font-bold">$32.00</div>
                          </div>
                          <div className="w-16 h-16 bg-gray-200 rounded"></div>
                        </div>
                        <div className="bg-white rounded-lg p-3 flex gap-3">
                          <div className="flex-1">
                            <div className="font-medium">Chocolate crunch cake</div>
                            <div className="text-sm text-gray-600">A sweet, dark chocolate cake with crispy crunches in it</div>
                            <div className="text-green-600 font-bold">$34.00</div>
                          </div>
                          <div className="w-16 h-16 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Customer label */}
          <div className="absolute -right-20 top-1/2 transform -translate-y-1/2">
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Customer
            </div>
            <div className="w-0 h-0 border-l-8 border-l-green-500 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
