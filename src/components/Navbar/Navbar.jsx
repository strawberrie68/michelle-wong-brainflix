import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <Logo />
      <div className="nav__items">
        <div className="nav__top">
          <SearchBar />
          <Avatar position="top" isDefault={false} />
        </div>
        <div className="nav__bottom">
          <Button />
          <Avatar position="bottom" isDefault={false} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
