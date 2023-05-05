import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// PAGES

// Ungrouped
import Home from "./pages/Home.tsx";
import Search from "./pages/Search.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";

// Account
import Account from "./pages/account/Account.tsx";
import Login from "./pages/account/Login.tsx";

// Album
import Albums from "./pages/album/Albums.tsx";
import ViewAlbum from "./pages/album/ViewAlbum.tsx";

// Artist
import Artists from "./pages/artist/Artists.tsx";
import ViewArtist from "./pages/artist/ViewArtist.tsx";

// Playlist
import Playlists from "./pages/playlist/Playlists.tsx";
import ViewPlaylist from "./pages/playlist/ViewPlaylist.tsx";


const router = createBrowserRouter([
  {
    path: "*",
    element: <PageNotFound />
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/search",
    element: <Search />
  }
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
