import { Artist } from "../../../types";
import ArtistItem from "./ArtistItem";

type Props = {
  artists: Artist[];
};

const ArtistList = ({ artists }: Props) => {
  return (
    <div className="w-full">
      <h2 className="font-bold text-lg mb-4">My Top 10 Artists</h2>
      <div className="flex flex-col space-y-3">
        {artists.map((artist, i) => {
          return <ArtistItem key={i} {...artist} />;
        })}
      </div>
    </div>
  );
};

export default ArtistList;
