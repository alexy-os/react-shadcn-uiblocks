import React from "react"
import { Menu, BookOpen, Layers, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetDescription,
  } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const content = {
  brand: {
    name: "Buildy/UI",
    icon: Layers
  },
  navigation: {
    main: [
      { 
        id: 'getting-started', 
        label: "Getting Started", 
        subItems: [
          { 
            id: 'intro', 
            title: "Introduction", 
            description: "Re-usable components built using Radix UI and Tailwind CSS",
            href: "/docs" 
          },
          { 
            id: 'install', 
            title: "Installation", 
            description: "How to install dependencies and structure your app",
            href: "/docs/installation" 
          }
        ]
      },
      { 
        id: 'components', 
        label: "Components", 
        subItems: [
          { 
            id: 'alert-dialog', 
            title: "Alert Dialog", 
            description: "A modal dialog that interrupts the user with important content",
            href: "/docs/primitives/alert-dialog" 
          },
          { 
            id: 'hover-card', 
            title: "Hover Card", 
            description: "Preview content available behind a link",
            href: "/docs/primitives/hover-card" 
          }
        ]
      }
    ],
    static: [
      { 
        id: 'docs', 
        path: "/docs", 
        label: "Documentation", 
        icon: BookOpen 
      }
    ]
  },
  actions: [
    { 
      id: 'github', 
      path: "https://github.com/alexy-os/react-shadcn-uiblocks", 
      label: "GitHub", 
      icon: Github 
    }
  ]
} as const

type ListItemProps = React.ComponentPropsWithoutRef<"a"> & {
  title: string
  href?: string
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ title, children, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
)
ListItem.displayName = "ListItem"

const Brand = () => (
  <div className="flex items-center gap-2">
    <content.brand.icon className="h-5 w-5" />
    <span className="font-semibold">{content.brand.name}</span>
  </div>
)

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  className?: string
}

const NavLink = ({ children, className, ...props }: NavLinkProps) => (
  <a
    className={className}
    {...props}
  >
    {children}
  </a>
)

const MobileNavigation = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Open menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="w-[300px] overflow-y-auto">
      <div className="mb-6">
        <Brand />
      </div>
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Main navigation for mobile devices
        </SheetDescription>
      <Accordion type="single" collapsible className="w-full">
        {content.navigation.main.map((section) => (
          <AccordionItem key={section.id} value={section.id}>
            <AccordionTrigger className="text-sm">
              {section.label}
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-2">
                {section.subItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    className="justify-start w-full text-sm"
                    asChild
                  >
                    <NavLink href={item.href}>
                      {item.title}
                    </NavLink>
                  </Button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <nav className="mt-4 flex flex-col space-y-2">
        {content.navigation.static.map((item) => (
          <Button 
            key={item.id} 
            variant="ghost" 
            className="justify-start w-full"
            asChild
          >
            <NavLink href={item.path}>
              {item.icon && <item.icon className="mr-2 h-4 w-4" />}
              {item.label}
            </NavLink>
          </Button>
        ))}
        {content.actions.map((action) => (
          <Button 
            key={action.id}
            variant="outline"
            className="justify-start w-full"
            asChild
          >
            <NavLink href={action.path}>
              <action.icon className="mr-2 h-4 w-4" />
              {action.label}
            </NavLink>
          </Button>
        ))}
      </nav>
    </SheetContent>
  </Sheet>
)

const DesktopNavigation = () => (
  <NavigationMenu className="hidden md:block">
    <NavigationMenuList>
      {content.navigation.main.map((navItem) => (
        <NavigationMenuItem key={navItem.id}>
          <NavigationMenuTrigger>{navItem.label}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              {navItem.subItems.map((subItem) => (
                <ListItem
                  key={subItem.id}
                  title={subItem.title}
                  href={subItem.href}
                >
                  {subItem.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      ))}
{content.navigation.static.map((item) => (
  <NavigationMenuItem key={item.id}>
    <NavigationMenuLink asChild>
      <NavLink href={item.path} className={navigationMenuTriggerStyle()}>
        {item.label}
      </NavLink>
    </NavigationMenuLink>
  </NavigationMenuItem>
))}
    </NavigationMenuList>
  </NavigationMenu>
)

const HeroSection = () => (
  <section className="w-full py-16 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <div className="flex flex-col text-center gap-8 items-center">
          <div className="flex flex-col gap-4">
          <h2 className="max-w-2xl text-3xl md:text-4xl lg:text-6xl font-bold">NavLink Version Navbar</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
The NavLink component has been created, which replaces the React Router Link
All links now use the regular HTML tag `a`
Dependencies on react-router-domain have been removed
Added NavLinkProps interface for typing
All paths are now passed through the href attribute</p>
      </div>
      </div>
      </div>
  </section>
  )

export const NavbarMenuNoLink = () => {
  return (
    <>
    <header className="sticky top-0 z-50 w-full border-b bg-background/95">
      <div className="container mx-auto px-4 flex h-14 items-center">
        <div className="mr-4 flex">
          <Brand />
        </div>
        <DesktopNavigation />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <MobileNavigation />
          {content.actions.map((action) => (
            <Button 
              key={action.id}
              variant="outline"
              className="hidden md:flex"
              asChild
            >
              <NavLink href={action.path}>
                <action.icon className="mr-2 h-4 w-4" />
                {action.label}
              </NavLink>
            </Button>
          ))}
        </div>
      </div>
    </header>
    <HeroSection />
    </>
  )
}