import "./Avatar.css";
import avatar from "../../assets/images/Mohan-muruge.jpg";

const Avatar = ({ position, isDefault }) => {
  const avatarType = isDefault ? "avatar--default" : `avatar--${position}`;
  return (
    <div className={`avatar ${avatarType}`}>
      {!isDefault && <img className="avatar " src={avatar} alt="avatar" />}
    </div>
  );
};

export default Avatar;
