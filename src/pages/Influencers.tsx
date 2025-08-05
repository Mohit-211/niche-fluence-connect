import {
  ArrowRight,
  DollarSign,
  Handshake,
  Star,
  TrendingUp,
  Users,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import influencer1 from "@/assets/influencer-1.jpg";

const Influencers = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Premium Payouts",
      description:
        "Earn more for your work—top-tier brands, no “race to the bottom” fees, always on time.",
    },
    {
      icon: Handshake,
      title: "Long-Term Partnerships",
      description:
        "We’re not a gig platform. We build real, lasting collaborations between you and leading tech brands.",
    },
    {
      icon: Star,
      title: "Quality Brands Only",
      description:
        "You’ll only work with vetted SaaS and D2C clients relevant to your audience—no mismatched deals, ever.",
    },
    {
      icon: TrendingUp,
      title: "Grow Your Influence",
      description:
        "Access exclusive brand opportunities, learn from industry experts, and expand your professional network.",
    },
    {
      icon: Users,
      title: "Perfect Audience Match",
      description:
        "We handpick partnerships so you reach brands whose users actually want your content.",
    },
    {
      icon: Shield,
      title: "Dedicated Support",
      description:
        "Real humans, not chatbots. From negotiation to creative, our team has your back—always.",
    },
  ];

  const testimonials = [
    {
      quote:
        "HypeNest connected me with SaaS brands that actually understand my audience. The partnerships have been genuinely rewarding—creatively and financially.",
      author: "Sarah Chen",
      title: "Tech Content Creator",
      followers: "125K followers",
    },
    {
      quote:
        "I’ve stopped chasing random gigs. Now, I work with companies that want a real, ongoing relationship. HypeNest made it easy.",
      author: "Marcus Williams",
      title: "Productivity Expert",
      followers: "89K followers",
    },
  ];

  const stats = [
    { value: "$50K+", label: "Avg. Annual Earnings" },
    { value: "95%", label: "Creator Satisfaction" },
    { value: "30+", label: "Day Avg. Campaign" },
    { value: "24hrs", label: "Payment Processing" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Monetize Your Influence?
            <span className="text-accent block mt-2">
              Partner with Top Tech Brands
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Skip the “creator platform” noise. Work directly with leading SaaS
            and D2C companies through HypeNest. Higher payouts. Fewer headaches.
            Real relationships.
          </p>
          <Button className="btn-hero text-lg px-8 py-4" asChild>
            <a href="/contact">
              Apply to Join
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
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

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Influencers Choose HypeNest
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We’re not another “platform.” We’re your agency, your advocate,
              and your direct line to the best brands in tech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="feature-card text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Creator Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Real Stories. Real Growth.
            </h2>
            <p className="text-xl text-muted-foreground">
              Influencers trust HypeNest for real partnerships—not one-off gigs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="feature-card">
                <div className="flex items-center mb-6">
                  <img
                    src={influencer1}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-accent/20 mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                    <p className="text-xs text-accent">
                      {testimonial.followers}
                    </p>
                  </div>
                </div>
                <p className="text-lg text-foreground italic">
                  "{testimonial.quote}"
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Join the HypeNest Network?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We review all applications individually—no bots, no forms into a
            void. If you create for tech, business, or productivity, we want to
            talk.
          </p>

          <div className="bg-card p-8 rounded-2xl shadow-medium border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Requirements:
            </h3>
            <ul className="text-left space-y-2 mb-8">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                <span className="text-muted-foreground">
                  Minimum 10K followers on your primary channel
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                <span className="text-muted-foreground">
                  Tech, business, or productivity focus
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                <span className="text-muted-foreground">
                  Consistent engagement above 2%
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                <span className="text-muted-foreground">
                  Professionalism & authentic content
                </span>
              </li>
            </ul>

            <Button className="btn-hero text-lg px-8 py-4" asChild>
              <a href="/contact">
                Start Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Influencers;
