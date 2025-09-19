import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import Layout from "./components/Layout.tsx";
import Contact from "./pages/contact.tsx";
import About from "./pages/about.tsx";
import Home from "./pages/home.tsx";
import { StrictMode } from "react";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/deployment-automation/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
