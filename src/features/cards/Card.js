import React, { useState } from "react";
import { useSelector } from "react-redux";
// import selector
import { selectCards } from "./cardsSlice";

export default function Card({ id }) {
  const cards = useSelector(selectCards)
  const card = cards[id];
  const [flipped, setFlipped] = useState(false);

  return (
    <li key={id}>
      <button 
      className={`
      ${flipped ? "cardFlipped" : "card"}
      `}
      onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
