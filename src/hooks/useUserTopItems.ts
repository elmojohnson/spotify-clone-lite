import { useEffect, useState } from "react";
import spotify from "../lib/spotify";
import { Artist, Track } from "../../types";

const useUserTopItems = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [artists, setArtists] = useState<Artist[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const getTopItems = async () => {
    try {
      setLoading(true);

      const trackResult = await spotify.get("/me/top/tracks?limit=10");
      const artistResult = await spotify.get("/me/top/artists?limit=10");

      setTracks(trackResult.data.items);
      setArtists(artistResult.data.items)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTopItems();
  }, []);

  return { tracks, artists, isLoading };
};

export default useUserTopItems;
