import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import ApplicationJob from "./Component/ApplicationJob";
import ErrorPage from "./Component/ErroPage";
import JobDetails from "./Component/JobDetails";
import Rechart from "./Component/Rechart";
import Static from "./Component/Static";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
  
      { path: '/rechart',     
      element:<Rechart></Rechart>
    },
      { path: 'job/:jobId',     
      element:<JobDetails></JobDetails>,
      loader:()=>fetch("/data.json"),
      
    },
    {
      path:'/static',
      element:<Static></Static>,
      loader:()=>fetch("/data.json")
    },
    {
      path:'/',
      element:<ApplicationJob></ApplicationJob>,
      loader:()=>fetch('/category.json')
    },
 
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);