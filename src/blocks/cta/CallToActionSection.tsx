import { Button, type ButtonProps } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

type Content = {
  title: string
  description: string
  buttons: (ButtonProps & {
    id: string
    text: string
    icon?: React.ReactNode
  })[]
}

const content: Content = {
  title: "Transform Your Business Today",
  description: "Unlock powerful solutions that drive growth, efficiency, and innovation for your organization.",
  buttons: [
    {
      id: "learn-more",
      text: "Explore Solutions",
      variant: "outline",
      icon: <ArrowRight />
    },
    {
      id: "get-started",
      text: "Start Your Journey",
      variant: "default",
      icon: <ArrowRight />
    }
  ]
} as const

type CallToActionSectionProps = React.ComponentPropsWithoutRef<"section"> & Partial<Content>

export const CallToActionSection = (props: CallToActionSectionProps) => {
  const { title, description, buttons } = {
    ...content,
    ...props
  }

  return (
    <section className="w-full py-16 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid w-full rounded-lg bg-accent p-8 md:rounded-xl lg:grid-cols-2 lg:items-center lg:p-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold md:text-4xl">
              {title}
            </h2>
            <p className="text-muted-foreground lg:text-lg">
              {description}
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row lg:justify-end">
            {buttons.map((button) => (
              <Button
                key={button.id}
                variant={button.variant}
                className="w-full sm:w-auto"
              >
                {button.text}
                {button.icon}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}