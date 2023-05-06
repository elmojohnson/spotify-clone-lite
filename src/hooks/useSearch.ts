import { useState } from "react";
import spotify from "../lib/spotify";
import { Artist, Track } from "../../types";

const useSearch = () => {
  const [value, setValue] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  // Search results
  const [tracks, setTracks] = useState<Track[]>([]);
  const [artists, setArtists] = useState<Artist[]>([]);

  const onChange = (e: any) => setValue(e.target.value);

  // Search
  const onSubmit = async () => {
    if (value) {
      try {
        setLoading(true);
        const result = await spotify.get(
          `/search?q=${value}&type=album,track,playlist,artist`
        );

        setTracks(result.data.tracks.items);
        setArtists(result.data.artists.items);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return { value, isLoading, onChange, onSubmit, tracks, artists };
};

export default useSearch;
