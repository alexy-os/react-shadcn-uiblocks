import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const content = {
  badge: "Premium",
  title: "Introducing Our Latest Product!",
  description: "Experience cutting-edge technology designed to boost your online presence and drive conversions.",
  features: [
    {
      title: "Conversion Optimised",
      description: "Our solution is built to increase your website's conversion rates and improve user engagement.",
    },
    {
      title: "Customisable Templates",
      description: "Choose from a variety of pre-designed templates that can be easily customised to match your brand.",
    },
    {
      title: "A/B Testing Capabilities",
      description: "Implement and analyse A/B tests directly within our components for data-driven decision making.",
    },
  ],
} as const;

export const FeaturesSplitLeftMedia = () => (
  <section className="w-full py-16 lg:py-32">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="bg-muted rounded-md aspect-square"></div>
        <div className="flex gap-2 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">{content.badge}</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="max-w-2xl text-3xl md:text-4xl lg:text-5xl font-bold text-left">
                {content.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl text-left">
                {content.description}
              </p>
            </div>
          </div>
          <div className="grid lg:pl-4 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-4">
            {content.features?.map((feature, index) => (
              <div key={`${feature.title}-${index}`} className="flex flex-row gap-4 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-2">
                  <p>{feature.title}</p>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);