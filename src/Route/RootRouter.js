import React from "react";

import {  Routes, Route } from "react-router-dom";


import { AUTH_ROUTES } from "./AuthRoutes";
import { PUBLIC_ROUTES } from "./PublicRoute";
import { PRIVATE_ROUTES } from "./PrivateRoutes";
import Navbar from "../View/Navbar.js";






const GuestRoutes = () => {
    const routes = PUBLIC_ROUTES.concat(AUTH_ROUTES)
  return (
    <Routes>

    

{routes.map((route) => (
      <Route path={route.path}  element={route.component}  />
    ))}
      
    </Routes>
          
    
  );
};

const AuthenticatedRoutes = () => {
  const routes = PUBLIC_ROUTES.concat(PRIVATE_ROUTES);
  return (
    <Routes>

    {routes.map((route) => (
        <Route path={route.path}  element={route.component}  />
      ))}
    </Routes>  
    
  );
};

const RootRouter = () => {
  const token =(localStorage.getItem("token"))


  return (
  
  <>
   <Navbar />
    {token ? (
             <AuthenticatedRoutes />
      ) : (
           <GuestRoutes />
     )}
  </>
 
  );
};

export default RootRouter;