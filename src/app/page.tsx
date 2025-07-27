"use client";

import { FAQs } from "@/components/faqs/faqs";
import { Features } from "@/components/features/features";
import { Footer } from "@/components/footer/footer";
import { Hero } from "@/components/hero/hero";
import { Quote } from "@/components/quote/quote";
import { Showcase } from "@/components/showcase/showcase";
import { Testimonials } from "@/components/testimonials/testimonials";
import { Pricing } from "@/components/pricing/pricing";
import { BusinessTypes } from "@/components/business-types/business-types";
import { WebsiteCreation } from "@/components/website-creation/website-creation";
import { AllInOneSoftware } from "@/components/all-in-one-software/all-in-one-software";
import { PaymentMethods } from "@/components/payment-methods/payment-methods";
import { WhatsAppOrdering } from "@/components/whatsapp-ordering/whatsapp-ordering";
import { FinalCTA } from "@/components/final-cta/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Quote /> */}
      <Showcase />
      <WhatsAppOrdering />
      <Pricing />
      <BusinessTypes />
      <WebsiteCreation />
      <AllInOneSoftware />
      <PaymentMethods />
      <Features />
      <Testimonials />
      <FAQs />
      <FinalCTA />
      <Footer />
    </>
  );
}
