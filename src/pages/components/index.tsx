import React from "react";
import { Section } from "@/components/partials/section";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Blocks } from "@/blocks";

type ComponentsPageProps = React.HTMLAttributes<HTMLElement>;

const COMPONENTS = {
  sectionName: "Components",
  sectionDescription:
    "Browse through our collection of reusable components built with shadcn/ui and Tailwind CSS.",
} as const;

const PREVIEW_COMPONENTS = Blocks();

const fireConfetti = (x: number, y: number) => {
  confetti({
    particleCount: 70,
    angle: 45,
    spread: 70,
    origin: { x, y },
    scalar: 0.7,
    zIndex: 1000,
  });
};

const PreviewCard = React.memo(
  ({ title, description, icon: Icon, path }: typeof PREVIEW_COMPONENTS[number]) => {
    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      if (path === "/components/promo") {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (rect.left + rect.width / 2.1) / window.innerWidth;
        const y = (rect.top + rect.height / 3) / window.innerHeight;

        fireConfetti(x, y);
      }
    };

    return (
      <Link to={path}>
        <Card
          className="group hover:shadow-md transition-all duration-200 overflow-hidden"
          data-confetti={path}
          onMouseEnter={handleMouseEnter}
        >
          <div className="aspect-[16/9] bg-secondary flex items-center justify-center group-hover:bg-muted/70 transition-colors">
            <Icon
              className="h-12 w-12 text-muted-foreground/60 group-hover:text-sky-500/75 transition-colors"
              strokeWidth={1.4}
            />
          </div>
          <CardHeader>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
        </Card>
      </Link>
    );
  }
);

export function ComponentsPage({ className, ...props }: ComponentsPageProps) {
  return (
    <Section className={className} {...props}>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          {COMPONENTS.sectionName}
        </h1>
        <div className="grid gap-4">
          <p className="text-xl text-muted-foreground">
            {COMPONENTS.sectionDescription}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {PREVIEW_COMPONENTS.map((component) => (
              <PreviewCard key={component.path} {...component} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
