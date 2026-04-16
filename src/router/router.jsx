import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { AiFillAppstore } from "react-icons/ai";
import Home from "../pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
]);

export default router;
