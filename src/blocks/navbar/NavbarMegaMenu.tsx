import * as React from "react";
import { Menu, BookOpen, Layers, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
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
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { registerViewScript } from '@/utils/viewScript';

type Content = {
  brand: {
    name: string;
    icon: React.ReactNode;
  };
  navigation: {
    main: {
      id: string;
      label: string;
      subItems: {
        id: string;
        title: string;
        description: string;
        href: string;
      }[];
    }[];
    static: {
      id: string;
      path: string;
      label: string;
      icon: React.ReactNode;
    }[];
  };
  actions: {
    id: string;
    path: string;
    label: string;
    icon: React.ReactNode;
  }[];
};

// Internal content
const content: Content = {
  brand: {
    name: "Buildy/UI",
    icon: <Layers className="h-5 w-5" />,
  },
  navigation: {
    main: [
      {
        id: "getting-started",
        label: "Getting Started",
        subItems: [
          {
            id: "intro",
            title: "Introduction",
            description:
              "Re-usable components built using Radix UI and Tailwind CSS",
            href: "#",
          },
          {
            id: "install",
            title: "Installation",
            description:
              "How to install dependencies and structure your app",
            href: "#",
          },
        ],
      },
      {
        id: "components",
        label: "Components",
        subItems: [
          {
            id: "alert-dialog",
            title: "Alert Dialog",
            description:
              "A modal dialog that interrupts the user with important content",
            href: "#",
          },
          {
            id: "hover-card",
            title: "Hover Card",
            description: "Preview content available behind a link",
            href: "#",
          },
        ],
      },
    ],
    static: [
      {
        id: "docs",
        path: "#",
        label: "Documentation",
        icon: <BookOpen className="h-5 w-5" />,
      },
    ],
  },
  actions: [
    {
      id: "github",
      path: "#",
      label: "GitHub",
      icon: <Github className="h-5 w-5" />,
    },
  ],
} as const;

type ListItemProps = React.ComponentPropsWithoutRef<"a"> & {
  title: string;
  href?: string;
};

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ title, children, href, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href || ""}
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
);
ListItem.displayName = "ListItem";

const Brand = () => {
  const { name } = content.brand;
  return (
    <div className="flex items-center gap-2">
      <Layers className="h-5 w-5" />
      <span className="font-semibold">{name}</span>
    </div>
  );
};

const MobileNavigation = () => {
  return (
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
        <nav className="flex flex-col">
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
                        <a href={item.href}>{item.title}</a>
                      </Button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-4 flex flex-col space-y-2">
            {content.navigation.static.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className="justify-start w-full"
                asChild
              >
                <a href={item.path}>
                  {item.icon}
                  {item.label}
                </a>
              </Button>
            ))}
            {content.actions.map((action) => (
              <Button
                key={action.id}
                variant="outline"
                className="justify-start w-full"
                asChild
              >
                <a href={action.path}>
                  {action.icon}
                  {action.label}
                </a>
              </Button>
            ))}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

