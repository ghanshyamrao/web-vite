import React from "react";
import ReactDOM from "react-dom/client";
import {Function1,Function2} from '../component/index.js'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Function1/>,
    },
    {
      path:'menu',
      element:<Function2/>
    }
  ]);

const Routes=()=>{
    return(
   <React.Fragment>
        {router}
   </React.Fragment>
    )

}

export default Routes