import { FC } from "react";
import { Artist } from "../../../types";
import { motion } from "framer-motion";

const ArtistItem: FC<Artist> = (artist) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center border hover:shadow"
    >
      <div
        className="w-14 h-14 bg-center bg-no-repeat bg-cover bg-black"
        style={{
          backgroundImage: `url(${artist.images[1].url})`,
        }}
      />
      <div className="px-4">
        <p className="font-semibold">{artist.name}</p>
      </div>
    </motion.div>
  );
};

export default ArtistItem;
