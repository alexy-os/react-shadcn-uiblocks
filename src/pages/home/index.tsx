import { Link } from "react-router-dom";
import { Section } from "@/components/partials/section";
import { Button } from "@/components/ui/button";

type HomePageProps = React.HTMLAttributes<HTMLElement>;

const HOME = {
  title: "UI Blocks",
    description: "Beautiful and accessible React components for your next application. Built with shadcn/ui and Tailwind CSS.",
  links: {
    docs: {
      path: "/docs",
      label: "Get Started"
    },
    components: {
      path: "/components",
      label: "Browse Components"
    }
  }
} as const;

export function HomePage({ className, ...props }: HomePageProps) {
  return (
    <Section fullHeight className={className} {...props}>
      <div className="container mx-auto px-4 flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          {HOME.title}
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          {HOME.description}
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link to={HOME.links.docs.path}>{HOME.links.docs.label}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to={HOME.links.components.path}>{HOME.links.components.label}</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
} 