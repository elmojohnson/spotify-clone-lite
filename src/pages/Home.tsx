import useUserTopItems from "../hooks/useUserTopItems";

import LoadingState from "../components/utils/LoadingState";
import TrackList from "../components/track/TrackList";
import ArtistList from "../components/artist/ArtistList";
import CategoryList from "../components/category/CategoryList";

const Home = () => {
  const { tracks, artists, isLoading } = useUserTopItems();

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <div className="flex flex-col space-y-10">
      <div className="flex lg:flex-row flex-col lg:space-x-4 space-x-0 lg:space-y-0 space-y-10">
        <TrackList title="My Top Tracks" tracks={tracks} />
        <ArtistList title="My Top Artists" artists={artists} />
      </div>
      <CategoryList />
    </div>
  );
};

export default Home;
