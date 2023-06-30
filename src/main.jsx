import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Layout/Main.jsx';
import Home from './Components/Pages/Home/Home.jsx';
import ChefDetails from './Components/Pages/ChefDetails/ChefDetails.jsx';
import Register from './Components/Authenticate/Register/Register.jsx';
import Login from './Components/Authenticate/Login/Login.jsx';
import AuthProviders from './Components/Providers/AuthProviders/AuthProviders';
import ErrorPage from './Components/Pages/ErrorPage/ErrorPage.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import Blog from './Components/Pages/Blog/Blog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://foodzone-server-ashik190141.vercel.app/chef')
      },
      {
        path: "/:id",
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://foodzone-server-ashik190141.vercel.app/chef/${params.id}`)
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
