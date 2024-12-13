import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Loader from "../components/Loader";


//Layout
const MainLayout = React.lazy(() => import("../Layouts/MainLayout"));
const OnlyLayout = React.lazy(() => import("../Layouts/OnlyLayout"));

// Lazy load các trang
const HomePage = React.lazy(() => import("../pages/Home"));
const LoginPage = React.lazy(() => import("../pages/Login"));
const DashboardPage = React.lazy(() => import("../pages/Dashboard"));
const UsersPage = React.lazy(() => import("../pages/User"));
const LevelPage = React.lazy(() => import("../pages/Level"));



//StudentPage
const StudentHome = React.lazy(() => import("../pages/Student/Home"));


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoute>
        <Suspense fallback={<Loader />}>
          <HomePage />
        </Suspense>
      </PublicRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Suspense fallback={<Loader />}>
          <LoginPage />
        </Suspense>
      </PublicRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Suspense fallback={<Loader />}>
          <MainLayout />
        </Suspense>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <DashboardPage />
          </Suspense>
        ),
      },
      {
        path: "user",
        element: (
          <Suspense fallback={<Loader />}>
            <UsersPage />
          </Suspense>
        ),
      },
      {
        path: "level",
        element: (
          <Suspense fallback={<Loader />}>
            <LevelPage />
          </Suspense>
        ),
      },
      {
        path: "skill",
        element: (
          <Suspense fallback={<Loader />}>
            <div>Skill</div>
          </Suspense>
        ),
      },
      {
        path: "part",
        element: (
          <Suspense fallback={<Loader />}>
            <div>Part</div>
          </Suspense>
        ),
      },
      {
        path: "topic",
        element: (
          <Suspense fallback={<Loader />}>
            <div>Topic</div>
          </Suspense>
        ),
      },
      {
        path: "question",
        element: (
          <Suspense fallback={<Loader />}>
            <div>Question</div>
          </Suspense>
        ),
      },
      {
        path: "structure",
        element: (
          <Suspense fallback={<Loader />}>
            <div>structure</div>
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/student",
    element: (
      <PrivateRoute>
        <Suspense fallback={<Loader />}>
          <OnlyLayout />
        </Suspense>
      </PrivateRoute>
    ),
    children:[
      {
        index : true,
        element:(
          <Suspense fallback={<Loader />}>
            <StudentHome />
          </Suspense>
        ),
      }
    ]
  },
]);
export default router;
