import { Button } from "@/components/ui/button";

const content = {
    title: "Transform Your Workflow",
    description: "Streamline your development process with our powerful tools and components.",
    buttons: [
        { text: "Try Now" },
        { text: "View Demo" }
    ]
} as const;

export const HeroSplitWithMedia = () => (
    <section className="w-full py-16 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col items-start space-y-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        {content.title}
                    </h2>
                    <p className="text-lg">
                        {content.description}
                    </p>
                    <div className="flex gap-4">
                        {content.buttons?.map((button, index) => (
                            <Button key={`${button.text}-${index}`} variant={index === 1 ? "outline" : undefined}>
                                {button.text}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="aspect-square rounded bg-muted" />
            </div>
        </div>
    </section>
);