import {
  ArrowRight,
  Upload,
  Users,
  Rocket,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

const Brands = () => {
  const steps = [
    {
      icon: Upload,
      title: "Share Your Goals",
      description:
        "Tell us about your product, target audience, and what you want to achieve. We handle the details—you focus on results.",
    },
    {
      icon: Users,
      title: "Get Matched",
      description:
        "We’ll handpick tech-savvy influencers who actually “get” your product and your market. No random lists. Only real fits.",
    },
    {
      icon: Rocket,
      title: "Launch Campaigns",
      description:
        "You approve the plan. We manage creator onboarding, campaign execution, and all logistics—white-glove service, end to end.",
    },
    {
      icon: TrendingUp,
      title: "See Real Results",
      description:
        "Track engagement, signups, and ROI with transparent, jargon-free reports. You always know what’s working—and what’s not.",
    },
  ];

  const benefits = [
    "Influencer selection done-for-you, not DIY lists or guesswork",
    "Full campaign management from outreach to reporting",
    "Tech-focused creator network, no generic lifestyle spam",
    "Transparent pricing, no hidden fees or markups",
    "Real-time analytics and honest performance tracking",
    "Human support from the HypeNest team, always",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Scale Your Tech Brand with
            <span className="text-accent block mt-2">
              Influencer Campaigns That Deliver
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            HypeNest is your partner for done-for-you influencer marketing. We
            match your SaaS, D2C, or digital product with real creators—not just
            followers—and manage campaigns from start to finish.
          </p>
          <Button className="btn-hero text-lg px-8 py-4" asChild>
            <a href="/contact">
              Get Started with HypeNest
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How HypeNest Works for Brands
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Launch influencer campaigns that <strong>actually</strong> move
              the needle - in four easy steps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="feature-card text-center relative">
                  <div className="absolute -top-4 left-4 bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                    {index + 1}
                  </div>
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Client Success: CloudSync
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                CloudSync, a SaaS brand in the productivity space, partnered
                with HypeNest to boost trial signups and user engagement. We
                matched them with top creators in tech and business. The
                results? Real, measurable impact.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">
                    125K+
                  </div>
                  <div className="text-sm text-muted-foreground">New Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">3x</div>
                  <div className="text-sm text-muted-foreground">
                    Brand Awareness
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">45%</div>
                  <div className="text-sm text-muted-foreground">
                    Conversion Rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Campaign Transparency
                  </div>
                </div>
              </div>

              <Button variant="outline" className="btn-secondary">
                Download Full Case Study
              </Button>
            </div>

            <div className="relative">
              <img
                src={dashboardPreview}
                alt="Campaign Dashboard"
                className="rounded-2xl shadow-large"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why HypeNest?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We do the heavy lifting - from strategy to reporting - so you can
              focus on building your brand, not wrangling influencers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                <span className="text-lg text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Launch With the Right Influencers?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Want a strategy call?{" "}
            <span className="text-accent">Let’s talk. </span>
            Your next campaign is a click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero text-lg px-8 py-4" asChild>
              <a href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Brands;
