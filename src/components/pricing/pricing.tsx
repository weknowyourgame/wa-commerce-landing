"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, Star } from "lucide-react";
import { useState } from "react";

export function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: "Basic",
      subtitle: "For hobbyists",
      price: isYearly ? "$0" : "$0",
      originalPrice: null,
      features: [
        "Unlimited WhatsApp orders",
        "No commissions",
        "Manual payments",
        "Upload up to 20 images"
      ],
      cta: "Get started",
      popular: false
    },
    {
      name: "Premium",
      subtitle: "For solo entrepreneurs",
      price: isYearly ? "$14" : "$19",
      originalPrice: isYearly ? "$19" : "$19",
      yearlyPrice: "$171 / year",
      features: [
        "Everything in Basic, plus:",
        "Unlimited images",
        "Custom domain",
        "Card payments (Stripe and more)",
        "Payment proof and processing fee",
        "Analytics, SEO and Meta Pixel",
        "Invoice settings and PDF",
        "CSV export/import",
        "Delivery distance calculation",
        "Customer reviews",
        "Live chat support"
      ],
      cta: "Get started",
      popular: true,
      offer: "Free domain",
      offerEnding: "Offer ending soon"
    },
    {
      name: "Business",
      subtitle: "For teams",
      price: isYearly ? "$38" : "$50",
      originalPrice: isYearly ? "$50" : "$50",
      yearlyPrice: "$450 / year",
      features: [
        "Everything in Premium, plus:",
        "App logo removal",
        "WhatsApp Inbox and sync",
        "WhatsApp broadcast",
        "WhatsApp workflow and catalog",
        "Multiple stores and staff",
        "Membership login and rewards",
        "Wholesale pricing",
        "Webhooks, API and 3rd-party apps",
        "Data migration service",
        "Priority support"
      ],
      cta: "Get started",
      popular: false,
      offer: "Free domain",
      offerEnding: "Offer ending soon"
    }
  ];

  return (
    <div className="w-full px-6 py-16 md:px-10 md:py-24 bg-gray-50">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Pricing</h2>
          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isYearly 
                  ? 'bg-gray-800 text-white' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Pay yearly (Save 25%)
            </button>
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !isYearly 
                  ? 'bg-gray-800 text-white' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Pay monthly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan, index) => (
            <Card key={plan.name} className={`relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-gray-600">{plan.subtitle}</p>
                <div className="mt-4">
                  <div className="text-4xl font-bold">{plan.price}</div>
                  {plan.originalPrice && plan.originalPrice !== plan.price && (
                    <div className="text-gray-500 line-through">{plan.originalPrice}</div>
                  )}
                  {plan.yearlyPrice && isYearly && (
                    <div className="text-sm text-blue-600">{plan.yearlyPrice}</div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm">
                      {featureIndex === 0 && plan.features.length > 1 ? (
                        <span className="text-gray-600">{feature}</span>
                      ) : (
                        <>
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
                
                {plan.offer && (
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2 text-blue-600 text-sm">
                      <Clock className="w-4 h-4" />
                      {plan.offer}
                    </div>
                    <div className="text-blue-600 text-sm font-medium">{plan.offerEnding}</div>
                  </div>
                )}
                
                <Button className="w-full mb-4" variant={plan.popular ? "default" : "outline"}>
                  {plan.cta}
                </Button>
                
                {plan.popular && (
                  <p className="text-center text-sm text-gray-500">Cancel any time</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Risk free message */}
        <div className="text-center mb-12">
          <p className="text-gray-600">Risk free, you can cancel any time.</p>
        </div>

        {/* Compare Plans & Onboarding */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Compare Plans</h3>
              <Button variant="outline" className="w-full">
                Explore plans
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Join our onboarding session</h3>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Explore key App features</li>
                <li>• Get your questions answered with App team</li>
                <li>• Enjoy 1:1 onboarding and migration support when you buy Business plan</li>
              </ul>
              <Button className="w-full">
                Book your seat
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 