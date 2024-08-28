function TitleForm({slug, onChange, onClickSave, onClicknUndo, onClickNew}) {
  const handleChangeSlug = (value) => {
    onChange('slug', value);
  }

  return (
    <form className="formtitle" onSubmit={onClickSave}>
      <div className="formtitle__path px-2 text-xs text-gray-500 dark:text-gray-400 translate-y-1">
        Knowledge/Better-programmer
        <button
          type="button"
          className="icon inline mx-2 size-3 cursor-pointer"
          title="Change tha path of the post"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z" />
          </svg>
        </button>
      </div>
      <button type="button" className="formtitle__btn--new focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-800 dark:hover:bg-blue-900 dark:focus:ring-green-800" onClick={onClickNew}>
        New
      </button>
      <input
        type="text" 
        className="formtitle__text container mx-auto px-5 py-2 text-lg border rounded"
        placeholder="Slug of the new page"
        value={slug}
        onInput={(ev) => handleChangeSlug(ev.currentTarget.value)}
      />
      <button type="submit" className="formtitle__btn--save focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        Save
      </button>
      <button type="button" className="formtitle__btn--undo focus:outline-none text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-green-800" onClick={onClicknUndo}>
        Undo
      </button>
    </form>
  );
}

export default TitleForm;
