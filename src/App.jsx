import React from "react";
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Teacher from "./pages/Teacher";
import Student from "./pages/Student";
import Layout from "./pages/Layout";
import DashboardPage from "./pages/DashboardPage";
import ClassPage from "./pages/ClassPage";
import Community from "./pages/Community";

const App = () => {
  const router = createBrowserRouter([
    {path: "/", element: <Layout />, children: [
      {index: true, element: <DashboardPage />},
      {path:"students", element: <Student /> },
      {path: "class", element: <ClassPage />}, 
      {path: "community", element: <Community />}

    ]}, 
    {path: "/login", element: <LoginPage />}
  ])

  return <RouterProvider router={router}></RouterProvider>
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       {/* Login route */}
  //       <Route path="/" element={<LoginPage />} />
  //       <Route path="/login" element={<LoginPage />} />

  //       {/* Directly accessible Teacher & Student routes */}
  //       <Route path="/teacher" element={<Teacher />} />
  //       <Route path="/student" element={<Student />} />
  //     </Routes>
  //   </BrowserRouter>
  // );
};

export default App;
