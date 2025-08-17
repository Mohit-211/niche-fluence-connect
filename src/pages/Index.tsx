import {
  ArrowRight,
  Target,
  Users,
  BarChart3,
  Star,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import influencer1 from "@/assets/influencer-1.jpg";
import dashboardPreview from "@/assets/dashboard-preview.jpg";
import { Link, useLocation } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Target,
      title: "Niche Targeting",
      description:
        "Connect with influencers who are already part of your industry’s conversation.",
    },
    {
      icon: Users,
      title: "Creator Matching",
      description:
        "Our proprietary system pairs your brand with creators whose following matches your ideal user - no more wasted spend.",
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description:
        "Get detailed campaign insights and real ROI metrics, not just “likes” and empty impressions.",
    },
  ];

  const featuredInfluencers = [
    {
      name: "Sarah Chen",
      niche: "SaaS Analytics",
      followers: "125K",
      engagement: "4.8%",
      image: influencer1,
    },
    {
      name: "Marcus Williams",
      niche: "Productivity Tools",
      followers: "89K",
      engagement: "5.2%",
      image: influencer1,
    },
    {
      name: "Elena Rodriguez",
      niche: "E-commerce Tech",
      followers: "156K",
      engagement: "4.5%",
      image: influencer1,
    },
  ];

  const testimonials = [
    {
      quote:
        "HypeNest helped us find the perfect creator for our project management tool. ROI increased by 70% in just three months.",
      author: "Arjun Mehta",
      title: "Bangalore",
    },
    {
      quote:
        "The quality of influencers and the seamless campaign management made this the best marketing investment we've made.",
      author: "Neha Kapoor",
      title: "New Delhi",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 fade-in">
            Turn Your Tech Product Into a
            <span className="text-accent block mt-2">Brand People Trust</span>
          </h1>
          {/* Accent Line */}
          <div
            className="text-lg md:text-xl font-semibold text-emerald-300 mb-4 fade-in"
            style={{ letterSpacing: ".01em" }}
          >
            HypeNest matches tech brands with real influence, not just
            followers.
          </div>
          {/* Main Description */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto slide-up">
            Connect with top creators in your niche and launch influencer
            campaigns that actually move the needle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up">
            <Button asChild className="btn-hero text-lg px-8 py-4">
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Unique Approach
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We connect tech brands with creators who actually know your
              audience. Forget spray-and-pray marketing. Every campaign is
              matched, measured, and tuned for real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="feature-card text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Micro-Ambassador Approach (compact) */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            From Celebrity Ambassadors to{" "}
            <span className="text-accent">Micro-Ambassadors</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            Brand advocacy used to be limited to a single, expensive face.
            Today, multiple niche influencers act as authentic
            micro-ambassadors—each bringing a loyal audience that trusts their
            judgment. The result: broader relevance, higher credibility, and
            more efficient spend.
          </p>
          <ul className="text-sm md:text-base text-muted-foreground grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <li className="bg-card border border-border rounded-lg px-4 py-3">
              Trust transfers from creator to brand
            </li>
            <li className="bg-card border border-border rounded-lg px-4 py-3">
              Targeted reach across multiple niches
            </li>
            <li className="bg-card border border-border rounded-lg px-4 py-3">
              Scalable impact without celebrity costs
            </li>
          </ul>
          <Button asChild className="btn-hero">
            <a href="/contact">Build Your Micro-Ambassador Roster</a>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Tech Founders
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our clients say about their experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="feature-card">
                <Quote className="h-8 w-8 text-accent mb-4" />
                <p className="text-lg text-foreground mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Your Product in Front of the Right Audience?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start your HypeNest campaign today—skip the hype, get real results.
          </p>
          <Button className="btn-hero text-lg px-8 py-4">
            Start Your Campaign Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
