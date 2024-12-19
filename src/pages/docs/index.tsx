import { Section } from "@/components/partials/section";

type DocsPageProps = React.HTMLAttributes<HTMLElement>;

const DOCS = {
  sectionName: "Documentation",
  sectionDescription: "Welcome to the UI Blocks documentation. Here you'll find comprehensive guides and documentation to help you start working with UI Blocks as quickly as possible.",
  gettingStarted: {
    title: "Getting Started",
    description: "Getting started with UI Blocks"
  }
} as const;

export function DocsPage({ className, ...props }: DocsPageProps) {
  return (
    <Section className={className} {...props}>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold tracking-tight mb-4">{DOCS.sectionName}</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-xl text-muted-foreground">
            {DOCS.sectionDescription}
          </p>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">{DOCS.gettingStarted.title}</h2>
            <p>{DOCS.gettingStarted.description}</p>
          </div>
        </div>
      </div>
    </Section>
  );
} 