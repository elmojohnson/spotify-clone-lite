import React from 'react'
import { Outlet } from "react-router-dom";

const PlaylistParentLayout = () => {
  return (
    <div>
        <h1>Playlists</h1>
        <Outlet />
    </div>
  )
}

export default PlaylistParentLayout