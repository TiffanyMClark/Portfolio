import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Contact from "./Pages/Contact.jsx";
import Portfolio from "./Pages/Portfolio.jsx";
import Resume from "./Pages/Resume.jsx";
import "./assets/style/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/contact", // Lowercase paths are recommended
        element: <Contact />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
