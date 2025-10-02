import React, { Component, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}


function PrivateRoute ({children}:PrivateRouteProps) {

    const exists = localStorage.getItem("access") ; 
    return exists ? <>{children}</> : <Navigate to="/login" replace />; 
    
}

export default PrivateRoute ; 


