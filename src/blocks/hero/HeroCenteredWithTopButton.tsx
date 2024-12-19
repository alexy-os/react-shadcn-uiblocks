import { Info, Rocket, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Content = {
    promo: string;
    title: string;
    description: string;
    buttons: {
        id: string;
        text: string;
        variant: "default" | "outline";
        size: "lg" | "sm";
        className: string;
        icon: React.ReactNode;
    }[];
};

const content: Content = {
    promo: "Let's Go to Buildy/UI",
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

export const HeroCenteredWithTopButton = () => (
    <section className="w-full py-16 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col text-center gap-8 items-center">
                <div>
                    <Button size="sm" variant="outline" className="rounded-full h-7">{content.promo} <MoveRight /></Button>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="max-w-2xl text-3xl md:text-4xl lg:text-6xl font-bold">
                        {content.title}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        {content.description}
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-8">
                    {content.buttons?.map((button) => (
                        <Button key={button.id} className={button.className} variant={button.variant} size={button.size}>
                            {button.text} {button.icon}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
