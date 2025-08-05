import { Target, Users, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision & Relevance",
      description:
        "We believe in quality, not quantity. Every brand-influencer match is handpicked for real impact.",
    },
    {
      icon: Users,
      title: "Authentic Relationships",
      description:
        "We foster genuine, long-term collaborations—not just transactional gigs. Everyone wins, every time.",
    },
    {
      icon: Award,
      title: "White-Glove Service",
      description:
        "Our team delivers hands-on support to ensure every campaign exceeds your expectations—and your KPIs.",
    },
  ];

  const stats = [
    { value: "500+", label: "Tech Brands Served" },
    { value: "10K+", label: "Creators Matched" },
    { value: "95%", label: "Campaign Success Rate" },
    { value: "$50M+", label: "Creator Earnings Paid" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Connecting Brands with
            <span className="text-accent block mt-2">
              Influencers Who Deliver
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-8">
            HypeNest is here to help you find <strong>your</strong> audience
            through trusted creators and hands-on, data-driven campaigns.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our Story
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              HypeNest was founded by SaaS builders who were tired of random
              influencer campaigns with zero ROI. We saw brilliant products
              failing to reach the right audience—while creators with loyal,
              relevant followings got ignored or misused by generic agencies.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              So we built a different kind of agency. One that actually *gets*
              tech, understands modern creators, and works relentlessly to align
              the two for measurable business results.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              Today, we’re trusted by hundreds of startups and scale-ups—and a
              network of creators who value real partnership, not one-off
              “placements.” We’re still founder-led, still picky about who we
              match, and still obsessed with results.
            </p>
            <blockquote className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
              <p className="text-xl italic text-foreground mb-4">
                "Our Goal: Get the <strong>right</strong> brands in front of the{" "}
                <strong>right</strong> audience, through creators who genuinely
                care. No shortcuts. No spam. No nonsense."
              </p>
              <footer className="text-accent font-semibold">
                — Jonathan (Founder, HypeNest)
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything we do is built on these principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="feature-card text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-muted-foreground">
              What we’ve achieved (and keep building on).
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Meet the HypeNest Team
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Marketers, founders, and creator advocates—our crew has scaled SaaS
            startups, managed millions in campaign spend, and helped influencers
            turn hobbies into careers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="font-semibold text-foreground mb-2">
                Built by SaaS Founders
              </h3>
              <p className="text-sm text-muted-foreground">
                We’ve built, scaled, and sold tech companies—so we know what it
                takes to reach real customers.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="font-semibold text-foreground mb-2">
                Deep Creator Relationships
              </h3>
              <p className="text-sm text-muted-foreground">
                Our network is all hand-picked. We know every creator we work
                with (and so will you).
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="font-semibold text-foreground mb-2">
                Proven Campaign Success
              </h3>
              <p className="text-sm text-muted-foreground">
                10,000+ campaigns managed, from bootstrapped SaaS to global tech
                leaders.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="font-semibold text-foreground mb-2">
                Transparent, Practical, Nimble
              </h3>
              <p className="text-sm text-muted-foreground">
                No bloat, no corporate runaround—just clarity, speed, and
                measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want to Work with Us?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Whether you’re a brand ready to scale or a creator who wants real
            partnerships, let’s make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero text-lg px-8 py-4" asChild>
              <a href="/contact">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
