import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { Home, NoMatch } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "*", element: <NoMatch /> },
    ],
  },
]);
