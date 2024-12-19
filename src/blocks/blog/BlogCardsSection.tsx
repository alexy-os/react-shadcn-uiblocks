import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const content = {
  title: "Latest articles",
  button: {
    text: "View all articles",
    icon: <MoveRight className="w-4 h-4" />
  },
  articles: [
    {
      id: "1",
      title: "Exploring the Future of Web Design",
      description: "Discover how emerging technologies are reshaping the digital landscape.",
      imageAlt: "Future of Web Design"
    },
    {
      id: "2",
      title: "10 Essential UI Design Trends for 2024",
      description: "Stay ahead of the curve with these cutting-edge design principles.",
      imageAlt: "UI Design Trends"
    },
    {
      id: "3",
      title: "Mastering React: Advanced Techniques for Building Scalable Apps",
      description: "Learn how to optimize your React applications for better performance and maintainability.",
      imageAlt: "React Advanced Techniques"
    }
  ]
} as const;

export const BlogCardsSection = () => (
  <section className="w-full py-16 lg:py-32">
    <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col gap-8">
      <header className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">
          {content.title}
        </h2>
        <Button className="gap-4">
          {content.button.text} {content.button.icon}
        </Button>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.articles?.map((article) => (
          <article id={article.id} key={article.id} className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
            <div 
              className="bg-muted rounded-md aspect-video mb-4"
              role="img"
              aria-label={article.imageAlt}></div>
            <h3 className="text-xl tracking-tight">{article.title}</h3>
            <p className="text-muted-foreground text-base">
              {article.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);