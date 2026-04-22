const Search = () => {
  return (
    <section className=" flex flex-col items-center justify-center ">
      <section className="flex flex-col bg-white p-4 rounded-lg shadow-md w-full max-w-4xl mx-auto items-center justify-center gap-4">
        <div className="flex items-center gap-4 w-full">
          <input
            className=" w-full px-3 border py-2 border-gray-300 rounded-md outline-none"
            type="text"
            placeholder="Search..."
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 font-semibold">
            Search
          </button>
        </div>
      </section>

      <div>
        <h1 className="font-bold text-center mt-6 text-2xl mb-4">
          Carros novos e usados em todo Brasil
        </h1>
      </div>
    </section>
  );
};

export default Search;
