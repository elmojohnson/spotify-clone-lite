import { FC } from "react";
import { Search } from "../../../types";

import { MdSearch } from "react-icons/md";
import { CgSpinner } from "react-icons/cg";

const SearchBar: FC<Search> = ({
  placeholder,
  value,
  onChange,
  onSubmit,
  isLoading,
}) => {
  return (
    <div className={`bg-white border rounded overflow-hidden flex items-center space-x-4 ${isLoading && "animate-pulse"}`}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={isLoading}
        className="outline-none bg-transparent w-full px-4 disabled:cursor-not-allowed"
      />
      <button
        onClick={onSubmit}
        disabled={isLoading}
        className="p-3 flex items-center space-x-1 border-l bg-slate-100 hover:bg-slate-200 font-semibold disabled:cursor-not-allowed"
      >
        {
          isLoading ? <CgSpinner className="animate-spin" /> : <MdSearch />
        }
      </button>
    </div>
  );
};

export default SearchBar;
