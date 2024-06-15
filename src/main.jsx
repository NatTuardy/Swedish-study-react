import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider, BrowserRouter as Router } from "react-router-dom";
import ErrorPage from "./components/pages/ErrorPage";
import StudentPage from "./components/pages/StudentPage";
import TeacherPage from "./components/pages/TeacherPage";
import CreateLection from "./components/pages/TeacherPage/createLection.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     // children: [{
//     //   path: "about",
//     //   element: <div>About</div>,
//     // },
//     // {
//     //   path: "studentPage",
//     //   element: <StudentPage />,
//     // },
//     // {
//     //   path: "/teacherPage",
//     //   element: <TeacherPage />,
//     // },]
//   },
//   // {
//   //   path: "/",
//   //   errorElement: <ErrorPage />,
//   // },
//   {
//     path: "about",
//     element: <div>About</div>,
//   },
//   {
//     path: "/studentPage",
//     element: <StudentPage />,
//     // children: [{
//     //   path: "/lesson",
//     // //   element: <div>About</div>,
//     // }]

//   },
//   {
//     path: "/teacherPage",
//     element: <TeacherPage />,
//   },
//   {
//     path: "/createLection",
//     element: <CreateLection />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
    {/* <RouterProvider router={router}> */}
      <App />
    {/* </RouterProvider> */}
    </Router>
  </React.StrictMode>
);
