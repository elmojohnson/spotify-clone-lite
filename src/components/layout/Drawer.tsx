import { useContext } from "react";
import NavbarContext from "../../contexts/NavbarContext";
import NavLinks from "./NavLinks";
import { MdClose } from "react-icons/md";

const Drawer = () => {
  const ctx = useContext(NavbarContext);

  return (
    <div className="bg-white shadow md:hidden block fixed top-0 right-0 h-screen w-screen">
      <div className="wrapper">
        <div className="flex items-center justify-between py-3">
          <h1 className="text-primary font-bold text-2xl">Spotify</h1>
          <button className="text-xl" onClick={ctx?.handleOpen}>
            <MdClose />
          </button>
        </div>
        <NavLinks />
      </div>
    </div>
  );
};

export default Drawer;
