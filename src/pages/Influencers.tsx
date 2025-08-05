import { ArrowRight, DollarSign, Handshake, Star, TrendingUp, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Layout from '@/components/Layout';
import influencer1 from '@/assets/influencer-1.jpg';

const Influencers = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Premium Payouts',
      description: 'Earn 20-50% more than other platforms with our fair compensation structure and quick payment processing.'
    },
    {
      icon: Handshake,
      title: 'Long-term Partnerships',
      description: 'Build lasting relationships with high-quality SaaS brands that value authentic, ongoing collaborations.'
    },
    {
      icon: Star,
      title: 'Quality Brands Only',
      description: 'Work exclusively with vetted SaaS and D2C companies that align with your audience and values.'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Access exclusive opportunities, masterclasses, and networking events to grow your influence.'
    },
    {
      icon: Users,
      title: 'Perfect Audience Match',
      description: 'Get matched with brands whose target audience aligns perfectly with your follower demographics.'
    },
    {
      icon: Shield,
      title: 'Full Support',
      description: 'Dedicated account management, creative guidance, and 24/7 support throughout your campaigns.'
    }
  ];

  const testimonials = [
    {
      quote: "InfluenceConnect has connected me with amazing SaaS brands that my audience genuinely loves. The payouts are consistently higher than other platforms.",
      author: "Sarah Chen",
      title: "Tech Content Creator",
      followers: "125K followers"
    },
    {
      quote: "Finally, a platform that understands the SaaS space. I've built long-term partnerships with three companies through InfluenceConnect this year.",
      author: "Marcus Williams", 
      title: "Productivity Expert",
      followers: "89K followers"
    }
  ];

  const stats = [
    { value: '$50K+', label: 'Average Annual Earnings' },
    { value: '95%', label: 'Creator Satisfaction Rate' },
    { value: '30+', label: 'Days Average Campaign' },
    { value: '24hrs', label: 'Payment Processing' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Monetize Your Influence with 
            <span className="text-accent block mt-2">Premium SaaS Brands</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join our exclusive network of creators and work with the best SaaS and D2C companies. 
            Higher payouts, better brands, lasting partnerships.
          </p>
          <Button className="btn-hero text-lg px-8 py-4">
            Apply to Join
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
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
              Why Join InfluenceConnect?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're not just another influencer platform. We're your gateway to the lucrative SaaS market.
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
                  <h3 className="text-xl font-semibold text-foreground mb-4">{benefit.title}</h3>
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
              Success Stories from Our Creators
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from influencers who've grown their income with our platform.
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
                    <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    <p className="text-xs text-accent">{testimonial.followers}</p>
                  </div>
                </div>
                <p className="text-lg text-foreground italic">"{testimonial.quote}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Apply now and join our exclusive network of SaaS-focused creators. Our team reviews applications within 48 hours.
          </p>
          
          <div className="bg-card p-8 rounded-2xl shadow-medium border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">Application Requirements:</h3>
            <ul className="text-left space-y-2 mb-8">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                <span className="text-muted-foreground">Minimum 10K followers on primary platform</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                <span className="text-muted-foreground">Content focus on tech, business, or productivity</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                <span className="text-muted-foreground">Consistent engagement rate above 2%</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                <span className="text-muted-foreground">Professional content quality and authenticity</span>
              </li>
            </ul>
            
            <Button className="btn-hero text-lg px-8 py-4">
              Start Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Influencers;