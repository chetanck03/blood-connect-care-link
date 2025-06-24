
import { getDayOfYear } from "date-fns";
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from '../components/img/logo.png';

const Footer = () => {

  const year = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "How It Works", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Support", href: "#" }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-700 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src={logo}  alt="B-Donor Logo" className="h-12 w-12 rounded-full object-cover" />
              <span className="text-2xl font-bold text-white ml-2">B-Donor</span>
            </div>
            <p className="text-slate-300 mb-4">
              Connecting lives through voluntary blood donation. Making healthcare accessible to everyone.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-slate-400 hover:text-medical-blue transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-slate-300 hover:text-medical-blue transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center text-slate-300">
                <Phone className="h-4 w-4 text-medical-red mr-2" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Mail className="h-4 w-4 text-medical-blue mr-2" />
                <span>support@bdonor.com</span>
              </div>
              <div className="flex items-start text-slate-300">
                <MapPin className="h-4 w-4 text-medical-green mr-2 mt-1" />
                <span>123 Medical Plaza, Healthcare District, Mumbai, Maharashtra 400001</span>
              </div>
            </div>
          </div>

          {/* Emergency */}
          <div>
            <h3 className="text-white font-semibold mb-4">Emergency</h3>
            <div className="bg-gradient-to-r from-medical-red/20 to-transparent p-4 rounded-lg border border-medical-red/30">
              <p className="text-medical-red font-bold text-2xl">108</p>
              <p className="text-slate-300 text-sm">24/7 Emergency Helpline</p>
            </div>
            <div className="mt-4">
              <p className="text-slate-300 text-sm">
                For medical emergencies and urgent blood requirements
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {year} B-Donor Healthcare Solutions. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm mt-2 md:mt-0">
            Made with <Heart className="inline h-4 w-4 text-medical-red" /> for humanity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
