import "./singleCard.css";
export default function SingleCard({ card, handleChoice }) {
  const handleClick = () => {
    console.log(card);
  };

  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="ImageFront" />

        <img
          className="back"
          onClick={handleClick}
          src="/images/cover.jpg"
          alt="ImageBack"
        />
      </div>
    </div>
  );
}
