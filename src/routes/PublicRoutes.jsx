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
import ViewDetails from "../pages/ViewDetails";
import UpdateCraft from "../pages/UpdateCraft";
import ArtCraftSection from "../components/Body/ArtCraftSection";
import CategoriesCraftsDetails from "../pages/CategoriesCraftsDetails";

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
        loader: () =>
          fetch("https://jute-craft-server.vercel.app/AllArtAndCraft"),
      },

      {
        path: "/crafts/:id",
        element: (
          <PrivateRoutes>
            <ViewDetails></ViewDetails>
          </PrivateRoutes>
        ),
        
      },

      {
        path: "/categoriesCraftsDetails/:id",
        element: <CategoriesCraftsDetails></CategoriesCraftsDetails>,
        
      },

      {
        path: "/AddCraft",
        element: (
          <PrivateRoutes>
            <AddCraft></AddCraft>
          </PrivateRoutes>
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
      {
        path: "/ArtCraftSection/:subcategory_Name",
        element: <ArtCraftSection></ArtCraftSection>,
      },
      {
        path: "/updateCraft/:id",
        element: (
          <PrivateRoutes>
            <UpdateCraft></UpdateCraft>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
