import { Link } from "react-router-dom";
import { Zap, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const navigation = {
    main: [
      { name: "Home", href: "/" },
      { name: "For Brands", href: "/brands" },
      { name: "For Influencers", href: "/influencers" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
    social: [
      {
        name: "Twitter",
        href: "https://twitter.com/YOUR_HANDLE",
        icon: Twitter,
      },
      {
        name: "LinkedIn",
        href: "https://linkedin.com/company/YOUR_COMPANY",
        icon: Linkedin,
      },
      { name: "Email", href: "mailto:sales@hypenestmedia.com", icon: Mail },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img
                src="/logo.png"
                alt="HypeNest Logo"
                className="w-48 h-24 object-contain"
              />
            </Link>
            <p className="text-sm text-primary-foreground/80 max-w-md mb-4">
              Connecting tech brands with the right influencers to drive
              authentic growth and engagement.
            </p>
            {/* Optional “made in” or bootstrapped */}
            <p className="text-xs text-primary-foreground/60">
              Made with <span className="text-red-500">♥</span> in India
              &nbsp;|&nbsp; contact:{" "}
              <a
                href="mailto:sales@hypenestmedia.com"
                className="hover:text-accent underline"
              >
                Info@hypenestmedia.com
              </a>
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

          {/* Contact / Social */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Connect</h3>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:sales@hypenestmedia.com"
                className="flex items-center text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                Info@hypenestmedia.com
              </a>
              <a
                href="https://twitter.com/YOUR_HANDLE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Twitter className="h-5 w-5 mr-2" />
                Twitter
              </a>
              <a
                href="https://linkedin.com/company/YOUR_COMPANY"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <p className="text-sm text-primary-foreground/60 text-center">
            © 2025 HypeNest Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
