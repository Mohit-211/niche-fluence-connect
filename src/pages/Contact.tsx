import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Layout from '@/components/Layout';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    type: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@influenceconnect.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm PST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      description: 'Schedule a meeting at our office'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's Start a 
            <span className="text-accent block mt-2">Conversation</span>
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Ready to scale your SaaS with influencer marketing? We're here to help you get started.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="feature-card text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{info.title}</h3>
                  <p className="text-lg text-accent font-medium mb-2">{info.details}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-muted-foreground">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <Card className="p-8 shadow-large">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="type">Inquiry Type</Label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="brand">Brand Partnership</option>
                    <option value="creator">Creator Application</option>
                    <option value="support">Technical Support</option>
                    <option value="press">Press & Media</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, or any questions you have..."
                  rows={6}
                />
              </div>

              {/* File Upload Section */}
              <div className="space-y-2">
                <Label>Campaign Brief (Optional)</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-accent transition-colors">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Upload your campaign brief, product deck, or any relevant documents
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PDF, DOC, or PPT files up to 10MB
                  </p>
                  <Button variant="outline" className="mt-4" type="button">
                    Choose Files
                  </Button>
                </div>
              </div>

              <Button type="submit" className="btn-hero w-full text-lg py-3">
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Need Quick Answers?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-medium transition-shadow">
              <h3 className="font-semibold text-foreground mb-2">For Brands</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Learn about our campaign process, pricing, and success metrics.
              </p>
              <Button variant="outline" className="w-full">
                Brand FAQ
              </Button>
            </Card>
            
            <Card className="p-6 hover:shadow-medium transition-shadow">
              <h3 className="font-semibold text-foreground mb-2">For Creators</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Find out about application requirements, payouts, and partnerships.
              </p>
              <Button variant="outline" className="w-full">
                Creator FAQ
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;