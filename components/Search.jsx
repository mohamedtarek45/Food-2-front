
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className="flex border border-black/20 rounded-md overflow-hidden max-w-full">
      <div className="flex items-center px-3 sm:px-4 bg-white">
        <IoIosSearch size={24} className="text-black/50" />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="w-full py-3 sm:py-4 px-2 sm:px-3 text-sm sm:text-base text-gray-700 placeholder-gray-400 focus:outline-none bg-white"
      />
      <button className="bg-[#FDB913] ml-auto hover:bg-[#E5A712] text-white font-medium py-3 sm:py-4 px-4 sm:px-8 md:px-16 text-sm sm:text-base ">
        Search
      </button>
    </div>
  );
};

export default Search;
