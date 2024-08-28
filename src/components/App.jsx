import { useState } from "react";
import "./App.css";

function App() {
  const [slug, setSlug] = useState("");
  const [mdContent, setMdContent] = useState("");

  const handleSave = (ev) => {
    ev.preventDefault();
  };

  const handleChangeSlug = (slug) => {};

  return (
    <div className="page central">
      <div className="content">
        <form className="formtitle" onSubmit={handleSave}>
          <div className="formtitle__path">
            Knowledge/Better-programmer
            <button type="button" className="icon inline mx-2 size-3 cursor-pointer" title="Change tha path of the post">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z" />
              </svg>
            </button>
          </div>
          <button type="button" className="formtitle__btn--new">
            Nuevo
          </button>
          <input
            className="formtitle__text"
            type="text"
            placeholder="Slug de la página"
            value={slug}
            onInput={(ev) => handleChangeSlug(ev.currentTarget.value)}
          />
          <button type="submit" className="formtitle__btn--save">
            Guardar
          </button>
          <button type="button" className="formtitle__btn--undo">
            Deshacer
          </button>
        </form>
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
            <label
              htmlFor="post_author"
              className=""
            >
              Autor
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
            <label
              htmlFor="post_tags"
              className=""
            >
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
            <label
              htmlFor="post_itinerary"
              className=""
            >
              Itinerary
            </label>
          </div>
          Canonical? Canonical title?
        </form>
        <textarea className="editor">Editor</textarea>
      </div>
    </div>
  );
}

export default App;
