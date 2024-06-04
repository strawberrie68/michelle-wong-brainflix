import searchIcon from "../../assets/icons/search.svg";
import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="search">
      <img className="search__icon" src={searchIcon} alt="search icon" />
      <input className="search__input" type="text" placeholder="Search"></input>
    </div>
  );
};

export default SearchBar;
