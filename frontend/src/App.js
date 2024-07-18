import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


import Home from "./Pages/User/Home/Home";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Home/>
  }

])

function App() {
  return (
   
    <>
      <RouterProvider router={router} />

    </> 
         
 
  );
}

export default App;
