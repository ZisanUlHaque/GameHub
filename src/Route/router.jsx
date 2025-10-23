import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Discover from "../pages/Discover";
import PopularGames from "../pages/PopularGames";
import Blog from "../pages/Blog";
import Details from "../pages/Details";
import AuthLayout from "../pages/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import UpdateProfile from "../pages/UpdateProfile";
import PrivateRoute from "../Provider/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <PopularGames></PopularGames>,
        loader: () => fetch("/games.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/auth/update-profile",
        element: <UpdateProfile></UpdateProfile>,
      },
    ],
  },
  {
    path: "/details/:id",
    element: (
      <PrivateRoute>
        <Details></Details>
      </PrivateRoute>
    ),
    loader: () => fetch("/games.json"),
  },
  {
    path: "/discover",
    element: <Discover></Discover>,
    loader: () => fetch("/games.json"),
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
  {
    path: "/blog",
    loader: () => fetch("/blog.json"),
    element: <Blog></Blog>,
  },
]);

export default router;
