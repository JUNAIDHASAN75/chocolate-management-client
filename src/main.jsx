import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './Layout/Main';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-[1440px] mx-auto bg-[#F5F5F5] py-12'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)