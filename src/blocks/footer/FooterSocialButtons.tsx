import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Send, Twitter, Volleyball } from "lucide-react"

type Content = {
  brand: string;
  description: string;
  placeholder: string;
  quickLinks: { id: string; label: string; href: string }[];
  contact: {
    address: string;
    city: string;
    phone: string;
    email: string;
  },
  socialMedia: { id: string; icon: React.ReactNode; label: string }[];
  legal: { id: string; label: string; href: string }[];
}

const content: Content = {
  brand: "BuildY/UI",
  description: "Easily build your website with our UI components",
  placeholder: "Your email",
  quickLinks: [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'about', label: 'About Us', href: '#' },
    { id: 'services', label: 'Services', href: '#' },
    { id: 'products', label: 'Products', href: '#' },
    { id: 'contact', label: 'Contact', href: '#' }
  ],
  contact: {
    address: "1st BuildY Street",
    city: "Shadcn City, BC 34567, Radix",
    phone: "(123) 456-7890",
    email: "welcome@buildy.co"
  },
  socialMedia: [
    { id: 'facebook', icon: <Facebook className="h-4 w-4" />, label: 'Facebook' },
    { id: 'twitter', icon: <Twitter className="h-4 w-4" />, label: 'Twitter' },
    { id: 'instagram', icon: <Instagram className="h-4 w-4" />, label: 'Instagram' },
    { id: 'linkedin', icon: <Linkedin className="h-4 w-4" />, label: 'LinkedIn' }
  ],
  legal: [
    { id: 'privacy', label: 'Privacy Policy', href: '#' },
    { id: 'terms', label: 'Terms of Service', href: '#' },
    { id: 'cookies', label: 'Cookie Settings', href: '#' }
  ]
} as const

type FooterSocialButtonsProps = React.ComponentPropsWithoutRef<"footer"> & Partial<Content>;

export const FooterSocialButtons = (props: FooterSocialButtonsProps) => {
  const { brand, description, placeholder, quickLinks, contact, socialMedia, legal } = {
    ...content,
    ...props
  };

  return (
    <footer className="w-full py-4 lg:py-8 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 text-2xl font-bold">
              <Volleyball className="mr-1 h-8 w-8 inline-block" /> {brand}
            </div>
            <p className="mb-6 text-muted-foreground">
              {description}
            </p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder={placeholder} 
                className="flex-grow" 
              />
              <Button 
                type="submit" 
                variant="secondary"
                size="icon" 
                className="ml-2"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              {quickLinks?.map((link) => (
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
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="not-italic space-y-2">
              <p>{contact.address}</p>
              <p>{contact.city}</p>
              <p>Phone: {contact.phone}</p>
              <p>Email: {contact.email}</p>
            </address>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-2">
              {socialMedia?.map((social) => (
                <Button 
                  key={social.id} 
                  variant="outline" 
                  size="icon"
                >
                  {social.icon}
                  <span className="sr-only">{social.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2024 BuildY/UI. All rights reserved
            </p>
            <nav className="flex gap-4">
              {legal?.map((item) => (
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