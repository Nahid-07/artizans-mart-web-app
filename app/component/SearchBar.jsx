const SearchBar = () => {
  return (
    <div className="max-w-7xl mx-auto lg:mt-24 mt-12">
      <div className="flex justify-center px-4">
        <input
          type="text"
          className="lg:w-2/4 w-full p-3 rounded-l-md border-0 outline-0 text-gray-900 ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500"
          placeholder="Search your item"
        />
        <button className="bg-orange-500 lg:px-5 px-2 py-3 rounded-r-md text-white">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
