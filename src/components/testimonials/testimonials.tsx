import { Badge } from "@/components/ui/badge";
import { TestimonialMarquee } from "@/components/testimonials/testimonial-marquee";

export type Testimonial = {
  name: string;
  date: string;
  title: string;
  content: string;
  avatar?: string;
  rating: number;
  business: string;
};

const testimonials = [
  {
    name: "Sarah Chen",
    date: "2 days ago",
    title: "Bakery Owner",
    business: "Sweet Dreams Bakery",
    content: `"App transformed our WhatsApp orders. We went from 5 orders/day to 50+! The automated menu and payment system is a game-changer."`,
    rating: 5,
  },
  {
    name: "Raj Patel",
    date: "1 week ago",
    title: "Restaurant Manager",
    business: "Spice Garden",
    content: `"Finally, a WhatsApp solution that actually works! Our customers love the easy ordering, and we love the automated inventory tracking."`,
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    date: "3 days ago",
    title: "Home Chef",
    business: "Maria's Kitchen",
    content: `"Started my home food business with App. The QR code feature is brilliant - customers just scan and order. Sales increased 300%!"`,
    rating: 5,
  },
  {
    name: "David Kim",
    date: "5 days ago",
    title: "Cafe Owner",
    business: "Urban Brew",
    content: `"The best investment for our cafe. WhatsApp orders are now 70% of our business. The analytics help us understand customer preferences perfectly."`,
    rating: 5,
  },
  {
    name: "Priya Sharma",
    date: "1 week ago",
    title: "Grocery Store Owner",
    business: "Fresh Mart",
    content: `"App made our grocery delivery seamless. Customers can order anytime, and we track everything automatically. Highly recommended!"`,
    rating: 5,
  },
  {
    name: "Ahmed Hassan",
    date: "4 days ago",
    title: "Food Truck Owner",
    business: "Street Bites",
    content: `"Perfect for our food truck! Customers order via WhatsApp, we prepare, and they pick up. No more long queues or missed orders."`,
    rating: 5,
  },
] satisfies Testimonial[];

export function Testimonials() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-14 md:py-25">
      <Badge variant="secondary" className="mb-2 uppercase bg-green-100 text-green-800">
        Success Stories
      </Badge>
      <h2 className="text-center text-3xl leading-[1.1] font-bold tracking-tight sm:text-5xl">
        Trusted by<div className="text-blue-600">Businesses Worldwide</div>
      </h2>
      <p className="mb-3 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-8 text-gray-600">
        See how local businesses are growing with WhatsApp-first ecommerce
      </p>
      <div className="relative w-[calc(100%+3rem)] overflow-x-hidden py-4 lg:w-full">
        <TestimonialMarquee testimonials={testimonials} className="mb-4" />
        <TestimonialMarquee testimonials={testimonials} reverse />
      </div>
    </div>
  );
}
