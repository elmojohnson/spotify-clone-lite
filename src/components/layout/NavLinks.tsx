import { useContext } from "react";
import NavbarContext from "../../contexts/NavbarContext";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const ctx = useContext(NavbarContext);
  const links = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/search",
      label: "Search",
    },
    {
      href: "/albums",
      label: "Albums",
    },
    {
      href: "/artists",
      label: "Artists",
    },
    {
      href: "/playlists",
      label: "Playlists",
    },
    {
      href: "/account/me",
      label: "Account",
    },
  ];

  return (
    <nav className="flex md:flex-row flex-col md:items-center items-start md:space-x-4 space-x-0 md:space-y-0 space-y-2 font-semibold md:text-sm text-md">
      {links.map((link, i) => {
        return (
          <Link
            key={i}
            to={link.href}
            onClick={ctx?.isOpen ? ctx.handleOpen : () => {}}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;
