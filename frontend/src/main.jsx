import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import Signup from "./pages/Signup.jsx";
import Contact from "./pages/Contact.jsx";
import Mainpage from "./pages/Mainpage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/main',
        element: <Mainpage />
      },
      {
        path: '/contact-us',
        element: <Contact />
      },
      
    ]
  },
  {
    path: "log-in",
    element: <Login />
  },
  {
    path: 'sign-up',
    element: <Signup/>,
    
  },
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);