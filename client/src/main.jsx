import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Buy from "./pages/Buy.jsx";
import Courses from "./pages/Courses.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Purchases from "./pages/Purchases.jsx";

// admin
import AdminLogin from "./admin/AdminLogin.jsx";
import AdminSignup from "./admin/AdminSignup.jsx";
import CourseCreate from "./admin/CourseCreate.jsx";
import Dashboard from "./admin/Dashboard.jsx";
import OurCourses from "./admin/OurCourses.jsx";
import UpdateCourse from "./admin/UpdateCourse.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "buy/:courseId",
        element: <Buy />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "purchases",
        element: <Purchases />,
      },
      {
        path: "admin/signup",
        element: <AdminSignup />,
      },
      {
        path: "admin/login",
        element: <AdminLogin />,
      },
      {
        path: "admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "admin/create-course",
        element: <CourseCreate />,
      },
      {
        path: "admin/our-courses",
        element: <OurCourses />,
      },
      {
        path: "admin/update-course/:id",
        element: <UpdateCourse />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
