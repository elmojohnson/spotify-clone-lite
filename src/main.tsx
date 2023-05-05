import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/layout/ProtectedRoute.tsx";

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
import AlbumParentLayout from "./pages/album/AlbumParentLayout.tsx";

// Artist
import Artists from "./pages/artist/Artists.tsx";
import ViewArtist from "./pages/artist/ViewArtist.tsx";
import ArtistParentLayout from "./pages/artist/ArtistParentLayout.tsx";

// Playlist
import Playlists from "./pages/playlist/Playlists.tsx";
import ViewPlaylist from "./pages/playlist/ViewPlaylist.tsx";
import PlaylistParentLayout from "./pages/playlist/PlaylistParentLayout.tsx";

const router = createBrowserRouter([
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/search",
    element: (
      <ProtectedRoute>
        <Search />
      </ProtectedRoute>
    ),
  },

  // Account
  {
    path: "/account/me",
    element: (
      <ProtectedRoute>
        <Account />
      </ProtectedRoute>
    ),
  },
  {
    path: "/account/login",
    element: <Login />,
  },

  // Album
  {
    path: "/albums",
    element: (
      <ProtectedRoute>
        <AlbumParentLayout />
      </ProtectedRoute>
    ),
    errorElement: <PageNotFound />,
    children: [
      {
        path: "",
        element: <Albums />,
      },
      {
        path: ":id",
        element: <ViewAlbum />,
      },
    ],
  },

  // Artist
  {
    path: "/artists",
    element: (
      <ProtectedRoute>
        <ArtistParentLayout />
      </ProtectedRoute>
    ),
    errorElement: <PageNotFound />,
    children: [
      {
        path: "",
        element: <Artists />,
      },
      {
        path: ":id",
        element: <ViewArtist />,
      },
    ],
  },

  // Playlist
  {
    path: "/playlists",
    element: (
      <ProtectedRoute>
        <PlaylistParentLayout />
      </ProtectedRoute>
    ),
    errorElement: <PageNotFound />,
    children: [
      {
        path: "",
        element: <Playlists />,
      },
      {
        path: ":id",
        element: <ViewPlaylist />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
