import { ArrowRight, Upload, Users, Rocket, TrendingUp, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Layout from '@/components/Layout';
import dashboardPreview from '@/assets/dashboard-preview.jpg';

const Brands = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Submit Brief',
      description: 'Upload your campaign requirements, target audience, and budget details through our simple form.'
    },
    {
      icon: Users,
      title: 'Get Matched',
      description: 'Our AI algorithm finds and presents the best-fitting influencers for your SaaS or D2C tool.'
    },
    {
      icon: Rocket,
      title: 'Launch Campaign',
      description: 'Approve creators, set campaign guidelines, and watch your campaign go live across platforms.'
    },
    {
      icon: TrendingUp,
      title: 'Track Results',
      description: 'Monitor performance in real-time with detailed analytics and ROI tracking dashboard.'
    }
  ];

  const benefits = [
    'Access to 10,000+ vetted SaaS-focused influencers',
    'AI-powered matching for perfect audience alignment',
    'Real-time campaign performance tracking',
    'Dedicated campaign management support',
    'Transparent pricing with no hidden fees',
    'Guaranteed deliverables and timeline adherence'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Scale Your SaaS with 
            <span className="text-accent block mt-2">Targeted Influencer Campaigns</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Connect with influencers who understand your market and can authentically promote your SaaS or D2C tool to engaged audiences.
          </p>
          <Button className="btn-hero text-lg px-8 py-4">
            Start Your Campaign
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works for Brands
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Launch successful influencer campaigns in four simple steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="feature-card text-center relative">
                  <div className="absolute -top-4 left-4 bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
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
                Success Story: CloudSync
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                CloudSync, a file synchronization SaaS, partnered with us to reach productivity-focused audiences. 
                Through targeted influencer campaigns, they achieved remarkable results.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">340%</div>
                  <div className="text-sm text-muted-foreground">ROI Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">125K</div>
                  <div className="text-sm text-muted-foreground">New Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">45%</div>
                  <div className="text-sm text-muted-foreground">Conversion Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">3x</div>
                  <div className="text-sm text-muted-foreground">Brand Awareness</div>
                </div>
              </div>
              
              <Button className="btn-hero">
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
              Why Choose InfluenceConnect?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We specialize in SaaS and D2C marketing, ensuring better results for your campaigns.
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
            Ready to Launch Your Campaign?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 500+ SaaS companies that trust InfluenceConnect for their influencer marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero text-lg px-8 py-4">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Brands;