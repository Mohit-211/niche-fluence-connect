import { ArrowRight, Target, Users, BarChart3, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Layout from '@/components/Layout';
import heroBg from '@/assets/hero-bg.jpg';
import influencer1 from '@/assets/influencer-1.jpg';
import dashboardPreview from '@/assets/dashboard-preview.jpg';

const Index = () => {
  const features = [
    {
      icon: Target,
      title: 'Niche Targeting',
      description: 'Connect with influencers who specialize in SaaS and D2C tools, ensuring your message reaches the right audience.'
    },
    {
      icon: Users,
      title: 'Creator Matching',
      description: 'Our AI-powered matching system pairs your brand with influencers whose audience aligns perfectly with your target market.'
    },
    {
      icon: BarChart3,
      title: 'Performance Tracking',
      description: 'Get detailed analytics and ROI insights from every campaign to optimize your influencer marketing strategy.'
    }
  ];

  const featuredInfluencers = [
    {
      name: 'Sarah Chen',
      niche: 'SaaS Analytics',
      followers: '125K',
      engagement: '4.8%',
      image: influencer1
    },
    {
      name: 'Marcus Williams',
      niche: 'Productivity Tools',
      followers: '89K',
      engagement: '5.2%',
      image: influencer1
    },
    {
      name: 'Elena Rodriguez',
      niche: 'E-commerce Tech',
      followers: '156K',
      engagement: '4.5%',
      image: influencer1
    }
  ];

  const testimonials = [
    {
      quote: "InfluenceConnect helped us find the perfect creator for our project management tool. ROI increased by 340% in just three months.",
      author: "David Park",
      title: "CEO, TaskFlow"
    },
    {
      quote: "The quality of influencers and the seamless campaign management made this the best marketing investment we've made.",
      author: "Jennifer Kim",
      title: "Marketing Director, CloudSync"
    }
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 fade-in">
            Connect SaaS Tools with the 
            <span className="text-accent block mt-2">Perfect Influencers</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto slide-up">
            Drive authentic growth for your SaaS or D2C tool through targeted influencer partnerships that deliver real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up">
            <Button className="btn-hero text-lg px-8 py-4">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              Watch Demo
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
              We specialize in connecting SaaS and D2C tools with influencers who understand your market.
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
                  <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Influencers */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Creators
            </h2>
            <p className="text-xl text-muted-foreground">
              Meet some of our top-performing influencers in the SaaS space.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredInfluencers.map((influencer, index) => (
              <Card key={index} className="feature-card text-center">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <img 
                    src={influencer.image} 
                    alt={influencer.name}
                    className="w-full h-full object-cover rounded-full border-4 border-accent/20"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{influencer.name}</h3>
                <p className="text-accent font-medium mb-4">{influencer.niche}</p>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{influencer.followers} followers</span>
                  <span>{influencer.engagement} engagement</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by SaaS Founders
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our clients say about their experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="feature-card">
                <Quote className="h-8 w-8 text-accent mb-4" />
                <p className="text-lg text-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
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
            Ready to Scale Your SaaS with Influencers?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of successful SaaS companies using InfluenceConnect to drive growth.
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
