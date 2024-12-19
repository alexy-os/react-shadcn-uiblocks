import { Bookmark } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Content = {
  promo: string;
  title: string;
  description: string;
  cards: {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    className: string;
  }[];
};

const content: Content = {
  promo: "buildy/ui",
  title: "Streamline Your Business Operations",
  description:
    "Managing a business shouldn't be complicated. With Buildy/UI, create seamless workflows and improve efficiency effortlessly.",
  cards: [
    {
      id: "card1",
      title: "Shadcn Library Integration",
      description:
        "Seamlessly blend components for a cohesive and modern design aesthetic.",
      icon: <Bookmark />,
      className: "lg:col-span-2 aspect-square lg:aspect-auto",
    },
    {
      id: "card2",
      title: "Bookmark-Centric Design",
      description:
        "Deliver intuitive and engaging interfaces that resonate with your target audience.",
      icon: <Bookmark />,
      className: "aspect-square",
    },
    {
      id: "card3",
      title: "Strategic Branding",
      description:
        "Ensure consistency and elevate your brand identity across platforms.",
      icon: <Bookmark />,
      className: "aspect-square",
    },
    {
      id: "card4",
      title: "Open Source Excellence",
      description:
        "Access open source components for personal or commercial projects.",
      icon: <Bookmark />,
      className: "lg:col-span-2 aspect-square lg:aspect-auto",
    },
  ],
} as const;

export const BusinessSolutionsGrid = () => (
  <section className="w-full py-16 lg:py-32">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <div className="flex flex-col gap-8">
        <header className="flex flex-col gap-4 items-start">
          <Badge className="rounded-full h-6">
            {content.promo}
          </Badge>
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold max-w-xl">
              {content.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {content.description}
            </p>
          </div>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.cards.map((card) => (
            <div
              key={card.id}
              className={`bg-muted rounded p-4 md:p-6 flex flex-col justify-between ${card.className}`}
            >
              {card.icon}
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold tracking-tight">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-base max-w-xs">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);