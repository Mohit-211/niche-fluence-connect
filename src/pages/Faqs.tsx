import { useState } from "react";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";

const faqs = {
  Brands: [
    {
      question: "What types of brands do you work with?",
      answer:
        "We specialize in SaaS, D2C, and utility tech products. If your solution is digital and you care about reaching the right audience, we’re a fit. No crypto casinos or teeth-whitening scams, sorry.",
    },
    {
      question: "What’s the minimum budget to work with HypeNest?",
      answer:
        "Most campaigns start at $2,000 (USD) for micro-influencer runs, but we’ve managed launches well into five figures. We’re allergic to lowballing—our goal is results, not burning cash.",
    },
    {
      question: "How long does it take to launch a campaign?",
      answer:
        "From kickoff call to influencer posts: typically 10-21 days, depending on complexity. If you’re in a rush, say so—we’ll be honest if it’s doable.",
    },
    {
      question: "How do you vet influencers?",
      answer:
        "We audit for authentic engagement, niche authority, and real audience demographics (not just big numbers). Every creator is reviewed manually and via analytics tools.",
    },
    {
      question: "What’s your payment structure?",
      answer:
        "We operate on a fixed fee or retainer. All influencer payouts and campaign costs are transparently itemized—no surprise fees, no ‘agency magic’ upcharges.",
    },
    {
      question: "What metrics do you report on?",
      answer:
        "We report reach, clicks, conversions, brand lift, and any custom KPIs you care about. All data is delivered in dashboards you actually understand—no fuzzy numbers.",
    },
  ],
  Creators: [
    {
      question: "What does HypeNest look for in creators?",
      answer:
        "Authenticity, niche focus, and consistent engagement. If you’re faking followers, pushing dodgy affiliate links, or hopping niche every week, swipe left.",
    },
    {
      question: "Do I need a minimum follower count?",
      answer:
        "We prefer 10,000+ on your main platform (YouTube, Twitter, LinkedIn, or Instagram), but if your content is gold and engagement is real, we’re flexible.",
    },
    {
      question: "How do payouts work?",
      answer:
        "We pay creators within 24 hours of campaign completion—no 60-day waits, no ‘payment processor issues.’ Bank transfer, PayPal, or Wise—your call.",
    },
    {
      question: "Can I work with brands I already know?",
      answer:
        "Absolutely. If you want to pitch a brand you trust, we can help structure and manage the deal, as long as it’s in our niche.",
    },
    {
      question: "Do I have creative control?",
      answer:
        "We work with brands that respect creative autonomy. You’ll always get campaign guidelines, but your voice and style come first—no forced reads or awkward scripts.",
    },
    {
      question: "How do I join the HypeNest creator roster?",
      answer:
        "Apply via our contact form. We review every application personally and respond within 48 hours. If you’re a fit, you’ll hear from us (if not, we’ll let you know why).",
    },
  ],
};

function Accordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <Card
          key={idx}
          className="transition-shadow hover:shadow-lg cursor-pointer"
          onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
        >
          <div className="flex items-center justify-between px-6 py-4">
            <span className="font-semibold text-lg">{item.question}</span>
            <span className="text-accent text-xl">
              {openIdx === idx ? "–" : "+"}
            </span>
          </div>
          {openIdx === idx && (
            <div className="px-6 pb-4 pt-1 text-muted-foreground text-base">
              {item.answer}
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}

const Faqs = () => (
  <Layout>
    <section className="py-20 bg-hero">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Frequently Asked <span className="text-accent">Questions</span>
        </h1>
        <p className="text-xl text-white/90 mb-8">
          No-nonsense answers for brands and creators—because you’ve got better
          things to do.
        </p>
      </div>
    </section>
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          For Brands
        </h2>
        <Accordion items={faqs.Brands} />
        <h2 className="text-3xl font-bold text-foreground mt-16 mb-8 text-center">
          For Creators
        </h2>
        <Accordion items={faqs.Creators} />
      </div>
    </section>
  </Layout>
);

export default Faqs;
