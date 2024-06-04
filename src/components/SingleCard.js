import "./singleCard.css";

const SingleCard = ({ card }) => {
  console.log(card.src);
  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="ImageFront" />

        <img className="back" src="/images/cover.jpg" alt="ImageBack" />
      </div>
    </div>
  );
};

export default SingleCard;
