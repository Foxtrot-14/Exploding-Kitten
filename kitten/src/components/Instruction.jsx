/* eslint-disable react/no-unescaped-entities */
import "./Instruction.css";

const Instruction = () => {
  return (
    <article className="parent">
      <h3 className="heading instruc">Rules of the Game:</h3>
      <div className="heading rule">
        <p>- If you draw a cat card, it's removed from the deck.</p>
        <p>- If you draw an exploding kitten card, you lose the game.</p>
        <p>
          - If you draw a defuse card, it can be used to defuse an exploding
          kitten card drawn later.
        </p>
        <p>
          - If you draw a shuffle card, the deck is reshuffled, and the game
          restarts with a new deck of cards.
        </p>
      </div>
    </article>
  );
};

export default Instruction;
