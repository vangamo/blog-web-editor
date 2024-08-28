function MetaForm({metadata, onChange}) {

  const handleInput = (ev) => {
    const inputIdentifier = ev.currentTarget.id.replace('post_','');
    const inputValue = ev.currentTarget.value;

    onChange(inputIdentifier, inputValue);
  };

  return (
    <form className="settings">
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="post_author"
          id="post_author"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder-opacity-0 focus:placeholder-opacity-100"
          placeholder="i.e. VanGamo"
          required
          value={metadata.author}
          onInput={handleInput}
        />
        <label htmlFor="post_author" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Author
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="post_tags"
          id="post_tags"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder-opacity-0 focus:placeholder-opacity-100"
          placeholder="i.e. latest"
          value={metadata.tags}
          onInput={handleInput}
        />
        <label htmlFor="post_tags" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Tags
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="post_itinerary"
          id="post_itinerary"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder-opacity-0 focus:placeholder-opacity-100"
          placeholder="i.e. Frontend -> CSS"
          value={metadata.itinerary}
          onInput={handleInput}
        />
        <label htmlFor="post_itinerary" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Itinerary
        </label>
      </div>
      {/*
        - Canonical?
        - Canonical title?
      */}
    </form>
  );
}

export default MetaForm;
