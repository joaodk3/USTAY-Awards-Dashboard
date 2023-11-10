import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Login } from './pages/login';
import { Config } from './pages/config';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/pages",
    element: <Login />,
  },

  {
    path: "/config",
    element: <Config />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
