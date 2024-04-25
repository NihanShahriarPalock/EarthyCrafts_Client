import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AllArtAndCraft from "../pages/AllArtAndCraft";
import AddCraft from "../pages/AddCraft";
import PrivateRoutes from "./PrivateRoutes";
import MyCraft from "../pages/MyCraft";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/AllArtAndCraft",
        element: <AllArtAndCraft></AllArtAndCraft>,
        loader: () => fetch("http://localhost:5000/AllArtAndCraft"),
      },
      {
        path: "/AddCraft",
        element: (
          // <PrivateRoutes>
          //   <AddCraft></AddCraft>
          // </PrivateRoutes>
          <AddCraft></AddCraft>
        ),
      },
      {
        path: "/MyCraft",
        element: (
          <PrivateRoutes>
            <MyCraft></MyCraft>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
