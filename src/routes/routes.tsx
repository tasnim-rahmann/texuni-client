import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import { adminRoutes } from "./admin.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/admin",
    element: <App />,
    children: adminRoutes,
  },
  {
    path: "/faculty",
    element: <App />,
    children: adminRoutes,
  },
  {
    path: "/student",
    element: <App />,
    children: adminRoutes,
  },
]);

export default router;
