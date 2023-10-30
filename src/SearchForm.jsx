import React from "react";
import { useGlobalContext } from "./Context";

const SearchForm = () => {
  const { setSearchValue, searchValue } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue(e.target.elements.search.value);
    if (!searchValue) return;
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
