import React, { FC, useState } from "react";
import { Navigate } from "react-router-dom";
import Layout from "./Layout";
import NavbarContext from "../../contexts/NavbarContext";

type PR = {
  children: any;
};

const ProtectedRoute: FC<PR> = ({ children }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(!isOpen);
  
  const user = "";

  return !user ? (
    <NavbarContext.Provider value={{isOpen, handleOpen}}>
      <Layout>{children}</Layout>
    </NavbarContext.Provider>
  ) : (
    <Navigate to="/account/login" />
  );
};

export default ProtectedRoute;
