import searchIcon from "../../assets/icons/search.svg";
import "./SearchBar.scss";
import { useState } from "react";

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div tabIndex="0" className={`search ${isFocused ? "focused" : ""}`}>
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
