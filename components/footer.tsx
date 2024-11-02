import { Brain, Youtube, Instagram, Twitter, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const socialLinks = [
    { name: 'YouTube', url: 'https://youtube.com/@ayushsingh1214', icon: Youtube },
    { name: 'Instagram', url: 'https://instagram.com/nomad.ayush', icon: Instagram },
    { name: 'Twitter', url: 'https://twitter.com/itzme_ayush_', icon: Twitter },
    { name: 'GitHub', url: 'https://github.com/ayushs1214', icon: Github },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/ayush-singh-a29909187', icon: Linkedin },
  ];

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="w-6 h-6" />
              <span className="font-bold text-xl">GAMA</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transform your content into engaging questions and answers with our advanced AI-powered platform.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-sm text-muted-foreground hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-sm text-muted-foreground hover:text-primary">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-muted-foreground hover:text-primary">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2024 GAMA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}