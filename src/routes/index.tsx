import { type RouteObject } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { DocsPage } from "@/pages/docs";
import { RootLayout } from "@/layouts/RootLayout";
import { ComponentsLayout } from "@/layouts/ComponentsLayout";
import { ComponentsPage } from "@/pages/components";
import { BlocksViewer } from "@/components/viewer/BlocksViewer";

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
            path: ":category",
            element: <BlocksViewer />,
          }
        ],
      },
    ],
  },
];