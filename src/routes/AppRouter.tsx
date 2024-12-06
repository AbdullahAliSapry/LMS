import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/Error/ErrorPage";
import LoginPage from "../pages/LoginPage/LoginPage";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/login",
          element: <LoginPage />,
        },
      ],
    },
  ]);

  return <div><RouterProvider router={router}></RouterProvider></div>;
}
