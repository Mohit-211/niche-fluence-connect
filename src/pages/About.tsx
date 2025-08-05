import { Target, Users, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Layout from '@/components/Layout';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision Matching',
      description: 'We believe in quality over quantity. Our AI-powered matching ensures perfect alignment between brands and creators.'
    },
    {
      icon: Users,
      title: 'Authentic Partnerships',
      description: 'We foster genuine relationships that benefit both creators and brands, leading to better results and long-term success.'
    },
    {
      icon: Award,
      title: 'Excellence in Service',
      description: 'Our dedicated team provides white-glove service to ensure every campaign exceeds expectations and delivers measurable ROI.'
    }
  ];

  const stats = [
    { value: '500+', label: 'SaaS Brands Served' },
    { value: '10K+', label: 'Active Creators' },
    { value: '95%', label: 'Campaign Success Rate' },
    { value: '$50M+', label: 'Creator Earnings Paid' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Mission: Connecting SaaS with 
            <span className="text-accent block mt-2">Trusted Creators</span>
          </h1>
          <p className="text-xl text-white/90 mb-8">
            We're dedicated to helping SaaS and utility tools find the right audience through authentic creator partnerships.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              The Story Behind InfluenceConnect
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Founded in 2022, InfluenceConnect was born from a simple frustration: the disconnect between 
              innovative SaaS tools and the creators who could authentically promote them. As former SaaS 
              founders ourselves, we experienced firsthand the challenge of finding influencers who truly 
              understood our products and could communicate their value to the right audience.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Traditional influencer platforms were too broad, pairing productivity apps with lifestyle 
              influencers or matching enterprise software with beauty creators. We knew there had to be 
              a better way – a platform that specialized in the unique needs of the SaaS ecosystem.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              Today, InfluenceConnect has grown into the premier platform for SaaS and D2C influencer 
              marketing. We've facilitated over 2,000 successful campaigns, helping both emerging startups 
              and established companies scale their user base through authentic creator partnerships.
            </p>
            
            <blockquote className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
              <p className="text-xl italic text-foreground mb-4">
                "Our mission is simple: helping SaaS and utility tools find the right audience through 
                trusted creators who genuinely understand and use the products they promote."
              </p>
              <footer className="text-accent font-semibold">
                — Alex Chen, CEO & Co-founder
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
              These principles guide everything we do, from product development to customer service.
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
                  <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
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
              Our Impact by the Numbers
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from our platform and community.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Built by SaaS Veterans
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our team combines deep SaaS industry knowledge with influencer marketing expertise. 
            We've been in your shoes and understand the unique challenges of marketing B2B software.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="font-semibold text-foreground mb-2">Previous Exits</h3>
              <p className="text-sm text-muted-foreground">$500M+ combined</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="font-semibold text-foreground mb-2">SaaS Experience</h3>
              <p className="text-sm text-muted-foreground">15+ years average</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="font-semibold text-foreground mb-2">Marketing Campaigns</h3>
              <p className="text-sm text-muted-foreground">10,000+ managed</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="font-semibold text-foreground mb-2">Creator Relationships</h3>
              <p className="text-sm text-muted-foreground">Deep industry network</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Whether you're a SaaS founder or a creator, we'd love to have you be part of our growing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero text-lg px-8 py-4">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;