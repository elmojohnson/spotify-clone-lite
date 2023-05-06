import TrackList from "../components/track/TrackList";
import LoadingState from "../components/utils/LoadingState";
import SearchBar from "../components/utils/SearchBar";
import useSearch from "../hooks/useSearch";

const Search = () => {
  const { value, isLoading, onChange, onSubmit, tracks, artists } = useSearch();
  return (
    <div>
      <h1 className="title">Search</h1>
      <SearchBar
        value={value}
        placeholder="Search"
        isLoading={isLoading}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      {
        isLoading ? <LoadingState /> : <TrackList tracks={tracks} />
      }
    </div>
  );
};

export default Search;
