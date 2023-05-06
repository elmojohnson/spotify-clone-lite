import SearchBar from "../components/utils/SearchBar";
import useSearch from "../hooks/useSearch";

const Search = () => {
  const { value, isLoading, onChange, onSubmit } = useSearch();
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
    </div>
  );
};

export default Search;
