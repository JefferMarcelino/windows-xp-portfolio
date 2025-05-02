import { createBrowserRouter, RouterProvider } from "react-router";
import { welcomePageRoute } from "@/pages/welcome";
import { desktopPageRoute } from "@/pages/desktop";

const router = createBrowserRouter([
  welcomePageRoute,
  desktopPageRoute
]);

export const BrowserRouter = () => {
  return <RouterProvider router={router} />;
}