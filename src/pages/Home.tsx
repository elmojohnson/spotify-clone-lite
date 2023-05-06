import useUserTopItems from "../hooks/useUserTopItems";

import LoadingState from "../components/utils/LoadingState";
import TrackList from "../components/track/TrackList";
import ArtistList from "../components/artist/ArtistList";

const Home = () => {
  const { tracks, artists, isLoading } = useUserTopItems();

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <div>
      <div className="flex lg:flex-row flex-col lg:space-x-4 space-x-0 lg:space-y-0 space-y-10">
        <TrackList tracks={tracks} />
        <ArtistList artists={artists} />
      </div>
    </div>
  );
};

export default Home;
