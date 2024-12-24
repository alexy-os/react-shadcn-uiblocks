import {
  BarChartHorizontal,
  BatteryCharging,
  CircleHelp,
  Layers,
  WandSparkles,
  ZoomIn,
} from 'lucide-react';

type Content = {
  title: string;
  description: string;
  features: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
};

const content: Content = {
  title: "Flexible UI Development",
  description: "Create your website with our intuitive and customizable UI components",
  features: [
  {
    title: 'Quality',
    description:
      'We prioritize excellence and precision in all our offerings to ensure unparalleled user satisfaction.',
    icon: <ZoomIn className="w-4 h-4" />,
  },
  {
    title: 'Experience',
    description:
      'Our seasoned team provides insights and expertise drawn from years of industry know-how.',
    icon: <BarChartHorizontal className="w-4 h-4" />,
  },
  {
    title: 'Support',
    description:
      'Around-the-clock assistance to ensure your needs are met with urgency and attention.',
    icon: <CircleHelp className="w-4 h-4" />,
  },
  {
    title: 'Innovation',
    description:
      'Driving progress through creativity and forward-thinking solutions.',
    icon: <WandSparkles className="w-4 h-4" />,
  },
  {
    title: 'Results',
    description:
      'Focusing on delivering tangible outcomes that align with your goals.',
    icon: <Layers className="w-4 h-4" />,
  },
  {
    title: 'Efficiency',
    description:
      'Streamlined processes that save you time and resources, boosting productivity.',
    icon: <BatteryCharging className="w-4 h-4" />,
  }
]} as const;

type FeaturesThreeColumnsIconsProps = React.ComponentPropsWithoutRef<"section"> & Partial<Content>;

export const FeaturesThreeColumnsIcons = (props: FeaturesThreeColumnsIconsProps) => {
  const { title, description, features } = {
    ...content,
    ...props
  };

  return (
    <section className="w-full py-16 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-10 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl text-left mb-12">{description}</p>
        </div>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {features?.map((feature, id) => (
          <div key={`${feature.title}-${id}`} className="flex flex-col">
            <div className="mb-5 flex size-12 items-center justify-center rounded-full bg-accent">
              {feature.icon}
            </div>
            <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};