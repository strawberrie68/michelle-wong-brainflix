import logo from "../../assets/Logo/BrainFlix-logo.svg";
import "./Logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <img className="logo__image" src={logo} />
    </div>
  );
};

export default Logo;
