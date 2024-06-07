import logo from "../../assets/Logo/BrainFlix-logo.svg";
import "./Logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <img className="logo__image" src={logo} alt="brainflix logo" />
    </div>
  );
};

export default Logo;
