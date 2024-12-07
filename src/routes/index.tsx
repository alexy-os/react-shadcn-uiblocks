import * as React from "react";
import { type RouteObject } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";
import { HomePage } from "@/pages/home";
import { DocsPage } from "@/pages/docs";
import { ComponentsPage } from "@/pages/components";
import { LoginPage } from "@/pages/login";

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
        element: <ComponentsPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
];