import { Link } from "react-router-dom"
import { Menu, BookOpen, Layers, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

const content = {
  brand: {
    name: "Buildy/UI",
    icon: Layers
  },
  navigation: [
    { 
      id: 'docs', 
      path: "/docs", 
      label: "Documentation", 
      icon: BookOpen 
    },
    { 
      id: 'components', 
      path: "/components", 
      label: "Components", 
      icon: Layers 
    }
  ],
  actions: [
    { 
      id: 'github', 
      path: "https://github.com/alexy-os/react-shadcn-uiblocks", 
      label: "GitHub", 
      icon: Github 
    }
  ]
} as const

const Brand = () => {
  const { name, icon: Icon } = content.brand
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-5 w-5" />
      <span className="font-semibold">{name}</span>
    </div>
  )
}

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px]">
        <div className="mb-6">
          <Brand />
        </div>
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Main navigation for mobile devices
        </SheetDescription>
        <nav className="flex flex-col space-y-2">
          {content.navigation.map((item) => (
            <Button 
              key={item.id} 
              variant="ghost" 
              className="justify-start w-full"
              asChild
            >
              <Link to={item.path}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

const HeroSection = () => (
<section className="w-full py-16 lg:py-32">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
    <div className="flex flex-col text-center gap-8 items-center">
        <div className="flex flex-col gap-4">
        <h2 className="max-w-2xl text-3xl md:text-4xl lg:text-6xl font-bold">Effortless Prototyping</h2>
        <p className="text-lg text-muted-foreground max-w-2xl">Streamline your development process with our flexible UI library. Experience effortless prototyping and create custom, responsive designs quickly and efficiently.</p>
        </div>
    </div>
    </div>
</section>
)

export const NavbarLineMenu = () => {
  return (
    <>
    <header className="sticky top-0 z-50 w-full border-b bg-background/95">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Brand />
        </div>

        <nav className="hidden md:flex items-center space-x-4">
          {content.navigation.map((item) => (
            <Button 
              key={item.id} 
              variant="ghost" 
              asChild
            >
              <Link to={item.path}>
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <MobileNavigation />
          
          {content.actions.map((action) => (
            <Button 
              key={action.id}
              variant="outline"
              className="hidden md:flex"
              asChild
            >
              <Link to={action.path}>
                <action.icon className="mr-2 h-4 w-4" />
                {action.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </header>
    <HeroSection />
    </>
  )
}