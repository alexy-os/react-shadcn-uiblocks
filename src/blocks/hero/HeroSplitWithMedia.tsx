import { Button, type ButtonProps } from "@/components/ui/button";

type Content = {
  title: string;
  description: string;
  buttons?: (ButtonProps & {
    id: string;
    text: string;
    icon?: React.ReactNode;
  })[];
    image: {
        src: string;
        alt: string;
        className: string;
    };
};

const content: Content = {
    title: "Transform Your Workflow",
    description: "Streamline your development process with our powerful tools and components.",
    buttons: [
        { id: "button1", text: "Try Now", variant: "default" },
        { id: "button2", text: "View Demo", variant: "outline" }
    ],
    image: {
        src: "https://placehold.co/400/?text=Hero Image",
        alt: "Hero Image",
        className: "w-full h-full object-cover rounded-lg"
    }
} as const;

type HeroSplitWithMediaProps = React.ComponentPropsWithoutRef<"section"> & Partial<Content>;

export const HeroSplitWithMedia = (props: HeroSplitWithMediaProps) => {
    const { title, description, buttons, image } = {
        ...content,
        ...props
    };

    return (
        <section className="w-full py-16 lg:py-32">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col items-start space-y-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        {title}
                    </h2>
                    <p className="text-lg">
                        {description}
                    </p>
                    <div className="flex gap-4">
                        {buttons?.map((button) => (
                            <Button key={button.id} variant={button.variant} size={button.size} className={button.className}>
                                {button.text}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="aspect-square rounded bg-muted">
                    <img src={image.src} alt={image.alt} className={image.className} />
                </div>
            </div>
        </div>
    </section>
)};