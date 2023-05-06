import { FC, useState } from "react";
import { Track } from "../../../types";

import { motion, AnimatePresence } from "framer-motion";
import { MdPlayCircle, MdMoreVert } from "react-icons/md";

const TrackItem: FC<Track> = (track) => {
  const [isVisible, setVisible] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center bg-base-100 text-white"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <div className="relative flex items-center justify-center overflow-hidden">
        <AnimatePresence>
          {isVisible && (
            <>
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1 }}
                className="text-4xl text-white hover:brightness-90 absolute z-20"
              >
                <MdPlayCircle />
              </motion.button>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                className="bg-primary w-full h-full absolute"
              />
            </>
          )}
        </AnimatePresence>
        <img src={track.album.images[1].url} className="w-14 h-14" />
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="w-full leading-none px-2">
          <p className="font-semibold">{track.name}</p>
          <span className="text-xs brightness-50">
            {track.artists.map((artist) => artist.name).join(", ")}
          </span>
        </div>
        <div className="px-2 flex items-center">
          <button className="text-xl hover:brightness-90">
            <MdMoreVert />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TrackItem;
