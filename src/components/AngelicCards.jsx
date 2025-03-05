import React, { useState } from "react";
import "../styles/AngelicCards.css";

const angelCards = [
    {
      name: "Angel of Love",
      message: "You are surrounded by divine love — open your heart to receive the blessings flowing to you."
    },
    {
      name: "Angel of Guidance",
      message: "Trust the subtle signs — feathers, numbers, and whispers — your angels are showing you the way."
    },
    {
      name: "Angel of Strength",
      message: "You have more inner strength than you realize — call upon your angels to walk with courage."
    },
    {
      name: "Angel of Healing",
      message: "Healing energy is flowing through your heart and soul — release what no longer serves your journey."
    },
    {
      name: "Angel of Abundance",
      message: "Abundance flows freely when you align with your divine purpose — you are worthy of receiving."
    },
    {
      name: "Angel of Protection",
      message: "You are divinely protected — release your fears and know you are safe in angelic arms."
    },
    {
      name: "Angel of New Beginnings",
      message: "A fresh chapter awaits — step forward with faith, for divine opportunities are unfolding."
    },
    {
      name: "Angel of Wisdom",
      message: "Your inner wisdom holds the answers — quiet your mind and listen to the divine truth within."
    },
    {
      name: "Angel of Forgiveness",
      message: "Let go of resentment — forgiveness frees your heart and invites divine peace."
    },
    {
      name: "Angel of Creativity",
      message: "Express your unique gifts — your creativity is a divine spark meant to shine in the world."
    },
    {
      name: "Angel of Patience",
      message: "Divine timing is at work — trust the process and allow things to unfold gracefully."
    },
    {
      name: "Angel of Friendship",
      message: "Your soul family surrounds you — open your heart to deeper connections and spiritual friendships."
    },
    {
      name: "Angel of Release",
      message: "It’s time to let go — release attachments, and trust that better things are on their way."
    },
    {
      name: "Angel of Clarity",
      message: "Confusion is lifting — your angels are clearing the path and bringing divine clarity to your mind."
    },
    {
      name: "Angel of Inner Peace",
      message: "Peace flows within you — breathe deeply and allow divine calm to embrace your heart."
    },
    {
      name: "Angel of Courage",
      message: "Your angels are filling you with courage — face your fears knowing you are never alone."
    },
    {
      name: "Angel of Gratitude",
      message: "Gratitude opens the gates of abundance — thank your angels for every blessing, big or small."
    },
    {
      name: "Angel of Dreams",
      message: "Your dreams are divine whispers — trust them, for they hold messages from your higher self."
    },
    {
      name: "Angel of Transformation",
      message: "You are evolving beautifully — trust the process as you rise into your highest self."
    },
    {
      name: "Angel of Joy",
      message: "Your angels invite you to embrace joy — laugh, dance, and celebrate life’s sacred moments."
    },
  ];  

const AngelicCards = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const drawCard = () => {
    const randomCard =
      angelCards[Math.floor(Math.random() * angelCards.length)];
    setSelectedCard(randomCard);
  };

  const resetCard = () => {
    setSelectedCard(null); 
  };

  return (
    <section id="angelic-cards" className="angelic-cards-section">
      <h2 className="section-title">✨ Ask Your Angels ✨</h2>
      <p className="instructions">
        Think of a question, take a deep breath, and draw a card to receive
        divine guidance.
      </p>

      <div className="card-deck">
        {selectedCard ? (
          <div className="card reveal-card">
            <h3>{selectedCard.name}</h3>
            <p className="full-message">{selectedCard.message}</p>
            <button className="reset-button" onClick={resetCard}>
              Draw Another Card
            </button>
          </div>
        ) : (
          <div className="card back-card" onClick={drawCard}>
            <p>Draw a Card</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AngelicCards;
