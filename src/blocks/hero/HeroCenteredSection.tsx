import { Info, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavbarMenuNoLink } from "../navbar/NavbarMenuNoLink";

type Content = {
  badge: string;
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
  badge: "Start Now",
  title: "Explore Our BuildY!",
  description: "Simplify your business operations with our cutting-edge solution. Say goodbye to time-consuming manual processes and hello to efficient, streamlined management.",
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

export const HeroCenteredSection = () => (
  <>
  <NavbarMenuNoLink />
  </>
);