import { FC } from "react";
import { Track } from "../../../types";

import { motion } from "framer-motion";
import { MdPlayCircle, MdMoreVert } from "react-icons/md";

const TrackItem: FC<Track> = (track) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center border hover:shadow"
    >
      <img src={track.album.images[1].url} className="w-14" />
      <div className="flex items-center justify-between w-full">
        <div className="w-full leading-none px-2">
          <p className="font-semibold">{track.name}</p>
          <span className="text-sm">
            {track.artists.map((artist) => artist.name).join(", ")}
          </span>
        </div>
        <div className="px-2 flex items-center">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1 }}
            className="text-4xl text-primary hover:brightness-90"
          >
            <MdPlayCircle />
          </motion.button>
          <button className="text-xl hover:brightness-90">
            <MdMoreVert />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TrackItem;
