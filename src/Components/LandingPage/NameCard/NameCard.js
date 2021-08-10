import myPic from "./MyIcon.webp";
import './NameCard.css'

function NameCard() {
  return (
    <div className="nameCard">
      <div className="cardContainer">
        <img src={myPic} width="150px" height="150px" alt="NameCard" />
      </div>
    </div>
  );
}

export default NameCard;
