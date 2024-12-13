import { type RouteObject } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { DocsPage } from "@/pages/docs";
import { RootLayout } from "@/layouts/RootLayout";
import { ComponentsLayout } from "@/layouts/ComponentsLayout";
import { ComponentsPage } from "@/pages/components";
import { HeroComponentsPage } from "@/pages/components/hero";
import { CTAComponentsPage } from "@/pages/components/cta";
import { FeaturesComponentsPage } from "@/pages/components/features";
import { BlogComponentsPage } from "@/pages/components/blog";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "docs",
        element: <DocsPage />,
      },
      {
        path: "components",
        element: <ComponentsLayout />,
        children: [
          {
            index: true,
            element: <ComponentsPage />,
          },
          {
            path: "hero",
            element: <HeroComponentsPage />,
          },
          {
            path: "features",
            element: <FeaturesComponentsPage />,
          },
          {
            path: "cta",
            element: <CTAComponentsPage />,
          },
          {
            path: "blog",
            element: <BlogComponentsPage />,
          },
          {
            path: "*",
            element: <ComponentsPage />
          }
        ],
      },
    ],
  },
];