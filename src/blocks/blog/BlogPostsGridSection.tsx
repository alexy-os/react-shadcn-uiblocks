import { ArrowRight } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";

type Content = {
  tagline: string;
  title: string;
  description: string;
  button: ButtonProps & {
    name: string;
    icon: React.ReactNode;
  };
  posts: {
    id: string;
    title: string;
    summary: string;
    label: string;
    author: string;
    published: string;
    href: string;
    image: string;
  }[];
};

const content: Content = {
  tagline: "Explore Insights",
  title: "Latest Blog Posts",
  description:
    "Stay updated with the latest trends, tips, and best practices in UI/UX design. Explore how Buildy/UI empowers developers and businesses alike.",
  button: {
    name: "All Posts",
    variant: "link",
    icon: <ArrowRight className="w-4 h-4" />,
  },
  posts: [
    {
      id: "post-1",
      title: "The Power of Atomic Design in Modern UI/UX",
      summary:
        "Discover how atomic design principles can help you create consistent and scalable user interfaces for any application.",
      label: "Design Systems",
      author: "Jane Doe",
      published: "1 Jan 2024",
      href: "#",
      image: "https://placehold.co/600x400?text=Atomic+Design",
    },
    {
      id: "post-2",
      title: "Why Tailwind CSS is a Game Changer for Developers",
      summary:
        "Learn how utility-first CSS frameworks like Tailwind CSS streamline development without compromising on design.",
      label: "CSS Frameworks",
      author: "John Smith",
      published: "15 Jan 2024",
      href: "#",
      image: "https://placehold.co/600x400?text=Tailwind+CSS",
    },
    {
      id: "post-3",
      title: "Building Accessible Components with shadcn/ui",
      summary:
        "Explore the accessibility-first approach of shadcn/ui and how it ensures inclusivity for all users.",
      label: "Accessibility",
      author: "Alex Johnson",
      published: "22 Jan 2024",
      href: "#",
      image: "https://placehold.co/600x400?text=shadcn/ui",
    },
  ],
} as const;

type BlogPostsGridSectionProps = React.ComponentPropsWithoutRef<"section"> & Partial<Content>; 

export const BlogPostsGridSection = (props: BlogPostsGridSectionProps) => {
  const { tagline, title, description, button, posts } = {
    ...content,
    ...props
  };

  return (
  <section className="w-full py-16 lg:py-32">
    <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col gap-16 text-center">
      <header className="max-w-2xl mx-auto flex flex-col gap-4">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {tagline}
        </p>
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="text-muted-foreground lg:text-lg">
          {description}
        </p>
        <Button variant={button.variant} className="gap-2 self-center">
          {button.name} {button.icon}
        </Button>
      </header>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post) => (
          <a
            key={post.id}
            href={post.href}
            className="flex flex-col rounded-lg border border-border overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="aspect-video object-cover"
            />
            <div className="flex flex-col gap-4 p-6 text-start">
              <h3 className="text-lg font-semibold lg:text-xl">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {post.summary}
              </p>
              <p className="flex items-center text-sm font-medium text-primary hover:underline">
                Read more <ArrowRight className="ml-2 w-4 h-4" />
              </p>
            </div>
          </a>
        ))}
        </div>
      </div>
    </section>
  );
};