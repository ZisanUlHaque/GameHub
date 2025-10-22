import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Discover from "../pages/Discover";
import PopularGames from "../pages/PopularGames";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <PopularGames></PopularGames>,
        loader: () => fetch("/games.json"),
      }
    ]
  },
  {
    path:'/discover',
    element: <Discover></Discover>,
    loader: () => fetch("/games.json"),
  },
  {
    path: '/*',
    element: <Error></Error>
  }
]);

export default router