import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Loader from "../components/Loader";
import Unauthorized from "../pages/PageCode/Unauthorized";



// Layouts
const MainLayout = React.lazy(() => import("../Layouts/MainLayout"));
const OnlyLayout = React.lazy(() => import("../Layouts/OnlyLayout"));

// Lazy load các trang
const HomePage = React.lazy(() => import("../pages/Home"));
const LoginPage = React.lazy(() => import("../pages/Login"));
const RegiterPage = React.lazy(() => import("../pages/Register"));
const DashboardPage = React.lazy(() => import("../pages/Dashboard"));
const UsersPage = React.lazy(() => import("../pages/User"));
const LevelPage = React.lazy(() => import("../pages/Level"));
const StudentHome = React.lazy(() => import("../pages/Student/Home"));
const AboutUsPage = React.lazy(() => import("../pages/AboutUs"));
const ProfilePage = React.lazy(() => import("../pages/Profile"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoute>
        <Suspense fallback={<Loader />}>
          <OnlyLayout />
        </Suspense>
      </PublicRoute>
    ),
    children:[
      {
        index: true,
        element:(
          <Suspense fallback={<Loader />}>
            <HomePage />
          </Suspense>
        )
      },{
        path: "about-us",
        element:(
          <Suspense fallback={<Loader />}>
            <AboutUsPage />
          </Suspense>
        )
      },
      {
        path: "blog",
        element:(
          <Suspense fallback={<Loader />}>
            <div>Blog</div>
          </Suspense>
        )
      },
      {
        path: "login",
        element:(
          <Suspense fallback={<Loader />}>
            <LoginPage />
          </Suspense>
        )
      },
      {
        path: "register",
        element:(
          <Suspense fallback={<Loader />}>
            <RegiterPage />
          </Suspense>
        )
      }
    ]
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute allowedRoles={["Role_Admin"]}>
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
            <div>Đang phát triển skill</div>
          </Suspense>
        ),
      },
      {
        path: "part",
        element: (
          <Suspense fallback={<Loader />}>
            <div>Đang phát triển part</div>
          </Suspense>
        ),
      },
      {
        path: "topic",
        element: (
          <Suspense fallback={<Loader />}>
            <div>Đang phát triển topic</div>
          </Suspense>
        ),
      },
      {
        path: "question",
        element: (
          <Suspense fallback={<Loader />}>
            <div>Đang phát triển question</div>
          </Suspense>
        ),
      },
      {
        path: "structure",
        element: (
          <Suspense fallback={<Loader />}>
            <div>Đang phát triển Structure</div>
          </Suspense>
        ),
      },
      {
        path: "profile",
        element: (
          <Suspense fallback={<Loader />}>
            <ProfilePage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/student",
    element: (
      <PrivateRoute allowedRoles={["Role_Student"]}>
        <Suspense fallback={<Loader />}>
          <OnlyLayout />
        </Suspense>
      </PrivateRoute>
    ),
    children:[
      {
        index: true,
        element:(
          <Suspense fallback={<Loader />}>
            <StudentHome />
          </Suspense>
        )
      },{
        path: "about-us",
        element:(
          <Suspense fallback={<Loader />}>
            <AboutUsPage />
          </Suspense>
        )
      },
      {
        path: "blog",
        element:(
          <Suspense fallback={<Loader />}>
            <div>Blog</div>
          </Suspense>
        )
      },
      {
        path: "profile",
        element: (
          <Suspense fallback={<Loader />}>
            <ProfilePage />
          </Suspense>
        ),
      },
    ]
  },
  {
    path: "/unauthorized",
    element: (
      <Suspense fallback={<Loader />}>
        <Unauthorized />
      </Suspense>
    ),
  },
]);



export default router;
