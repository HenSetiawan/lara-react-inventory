import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "remixicon/fonts/remixicon.css";

import Protected from "./components/auth/Protected.jsx";
import Overview from "./pages/overview.jsx";
import Products from "./pages/Products.jsx";
import Admin from "./pages/Admin.jsx";
import FormProduct from "./pages/FormProduct.jsx";
import FormAdmin from "./pages/FormAdmin.jsx";
import Login from "./pages/Login.jsx";
import Logout from "./components/auth/Logout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Protected>
            <Overview />
          </Protected>
        ),
      },
      {
        path: "/products",
        element: (
          <Protected>
            <Products />
          </Protected>
        ),
      },
      {
        path: "/add-product",
        element: (
          <Protected>
            <FormProduct />
          </Protected>
        ),
      },
      {
        path: "/update-product/:productId",
        element: (
          <Protected>
            <FormProduct />
          </Protected>
        ),
      },
      {
        path: "/admins",
        element: (
          <Protected>
            <Admin />
          </Protected>
        ),
      },
      {
        path: "/add-admin",
        element: (
          <Protected>
            <FormAdmin />
          </Protected>
        ),
      },
      {
        path: "/update-admin/:adminId",
        element: (
          <Protected>
            <FormAdmin />
          </Protected>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
