import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header className="nav__header">
      <nav className="nav">
        <Logo />
        <div className="nav__items">
          <div className="nav__top">
            <SearchBar />
            <Avatar position="top" isDefault={false} />
          </div>
          <div className="nav__bottom">
            <Button buttonText="UPLOAD" icon="upload" />
            <Avatar position="bottom" isDefault={false} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
