import "./Alert.scss";

const Alert = ({ type, message }) => {
  return (
    <div className={`alert alert--${type}`}>
      <p className="alert__body">{message}</p>
    </div>
  );
};

export default Alert;
