import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react"

const content = {
  newsletter: {
    title: "Stay Connected",
    description: "Join our newsletter for the latest updates and exclusive offers.",
    placeholder: "Enter your email"
  },
  quickLinks: [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'about', label: 'About Us', href: '#' },
    { id: 'services', label: 'Services', href: '#' },
    { id: 'products', label: 'Products', href: '#' },
    { id: 'contact', label: 'Contact', href: '#' }
  ],
  contact: {
    address: "123 Innovation Street",
    city: "Tech City, TC 12345",
    phone: "(123) 456-7890",
    email: "hello@example.com"
  },
  socialMedia: [
    { id: 'facebook', icon: Facebook, label: 'Facebook' },
    { id: 'twitter', icon: Twitter, label: 'Twitter' },
    { id: 'instagram', icon: Instagram, label: 'Instagram' },
    { id: 'linkedin', icon: Linkedin, label: 'LinkedIn' }
  ],
  legal: [
    { id: 'privacy', label: 'Privacy Policy', href: '#' },
    { id: 'terms', label: 'Terms of Service', href: '#' },
    { id: 'cookies', label: 'Cookie Settings', href: '#' }
  ]
} as const

export const FooterSocialButtons = () => {
  return (
    <footer className="w-full py-4 lg:py-8 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Newsletter Section */}
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              {content.newsletter.title}
            </h2>
            <p className="mb-6 text-muted-foreground">
              {content.newsletter.description}
            </p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder={content.newsletter.placeholder} 
                className="flex-grow" 
              />
              <Button 
                type="submit" 
                size="icon" 
                className="ml-2"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              {content.quickLinks.map((link) => (
                <a 
                  key={link.id} 
                  href={link.href} 
                  className="block hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="not-italic space-y-2">
              <p>{content.contact.address}</p>
              <p>{content.contact.city}</p>
              <p>Phone: {content.contact.phone}</p>
              <p>Email: {content.contact.email}</p>
            </address>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-2">
              {content.socialMedia.map((social) => (
                <Button 
                  key={social.id} 
                  variant="outline" 
                  size="icon"
                >
                  <social.icon className="h-4 w-4" />
                  <span className="sr-only">{social.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t pt-8 text-center">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2024 BuildY/UI. All rights reserved
            </p>
            <nav className="flex gap-4">
              {content.legal.map((item) => (
                <a 
                  key={item.id} 
                  href={item.href} 
                  className="hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}