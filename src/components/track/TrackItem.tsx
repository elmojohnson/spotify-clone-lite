import {FC} from 'react'
import { Track } from '../../../types'

const TrackItem:FC<Track> = (track) => {
  return (
    <div className="flex items-center border hover:shadow">
      <img src={track.album.images[1].url} className="w-14" />
      <div className="px-4">
        <p className="font-semibold">{track.name}</p>
        <span className="text-sm">{track.artists.map((artist) => artist.name).join(", ")}</span>
      </div>
    </div>
  )
}

export default TrackItem