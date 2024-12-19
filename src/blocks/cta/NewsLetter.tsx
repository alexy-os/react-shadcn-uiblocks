import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const NewsLetter = () => {

  return (
    <section className="w-full py-16 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
            Keep up to date with all new products
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
            No spam. Only novelties and service improvement
        </p>

        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
        >
          <Input
            placeholder="yourmail@website.com"
            className="bg-secondary dark:bg-muted/80"
            aria-label="email"
          />
          <Button>Subscribe</Button>
        </form>
      </div>
    </section>
  );
};