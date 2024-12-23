import { Info, Rocket } from "lucide-react";
import { Badge, type BadgeProps } from "@/components/ui/badge";
import { Button, type ButtonProps } from "@/components/ui/button";

type Content = {
  badge?: BadgeProps & {
    text: string;
  };
  title: string;
  description: string;
  buttons?: (ButtonProps & {
    id: string;
    text: string;
    icon?: React.ReactNode;
  })[];
};

const content: Content = {
  badge: {
    text: "Start Now"
  },
  title: "Explore Our BuildY!",
  description: "Simplify your business operations with our cutting-edge solution. Say goodbye to time-consuming manual processes and hello to efficient, streamlined management.",
  buttons: [
    {
      id: "btn1",
      text: "Learn More",
      variant: "default",
      size: "lg",
      className: "flex justify-center gap-4",
      icon: <Info />
    },
    {
      id: "btn2",
      text: "Get Started",
      variant: "outline",
      size: "lg",
      className: "flex justify-center gap-4",
      icon: <Rocket />
    }
  ]
} as const;

type HeroCenteredSectionProps = React.ComponentPropsWithoutRef<"section"> & Partial<Content>;

export const HeroCenteredSection = (props: HeroCenteredSectionProps) => {
  const { badge, title, description, buttons } = {
    ...content,
    ...props
  };

  return (
    <>
      <section className="w-full py-16 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col text-center gap-8 items-center">
            {badge &&
            <div className="flex justify-center">
              <Badge className="rounded-full">{badge.text}</Badge>
            </div>
            }
            <div className="flex flex-col gap-4">
              <h2 className="max-w-2xl text-3xl md:text-4xl lg:text-6xl font-bold">
                {title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                {description}
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              {buttons?.map((button) => (
                <Button
                  key={button.id}
                  className={button.className}
                  variant={button.variant}
                  size={button.size}
                >
                  {button.text} {button.icon}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};