const DesktopNavigation = () => (
  <nav className="hidden md:block">
    <NavigationMenu>
      <NavigationMenuList>
        {content.navigation.main.map((navItem) => (
          <NavigationMenuItem key={navItem.id}>
            <NavigationMenuTrigger>{navItem.label}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                {navItem.subItems.map((subItem) => (
                  <ListItem key={subItem.id} title={subItem.title} href={subItem.href}>
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
              <a href={item.path} className={navigationMenuTriggerStyle()}>
                {item.label}
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  </nav>
);

type NavbarProps = React.ComponentPropsWithoutRef<"header"> & Partial<Content>;

export const NavbarMegaMenu = (props: NavbarProps) => {
  const { actions } = {
    ...content,
    ...props,
  };

  return (
    <>
      <header className="sticky top-0 z-20 w-full border-b bg-background/95">
        <div className="container mx-auto px-4 flex h-14 items-center">
          <div className="mr-4 flex">
            <Brand />
          </div>
          <DesktopNavigation />
          <div className="flex flex-1 items-center justify-end space-x-2">
            <MobileNavigation />
            {actions.map((action) => (
              <Button
                key={action.id}
                variant="outline"
                className="hidden md:flex"
                asChild
              >
                <a href={action.path}>
                  {action.icon}
                  {action.label}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </header>
      <HeroSection />
    </>
  );
};

const HeroSection = () => (
  <section className="w-full py-16 lg:py-32">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <div className="flex flex-col text-center gap-8 items-center">
        <div className="flex flex-col gap-4">
          <h2 className="max-w-2xl text-3xl md:text-4xl lg:text-6xl font-bold">
            How do use the navbar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Content Hero
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Strict adherence to the current component name
const componentName = "NavbarMegaMenu" as const;

// Register the ViewScript for this component
registerViewScript(componentName, () => `
<script>
    let isMenuOpen = false;
    let activeSubmenu = null;
    const burgerBtn = document.querySelector('[aria-controls="radix-:Rt:"]');
    const desktopButtons = document.querySelectorAll('[data-radix-collection-item]');
    const mobileSheet = document.createElement('div');
    mobileSheet.className = 'fixed inset-y-0 right-0 w-[80%] max-w-sm bg-background shadow-xl transform translate-x-full transition-transform duration-300 z-20';
    mobileSheet.innerHTML = \` <div class="p-4 space-y-4"><div class="flex justify-between items-center"><h2 class="text-lg font-semibold">Menu</h2><button class="close-sheet p-2">✕</button></div><div class="space-y-2"> \${Array.from(desktopButtons).map(btn => \` <div class="mobile-menu-item"><button class="w-full text-left p-3 hover:bg-accent rounded-md flex justify-between items-center"> \${btn.textContent} </button><div class="submenu hidden pl-4 space-y-2 mt-2"><a href="#" class="block p-2 hover:bg-accent rounded-md">Submenu Item 1</a><a href="#" class="block p-2 hover:bg-accent rounded-md">Submenu Item 2</a></div></div> \`).join('')} </div></div> \`;

    function handleDesktopMenu() {
      desktopButtons.forEach(btn => {
      if (!btn.hasAttribute('aria-expanded')) return;
      const submenu = document.createElement('div');
      submenu.className = 'absolute top-full left-0 mt-2 w-48 bg-background shadow-lg rounded-md hidden';
      submenu.innerHTML = \` <div class="p-2 space-y-1"><a href="#" class="block px-3 py-2 rounded-md hover:bg-accent">Submenu Item 1</a><a href="#" class="block px-3 py-2 rounded-md hover:bg-accent">Submenu Item 2</a></div> \`;
      btn.parentElement.appendChild(submenu);
      btn.addEventListener('click', () => {
        const isOpen = btn.getAttribute('data-state') === 'open';
        if (isOpen) {
        btn.setAttribute('data-state', 'closed');
        submenu.classList.add('hidden');
        } else {
        btn.setAttribute('data-state', 'open');
        submenu.classList.remove('hidden');
        }
      });
      });
    }
    function handleMobileMenu() {
      document.body.appendChild(mobileSheet);
      burgerBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      mobileSheet.style.transform = isMenuOpen ? 'translateX(0)' : 'translateX(100%)';
      });
      mobileSheet.querySelector('.close-sheet').addEventListener('click', () => {
      isMenuOpen = false;
      mobileSheet.style.transform = 'translateX(100%)';
      });
      mobileSheet.querySelectorAll('.mobile-menu-item button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const submenu = e.currentTarget.nextElementSibling;
        submenu.classList.toggle('hidden');
      });
      });
    }
    handleDesktopMenu();
    handleMobileMenu();
    document.addEventListener('click', (e) => {
      if (!e.target.closest('[data-radix-collection-item]')) {
      desktopButtons.forEach(btn => {
        btn.setAttribute('data-state', 'closed');
        const submenu = btn.parentElement.querySelector('.absolute');
        if (submenu) submenu.classList.add('hidden');
      });
      }
    });
</script>
`);