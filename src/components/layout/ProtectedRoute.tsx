import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import Layout from "./Layout";

type PR = {
  children: any;
};

const ProtectedRoute: FC<PR> = ({ children }) => {
  const user = "";
  return !user ? <Layout>{children}</Layout> : <Navigate to="/account/login" />;
};

export default ProtectedRoute;
