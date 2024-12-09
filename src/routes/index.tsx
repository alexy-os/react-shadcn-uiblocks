import { type RouteObject } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";
import { HomePage } from "@/pages/home";
import { DocsPage } from "@/pages/docs";
import { ComponentsPage } from "@/pages/components";
import { HeroComponentsPage } from "@/pages/components/hero";
import { ComponentsLayout } from "@/layouts/ComponentsLayout";

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
            path: "*",
            element: <ComponentsPage />
          }
        ],
      },
    ],
  },
];