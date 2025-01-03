import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Login.jsx'
import Signup from "./Signup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "log-in",
    element: <Login />
  },
  {
    path: 'sign-up',
    element: <Signup/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);