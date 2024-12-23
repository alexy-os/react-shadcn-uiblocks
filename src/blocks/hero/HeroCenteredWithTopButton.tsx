import { Info, Rocket, MoveRight } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";

type Content = {
  badge?: {
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
    text: "Let's Go to Buildy/UI"
  },
  title: "Effortless Prototyping",
  description: "Streamline your development process with our flexible UI library. Experience effortless prototyping and create custom, responsive designs quickly and efficiently.",
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

type HeroCenteredWithTopButtonProps = React.ComponentPropsWithoutRef<"section"> & Partial<Content>;

export const HeroCenteredWithTopButton = (props: HeroCenteredWithTopButtonProps) => {
  const { badge, title, description, buttons } = {
    ...content,
    ...props
  };

  return (
    <section className="w-full py-16 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col text-center gap-8 items-center">
          <div>
            <Button size="sm" variant="outline" className="rounded-full h-7">
              {badge?.text} <MoveRight />
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="max-w-2xl text-3xl md:text-4xl lg:text-5xl font-bold">
              {title}
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl">
              {description}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            {buttons?.map((button) => (
              <Button key={button.id} className={button.className} variant={button.variant} size={button.size}>
                {button.text} {button.icon}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};