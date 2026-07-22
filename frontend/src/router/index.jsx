import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ProvinciaDetail from "../pages/ProvinciaDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,   // Layout principal
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "provincia/:slug",
        element: <ProvinciaDetail />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}