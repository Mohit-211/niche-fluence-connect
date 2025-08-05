import { Link } from 'react-router-dom';
import { Zap, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'For Brands', href: '/brands' },
      { name: 'For Influencers', href: '/influencers' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
    social: [
      { name: 'Twitter', href: '#', icon: Twitter },
      { name: 'LinkedIn', href: '#', icon: Linkedin },
      { name: 'Email', href: 'mailto:hello@influenceconnect.com', icon: Mail },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-accent p-2 rounded-lg">
                <Zap className="h-6 w-6 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">InfluenceConnect</span>
            </div>
            <p className="text-sm text-primary-foreground/80 max-w-md">
              Connecting SaaS and D2C tools with the perfect influencers to drive authentic growth and engagement.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <p className="text-sm text-primary-foreground/60 text-center">
            © 2024 InfluenceConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;