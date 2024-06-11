import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="nav__header">
      <nav className="nav">
        <Link to="/" className="nav__link">
          <Logo />
        </Link>
        <div className="nav__items">
          <div className="nav__top">
            <SearchBar />
            <Avatar position="top" isDefault={false} />
          </div>
          <Link to="/upload" className="nav__link">
            <div className="nav__bottom">
              <Button buttonText="UPLOAD" icon="upload" />
              <Avatar position="bottom" isDefault={false} />
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
