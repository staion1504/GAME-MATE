import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import './App.module.css';
import Home from "./Pages/User/Home/Home";
import SessionPage from "./Pages/User/Session/SessionPage";
import Chat from "./Pages/User/Session/Chat/Chat";
import SignInForm from "./Pages/Auth/SignInForm";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <SignInForm />
  },
  {
    path: "/SessionPage",
    element: <SessionPage/>
  },
  {
    path: "/session/:sessionName",
    element: <Chat/>
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
