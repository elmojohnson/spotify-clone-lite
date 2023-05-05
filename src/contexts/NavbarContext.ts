import { createContext } from "react";
import { Navbar } from "../../types";

const NavbarContext = createContext<Navbar | null>(null);

export default NavbarContext;
