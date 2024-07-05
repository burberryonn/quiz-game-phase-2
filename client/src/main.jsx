import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from "../src/page/Categories.jsx";
import Navbar from "./page/Navbar.jsx";
import Question from "./page/Question.jsx";
import NoFound from "./page/NoFound.jsx";
import Home from "./page/Home.jsx";
import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "topics",
        element: <Categories />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "topics/:topicId/questions",
        element: <Question />,
      },
      {
        path: "*",
        element: <NoFound/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
