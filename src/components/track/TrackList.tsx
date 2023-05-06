import { Track } from "../../../types";
import TrackItem from "./TrackItem";

type Props = {
  title: string;
  tracks: Track[];
};

const TrackList = ({ tracks, title }: Props) => {
  return (
    <div className="w-full">
      <h2 className="font-bold text-lg mb-4 text-white">{title}</h2>
      <div className="flex flex-col space-y-3">
        {tracks.map((track, i) => {
          return <TrackItem key={i} {...track} />;
        })}
      </div>
    </div>
  );
};

export default TrackList;
