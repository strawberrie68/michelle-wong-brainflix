import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  return (
    <nav className="nav">
      <Logo />
      <div className="nav__items">
        <div className="nav__top">
          <SearchBar />
          <Avatar position="top" style="nav" />
        </div>
        <div className="nav__bottom">
          <Button />
          <Avatar position="bottom" style="nav" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
