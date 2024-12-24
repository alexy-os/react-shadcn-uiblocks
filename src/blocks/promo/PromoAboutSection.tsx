import wireframe from "@/assets/img/wireframe.svg";

type Content = {
  brand: string;
  title: string;
  description: string;
  imageAlt: string;
  statistics: {
    quantity: string;
    description: string;
  }[];
};

const content: Content = {
  title: "About",
  brand: "Buildy/UI",
  description:
    "Buildy/UI empowers developers and designers to create scalable, flexible, and modern interfaces effortlessly. Designed with Radix and shadcn/ui, it simplifies prototyping and production-ready development for SaaS, marketing, and business applications.",
  imageAlt: "Wireframe showcase",
  statistics: [
    {
      quantity: "10K+",
      description: "Theme Colors",
    },
    {
      quantity: "3K+",
      description: "UI/UX Variants",
    },
    {
      quantity: "50+",
      description: "Purity Components",
    },
    {
      quantity: "8",
      description: "Pretty Templates",
    },
  ] as Content['statistics'],
} as const;

type PromoAboutSectionProps = React.ComponentPropsWithoutRef<"section"> & Partial<Content>;

export const PromoAboutSection = (props: PromoAboutSectionProps) => {
  const { brand, title, description, imageAlt, statistics } = {
    ...content,
    ...props
  };

  return (
    <section className="w-full py-8 lg:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <div className="relative p-[1px] bg-gradient-to-br from-sky-600 to-sky-300 dark:to-slate-600 rounded-2xl">
        <div className="bg-secondary border rounded-2xl py-12">
            <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
            <img
                src={wireframe}
                alt={imageAlt}
                className="w-[300px] object-contain"
            />
            <div className="flex flex-col justify-between">
                <div className="pb-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    <span className="bg-gradient-to-b from-sky-500 to-sky-700 text-transparent bg-clip-text">
                    {title}
                    </span>{" "}
                    {brand}
                </h2>
                <p className="text-lg text-muted-foreground mt-4">
                    {description}
                </p>
                </div>
                <Statistics statistics={statistics} />
            </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export const Statistics = (props: { statistics: { quantity: string; description: string }[] }) => {
  const { statistics } = props;
  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {statistics?.map(({ quantity, description }) => (
          <div key={description} className="space-y-2 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">{quantity}</h2>
            <p className="text-lg text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};