import searchIcon from "../../assets/icons/search.svg";
import "./SearchBar.scss";
import { useRef } from "react";

const SearchBar = () => {
  const searchRef = useRef();

  const handleFocus = () => {
    searchRef.current.classList.add("focused");
  };

  const handleBlur = () => {
    searchRef.current.classList.remove("focused");
  };

  return (
    <div tabIndex="0" className="search" ref={searchRef}>
      <img className="search__icon" src={searchIcon} alt="search icon" />
      <input
        className="search__input"
        type="text"
        placeholder="Search"
        onFocus={handleFocus}
        onBlur={handleBlur}
      ></input>
    </div>
  );
};

export default SearchBar;
