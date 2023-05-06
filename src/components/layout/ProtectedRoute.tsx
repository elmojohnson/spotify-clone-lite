import { FC, useState } from "react";
import { Navigate } from "react-router-dom";
import Layout from "./Layout";
import NavbarContext from "../../contexts/NavbarContext";

type PR = {
  children: any;
};

const ProtectedRoute: FC<PR> = ({ children }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(!isOpen);

  const token = localStorage.getItem("access_token");

  return token ? (
    <NavbarContext.Provider value={{ isOpen, handleOpen }}>
      <Layout>{children}</Layout>
    </NavbarContext.Provider>
  ) : (
    <Navigate to="/account/login" />
  );
};

export default ProtectedRoute;
