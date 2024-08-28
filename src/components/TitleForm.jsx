function TitleForm({slug, onChange, onClickSave, onClicknUndo, onClickNew}) {
  const handleChangeSlug = (value) => {
    onChange('slug', value);
  }

  return (
    <form className="formtitle" onSubmit={onClickSave}>
      <div className="formtitle__path">
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
      <button type="button" className="formtitle__btn--new" onClick={onClickNew}>
        New
      </button>
      <input
        className="formtitle__text"
        type="text"
        placeholder="Slug of the new page"
        value={slug}
        onInput={(ev) => handleChangeSlug(ev.currentTarget.value)}
      />
      <button type="submit" className="formtitle__btn--save">
        Save
      </button>
      <button type="button" className="formtitle__btn--undo" onClick={onClicknUndo}>
        Undo
      </button>
    </form>
  );
}

export default TitleForm;
