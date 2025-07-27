import { FooterBlur } from "@/components/footer/footer-blur";
import { XIcon, LinkedInIcon, GithubIcon } from "@/components/footer/icons";
import Link from "next/link";
import { MessageCircle, Globe, Shield, HelpCircle } from "lucide-react";

const links = [
  {
    title: "App",
    links: [
      {
        label: "Start Free Trial",
        href: "/pricing",
        title: "Start your free trial",
      },
      {
        label: "Features",
        href: "/#features",
        title: "See our features",
      },
      {
        label: "Pricing",
        href: "/pricing",
        title: "View pricing plans",
      },
      {
        label: "WhatsApp Integration",
        href: "/#whatsapp",
        title: "Learn about WhatsApp integration",
      },
    ],
  },
  {
    title: "Business Types",
    links: [
      {
        label: "Restaurants",
        href: "/#business-types",
        title: "Perfect for restaurants",
      },
      {
        label: "Retail Stores",
        href: "/#business-types",
        title: "Ideal for retail",
      },
      {
        label: "Home Food Business",
        href: "/#business-types",
        title: "Great for home chefs",
      },
      {
        label: "Grocery & Delivery",
        href: "/#business-types",
        title: "Perfect for grocery stores",
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        label: "Help Center",
        href: "/help",
        title: "Get help and support",
      },
      {
        label: "Contact Us",
        href: "/contact",
        title: "Contact our team",
      },
      {
        label: "WhatsApp Channel",
        href: "https://wa.me/",
        title: "Follow our WhatsApp channel",
      },
      {
        label: "Onboarding Session",
        href: "/onboarding",
        title: "Book your onboarding session",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        label: "Terms & Conditions",
        href: "/terms-and-conditions",
        title: "Read our Terms & Conditions",
      },
      {
        label: "Privacy Policy",
        href: "/privacy-policy",
        title: "Read our Privacy Policy",
      },
      {
        label: "Refund Policy",
        href: "/refund-policy",
        title: "Read our Refund Policy",
      },
      {
        label: "GDPR Compliance",
        href: "/gdpr",
        title: "Learn about our GDPR compliance",
      },
    ],
  },
];

const socialLinks = [
  {
    label: (
      <div className="flex items-center gap-2">
        <MessageCircle className="h-4 w-4" />
        <span>WhatsApp</span>
      </div>
    ),
    href: "https://wa.me/",
    title: "Follow us on WhatsApp",
  },
  {
    label: (
      <div className="flex items-center gap-2">
        <XIcon className="h-4 w-4" />
        <span>Twitter</span>
      </div>
    ),
    href: "https://x.com/",
    title: "Follow us on Twitter",
  },
  {
    label: (
      <div className="flex items-center gap-2">
        <LinkedInIcon className="h-4 w-4" />
        <span>LinkedIn</span>
      </div>
    ),
    href: "https://www.linkedin.com/company/",
    title: "Connect with us on LinkedIn",
  },
  {
    label: (
      <div className="flex items-center gap-2">
        <Globe className="h-4 w-4" />
        <span>Blog</span>
      </div>
    ),
    href: "/blog",
    title: "Read our blog",
  },
];

export function Footer() {
  return (
    <footer className="relative -mt-25 overflow-hidden py-12 pt-37 md:py-25 md:pt-37 bg-gradient-to-br from-gray-50 to-blue-50">
      <FooterBlur />
      <div className="mx-auto max-w-6xl px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-2 gap-8 tracking-tight md:grid-cols-4 mb-8">
          {links.map((link) => (
            <div key={link.title} className="mb-10 text-center">
              <h3 className="text-gray-800 font-semibold mb-6">{link.title}</h3>
              <ul className="flex flex-col items-center gap-4">
                {link.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      title={link.title}
                      target={link.href.startsWith("https://") ? "_blank" : undefined}
                      className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-6 w-6 text-green-600" />
              <span className="font-bold text-xl">App</span>
            </div>
            <div className="flex items-center gap-6">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  title={link.title}
                  target="_blank"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom info */}
        <div className="border-t border-gray-200 pt-6 mt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 App. All rights reserved. WhatsApp-first ecommerce for local businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
