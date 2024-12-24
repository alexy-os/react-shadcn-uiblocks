import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HandHeart, Handshake, HeartHandshake, HandCoins } from "lucide-react";

type Content = {
  title: string;
  promotitle: string;
  description: string;
  features: {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
};

const content: Content = {
  title: "How It",
  promotitle: "Works",
  description:
    "Discover how Buildy/UI simplifies UI development step-by-step with modern tools and minimalistic components.",
  features: [
    {
      id: "accessibility",
      icon: <HandHeart className="w-16 h-16 stroke-1 text-sky-700" />, // Custom size and color
      title: "Accessibility",
      description:
        "Ensure inclusive and user-friendly components accessible to all users.",
    },
    {
      id: "community",
      icon: <HeartHandshake className="w-16 h-16 stroke-1 text-sky-700" />, // Custom size and color
      title: "Community",
      description:
        "Leverage an active developer community contributing to continuous improvement.",
    },
    {
      id: "scalability",
      icon: <Handshake className="w-16 h-16 stroke-1 text-sky-700" />, // Custom size and color
      title: "Scalability",
      description:
        "Scale effortlessly with modular, reusable components built for growth.",
    },
    {
      id: "design",
      icon: <HandCoins className="w-16 h-16 stroke-1 text-sky-700" />, // Custom size and color
      title: "Consistency",
      description:
        "Achieve a cohesive design system tailored to your branding needs.",
    },
  ],
} as const;

type PromoHowItWorksProps = React.ComponentPropsWithoutRef<"section"> & Partial<Content>;

export const PromoHowItWorks = (props: PromoHowItWorksProps) => {
  const { title, promotitle, description, features } = {
    ...content,
    ...props
  };

  return (
  <section className="w-full py-16 lg:py-32">
    <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
      <header className="space-y-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          {title}{" "}
          <span className="bg-gradient-to-b from-sky-500 to-sky-700 text-transparent bg-clip-text">
          {promotitle}
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {features?.map(({ id, icon, title, description }) => (
          <Card key={id} className="relative p-[1px] bg-gradient-to-br from-sky-600 to-sky-300 dark:to-slate-600 rounded-2xl">
            <div className="bg-secondary rounded-2xl h-full">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                <span className="text-xl font-semibold">{title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                {description}
              </p>
            </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
  );
};