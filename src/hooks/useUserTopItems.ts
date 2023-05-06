import { useEffect, useState } from "react";
import spotify from "../lib/spotify";
import { Track } from "../../types";

const useUserTopItems = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const getTopItems = async () => {
    try {
      setLoading(true);

      const trackResult = await spotify.get("/me/top/tracks?limit=10");
      setTracks(trackResult.data.items);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTopItems();
  }, []);

  return { tracks, isLoading };
};

export default useUserTopItems;
