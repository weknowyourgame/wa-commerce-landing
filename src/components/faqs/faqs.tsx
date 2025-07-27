import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Plus } from "lucide-react";

function AccordionItemFAQs(props: React.ComponentProps<typeof AccordionItem>) {
  return (
    <AccordionItem
      {...props}
      className={cn(
        "bg-white rounded-lg border border-gray-200 px-5 py-3 transition-colors",
        props.className,
      )}
    />
  );
}

function AccordionTriggerFAQs(props: React.ComponentProps<typeof AccordionTrigger>) {
  return (
    <AccordionTrigger
      {...props}
      className={cn("text-base lg:text-lg font-medium", props.className)}
    />
  );
}

function AccordionContentFAQs(props: React.ComponentProps<typeof AccordionContent>) {
  return <AccordionContent {...props} className={cn("text-gray-600 lg:text-base", props.className)} />;
}

const faqQuestions = [
  "How does App work with WhatsApp?",
  "What subscription plans does App offer?",
  "Can my store accept credit cards and other payment methods?",
  "Is App available in my country?",
  "Can I use my own domain with App?",
  "When I need help, how can I get your support?",
  "Can I track my sales and customer interactions?",
  "Can I cancel my subscription plan anytime?"
];

export function FAQs() {
  return (
    <div className="w-full px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex w-full flex-col gap-6">
            <h2 className="text-3xl leading-[1.1] font-bold tracking-tight sm:text-4xl">
              Frequently
              <br />
              Asked
              <br />
              Questions
            </h2>
          </div>
          
          <div className="bg-white rounded-lg p-6">
            <Accordion type="single" collapsible className="space-y-2">
              {faqQuestions.map((question, index) => (
                <AccordionItemFAQs key={index} value={`item-${index}`}>
                  <AccordionTriggerFAQs className="flex items-center gap-2">
                    <Plus className="w-4 h-4 text-gray-400" />
                    {question}
                  </AccordionTriggerFAQs>
                  <AccordionContentFAQs>
                    <p>
                      This is a placeholder answer for the FAQ question. The actual content would be provided based on the specific question.
                    </p>
                  </AccordionContentFAQs>
                </AccordionItemFAQs>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
