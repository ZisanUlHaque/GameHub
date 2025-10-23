import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router/dom";
import router from "./Route/router.jsx";
import Authprovider from "./Provider/Authprovider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={2000} />
    </Authprovider>
  </StrictMode>
);
