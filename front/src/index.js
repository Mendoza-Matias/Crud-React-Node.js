import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Articulos from './components/Articulos';
import FormCreate from './components/FormCreate';
import FormEdit from './components/FormEdit';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Articulos/>
  },
  {
    path:"/create",
    element:<FormCreate/>
  },
  {
    path:"/edit/:id",
    element:<FormEdit/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
