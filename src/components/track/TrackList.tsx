import { Track } from "../../../types";
import TrackItem from "./TrackItem";

type Props = {
  tracks: Track[];
};

const TrackList = ({ tracks }: Props) => {
  return (
    <div className="w-full">
      <h2 className="font-bold text-lg mb-4">My Top 10 Tracks</h2>
      <div className="flex flex-col space-y-3">
        {tracks.map((track, i) => {
          return <TrackItem key={i} {...track} />;
        })}
      </div>
    </div>
  );
};

export default TrackList;
