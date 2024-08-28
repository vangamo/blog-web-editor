function MetaForm() {
  return (
    <form className="settings">
      <div className="">
        <input
          type="text"
          name="post_author"
          id="post_author"
          className=""
          placeholder="i.e. VanGamo"
          required
        />
        <label htmlFor="post_author" className="">
          Author
        </label>
      </div>
      <div className="">
        <input
          type="text"
          name="post_tags"
          id="post_tags"
          className=""
          placeholder="i.e. latest"
          required
        />
        <label htmlFor="post_tags" className="">
          Tags
        </label>
      </div>
      <div className="">
        <input
          type="text"
          name="post_itinerary"
          id="post_itinerary"
          className=""
          placeholder="i.e. Frontend -> CSS"
          required
        />
        <label htmlFor="post_itinerary" className="">
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
