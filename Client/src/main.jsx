import "./styles/index.scss";
// DEPENDANCIES
import ReactDOM from "react-dom/client";
import { Routes, Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import { StrictMode } from "react";

// ROUTES
import HomePage from "./Routes/Home/home.jsx";
import About from "./Routes/About/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <About/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
