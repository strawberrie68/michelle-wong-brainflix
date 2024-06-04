import "./Avatar.css";
import avatar from "../../assets/images/Mohan-muruge.jpg";

const Avatar = ({ position }) => {
  return (
    <div className={`avatar nav__avatar-${position}`}>
      <img className="avatar " src={avatar} alt="avatar" />
    </div>
  );
};

export default Avatar;
