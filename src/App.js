import { useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "/images/cat-1.jpg" },
  { src: "/images/cat-2.jpg" },
  { src: "/images/cat-3.jpg" },
  { src: "/images/cat-4.jpg" },
  { src: "/images/cat-5.jpg" },
  { src: "/images/cat-6.jpg" },
];

function App() {
  const [cards, setCards] = useState([]);
  // const [turns, setTurns] = useState(0);
  // const [choiceOne, setChoiceOne] = useState(null);
  // const [choiceTwo, setChoiceTwo] = useState(null);

  const handleChoice = (card) => {
    console.log(card);
  };

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  return (
    <div className="App">
      <h1>MEMORY GAME</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard card={card} key={card.id} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
