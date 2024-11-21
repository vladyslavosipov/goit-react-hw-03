import css from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.searchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        value={value}
        onChange={onChange}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default SearchBox;