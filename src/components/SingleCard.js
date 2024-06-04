const SingleCard = (props) => {
  console.log(props.src);
  return (
    <div className="card" key={props.id}>
      <div>
        {props.src && (
          <img className="front" src={props.src} alt="ImageFront" />
        )}
        <img className="back" src="/images/cover.jpg" alt="ImageBack" />
      </div>
    </div>
  );
};

export default SingleCard;
