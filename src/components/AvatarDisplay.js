import blankAvatar from "../images/blankavatar.png";

const AvatarDisplay = ({ ticket }) => {
  return (
    <div className="avatar-container">
      <div className="img-container">
        <img src={ticket.avatar ? ticket.avatar : blankAvatar} alt="" />
      </div>
    </div>
  );
};

export default AvatarDisplay;
