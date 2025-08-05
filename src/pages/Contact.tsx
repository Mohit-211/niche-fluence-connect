import { useState } from "react";
import { Mail, Phone, MapPin, Send, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import { db } from "@/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    brandGoals: "",
    referral: "",
    scheduleCall: false,
    message: "",
    type: "general",
  });

  // ONLY ONE handleSubmit!
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contact-messages"), {
        ...formData,
        createdAt: Timestamp.now(),
      });
      alert("Thanks! Your message was submitted.");
      setFormData({
        name: "",
        email: "",
        company: "",
        brandGoals: "",
        referral: "",
        scheduleCall: false,
        message: "",
        type: "general",
      });
    } catch (error) {
      alert("Failed to submit. Please try again or email us directly.");
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type: fieldType, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: fieldType === "checkbox" ? checked : value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "Info@hypenestmedia.com",
      description: "We reply within 24 hours",
    },
    {
      icon: Phone,
      title: "Call",
      details: "+91 93546 28317",
      description: "Mon–Fri, 10am–7pm IST",
    },
    {
      icon: MapPin,
      title: "Our Office",
      details: "Gurgaon, India",
      description: "Global clients welcome",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let’s Start a{" "}
            <span className="text-accent block mt-2">Conversation</span>
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Looking to amplify your tech brand? Or ready to collaborate as a
            creator? Reach out and let’s make influence work for you.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <Card key={idx} className="feature-card text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="text-lg text-accent font-medium mb-2">
                    {info.details}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {info.description}
                  </p>
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
              Tell Us About Your Project
            </h2>
            <p className="text-xl text-muted-foreground">
              Fill out the form below. Our team will respond within 24 hours.
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
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Company/Brand</Label>
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
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="brand">Brand Partnership</option>
                    <option value="creator">Creator Collaboration</option>
                    <option value="press">Press & Media</option>
                  </select>
                </div>
              </div>

              {/* New: Brand Goals/Short Pitch */}
              <div className="space-y-2">
                <Label htmlFor="brandGoals">Describe Your Brand/Goals</Label>
                <Input
                  id="brandGoals"
                  name="brandGoals"
                  type="text"
                  value={formData.brandGoals}
                  onChange={handleChange}
                  placeholder="Ex: Launching a new SaaS for productivity"
                />
              </div>

              {/* New: Referral Source */}
              <div className="space-y-2">
                <Label htmlFor="referral">
                  How did you hear about HypeNest?
                </Label>
                <select
                  id="referral"
                  name="referral"
                  value={formData.referral}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select</option>
                  <option value="Google">Google</option>
                  <option value="Referral">Referral</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Event">Industry Event</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Checkbox for Scheduling Call */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="scheduleCall"
                  name="scheduleCall"
                  checked={formData.scheduleCall}
                  onChange={handleChange}
                  className="form-checkbox accent-accent h-5 w-5"
                />
                <Label
                  htmlFor="scheduleCall"
                  className="text-sm text-muted-foreground"
                >
                  I’d like to schedule a discovery call
                </Label>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your campaign, goals, or any questions you have…"
                  rows={6}
                />
              </div>

              {/* File Upload Placeholder */}
              <div className="space-y-2">
                <Label>Campaign Brief (Optional)</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-accent transition-colors">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">
                    File uploads coming soon—email your brief to{" "}
                    <a
                      href="mailto:hello@hypenestmedia.com"
                      className="underline text-accent"
                    >
                      hello@hypenestmedia.com
                    </a>
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    type="button"
                    disabled
                  >
                    File Upload Coming Soon
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
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-medium transition-shadow">
              <h3 className="font-semibold text-foreground mb-2">
                Working With Us
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Answers on minimum campaign size, launch speed, and typical
                results.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="/faq">View Brand FAQs</a>
              </Button>
            </Card>
            <Card className="p-6 hover:shadow-medium transition-shadow">
              <h3 className="font-semibold text-foreground mb-2">
                For Creators
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Learn how we select creators, payouts, and what makes a great
                partnership.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="/faq">View Creator FAQs</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
