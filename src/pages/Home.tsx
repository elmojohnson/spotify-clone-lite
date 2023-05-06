// Track
import TrackList from "../components/track/TrackList";
import useUserTopItems from "../hooks/useUserTopItems";

import LoadingState from "../components/utils/LoadingState";

const Home = () => {
  const { tracks, isLoading } = useUserTopItems();

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <div>
      <div className="flex lg:flex-row flex-col lg:space-x-4 space-x-0 lg:space-y-0 space-y-10">
        <TrackList tracks={tracks} />
      </div>
    </div>
  );
};

export default Home;
