import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./components/Layout";
import NoPage from "./components/NoPage";
import Default from "./components/Default";
import Recipe from "./components/Recipe";
import Another from "./components/Another";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Define our routes for React Router.
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Default />} />
      <Route path="home" element={<Default />} />
      <Route path="resume" element={<Resume />} />
      <Route path="contact" element={<Contact />} />
      <Route path="recipes" element={<Recipe />} />
      <Route path="another" element={<Another />} />
      <Route path="*" element={<NoPage />} />
    </Route>
  )
);

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
